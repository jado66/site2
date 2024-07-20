'use client';

import { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import { Button } from '@mui/material';
import Iconify from '../iconify';
import { height } from '@mui/system';

const gameContainerStyle = {
  position: 'relative',
  textAlign: 'center'
};

const buttonStyleLeft = {
  position: 'absolute',
  top: '50%',
  height:'150px',

  left: '.5%',
  transform: 'translateY(-50%)',
  minWidth:0

};

const buttonStyleRight = {
  position: 'absolute',
  height:'150px',
  top: '50%',
  right: '.5%',
  transform: 'translateY(-50%)',
  minWidth:0
};

const GalagaGame = ({showButtons}) => {
  const gameRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [lives, setLives] = useState(1);
  const [score, setScore] = useState(0);
  const isHoldingLeft = useRef(false);
  const isHoldingRight = useRef(false);

  const widthRef = useRef(false);

  const [gameOver, setGameOver] = useState(false);
  const gameInstance = useRef(null);

  const calculateGameSize = () => {
    const maxWidth = 800;
    const maxHeight = 600;
    const margin = 20;

    const availableWidth = window.innerWidth - (2 * margin);
    const availableHeight = window.innerHeight - (2 * margin);

    let width = availableWidth > maxWidth ? maxWidth : availableWidth;
    let height = availableHeight > maxHeight ? maxHeight : availableHeight;

    widthRef.current = width

    const aspectRatio = maxWidth / maxHeight;

    if (width / height > aspectRatio) {
      width = height * aspectRatio;
    } else {
      height = width / aspectRatio;
    }

    const scale = width / maxWidth;

    return { width, height, scale };
  };

  const handleLeftButtonDown = () => {
    isHoldingLeft.current = true;
  };

  const handleLeftButtonUp = () => {
    isHoldingLeft.current = false;
  };

  const handleRightButtonDown = () => {
    isHoldingRight.current = true;
  };

  const handleRightButtonUp = () => {
    isHoldingRight.current = false;
  };

  useEffect(() => {
    const { width, height } = calculateGameSize();

    if (gameStarted && !gameInstance.current) {
      const config = {
        type: Phaser.AUTO,
        parent: gameRef.current,
        scene: {
          preload: preload,
          create: create,
          update: update,
        },
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 0 },
            debug: false
          }
        },
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: width,
          height: height
        }
      };

      gameInstance.current = new Phaser.Game(config);
    }

    return () => {
      if (gameInstance.current) {
        gameInstance.current.destroy(true);
        gameInstance.current = null;
      }
    };
  }, [gameStarted]);

  function preload() {
    this.load.image('player', '/assets/game/ship.png');
    this.load.image('enemy', '/assets/game/enemy.png');
    this.load.image('bullet', '/assets/game/bullet.png');
    this.load.image('fastEnemy', '/assets/game/fast-ship.png');

    this.load.audio('background_music', '/assets/game/background_music.mp3');
    this.load.audio('shoot_sound', '/assets/game/shoot.wav');
    this.load.audio('explosion_sound', '/assets/game/explosion.wav');
    this.load.audio('player_death_sound', '/assets/game/player_death.wav');
  }

  function create() {

    this.width = this.sys.game.config.width;
    this.height = this.sys.game.config.height;

    this.scale = this.width / 800

    this.spawnEnemy = spawnEnemy.bind(this)
    this.enemySpeed = 1 * this.scale;
    this.enemySpawnDelay = 3000;
    this.enemySpawnDelayMax = 3000
    this.maxBullets = 3;
    this.difficultyTimer = this.time.addEvent({
      delay: 5000, // Increase difficulty every 10 seconds
      callback: increaseDifficulty,
      callbackScope: this,
      loop: true
    });

    this.spawnEnemyTimer = this.time.addEvent({
      delay: this.enemySpawnDelay,
      callback: spawnEnemy,
      callbackScope: this,
      loop: true
    });

    // this.livesText = this.add.text(300, 16, 'Lives: 3', { fontSize: '32px', fill: '#fff' });

    this.backgroundMusic = this.sound.add('background_music', { loop: true });
    this.shootSound = this.sound.add('shoot_sound');
    this.explosionSound = this.sound.add('explosion_sound');
    this.playerDeathSound = this.sound.add('player_death_sound');
    this.backgroundMusic.volume = 0.05; // This will lower the volume to 50%

    this.backgroundMusic.play();

    this.player = this.physics.add.sprite(this.width/2, .9*this.height, 'player');
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.5*this.scale);
    this.player.setSize(this.player.width * 0.8, this.player.height * 0.8); // Adjust collision box

    this.enemies = this.physics.add.group();

    this.enemies.children.iterate((enemy) => {
      enemy.setScale(0.5*this.scale);
      enemy.setSize(enemy.width * 0.8, enemy.height * 0.8); // Adjust collision box
    });
    

    this.spawnEnemy('enemy', this.width*.25)
    this.spawnEnemy('enemy', this.width*.75)
    

    this.bullets = this.physics.add.group();

    this.cursors = this.input.keyboard.createCursorKeys();
    this.fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: `${Math.floor(this.width/800*45)}px`, fill: '#fff' });

    this.physics.add.overlap(this.player, this.enemies, gameOverHandler, null, this);

    for (let i = 0; i < 100; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      const size = Math.random() * 2 + 1;
      this.add.circle(x, y, size, 0xffffff);
    }

    // Add touch controls
    this.input.on('pointerdown', (pointer) => {
      
      if (this.bullets.countActive(true) < this.maxBullets) {
        const bullet = this.bullets.create(this.player.x, this.player.y - 16, 'bullet').setScale(0.3 * this.scale );
        bullet.setVelocityY(-400);
        this.shootSound.play({volume:0.05});
      }
       
    });

    this.input.on('pointerup', () => {
      this.player.setVelocityX(0);
    });
  }


  function update() {
    if (this.cursors.left.isDown || isHoldingLeft.current) {
      this.player.setVelocityX(-200);
    } else if (this.cursors.right.isDown || isHoldingRight.current) {
      this.player.setVelocityX(200);
    } else {
      this.player.setVelocityX(0);
    }
  
    if (Phaser.Input.Keyboard.JustDown(this.fireButton) && this.bullets.countActive(true) < this.maxBullets) {
      const bullet = this.bullets.create(this.player.x, this.player.y - 16, 'bullet').setScale(0.3 * this.scale);
      bullet.setVelocityY(-400);
      this.shootSound.play({volume: 0.05})
    }

  
    this.physics.add.collider(this.bullets, this.enemies, (bullet, enemy) => {
      bullet.destroy();
      enemy.destroy();
      this.explosionSound.play({volume: 0.05})

      setScore(prevScore => {
        const newScore = prevScore + 10;
        this.scoreText.setText('Score: ' + newScore);
        return newScore;
      });
    });
  
    // Enemy movement
    this.enemies.children.entries.forEach((enemy) => {
      if (enemy.texture.key === 'fastEnemy') {
        enemy.x += Math.sin(enemy.y / 30) * 3 * this.scale;
      } else {
        enemy.x += this.enemySpeed;
      }
  
      // Reverse direction when reaching the edges
      if (enemy.x <= 25 || enemy.x >= this.width-25) {
        this.enemySpeed *= -1;
      }
  
      if (enemy.y > this.height) {
        enemy.destroy();
        setLives(prevLives => {
          this.playerDeathSound.play({volume: 0.05})
          const newLives = prevLives - 1;
          // this.livesText.setText('Lives: ' + newLives);
          if (newLives <= 0) {
            gameOverHandler.call(this);
          }
          return newLives;
        });
      }
    });

    this.bullets.children.entries.forEach((bullet) => {
      if (bullet.y < 0) {
        bullet.destroy();
      }
    });
  
   
  }

  
  function gameOverHandler() {
    this.scene.pause();
    this.playerDeathSound.play({volume: 0.05})
    this.backgroundMusic.stop();
    setGameOver(true);

  }

  function increaseDifficulty() {
    this.enemySpeed += 0.2 * this.scale;
    this.enemySpawnDelay = Math.max(500, this.enemySpawnDelayMax);
    this.enemySpawnDelayMax = this.enemySpawnDelayMax * .8
    this.spawnEnemyTimer.delay = this.enemySpawnDelay;
  }

  function spawnEnemy(type, startX) {
    const x = startX || Phaser.Math.Between(.25*this.width, .75*this.width);
    const enemyType = type || Math.random() < 0.7 ? 'enemy' : 'fastEnemy';
    const enemy = this.enemies.create(x, 0, enemyType).setScale(0.5 * this.scale);
    enemy.setSize(enemy.width * 0.8, enemy.height * 0.8);
    
    if (enemyType === 'fastEnemy') {
      enemy.setTint(0xff0000); // Make fast enemies red
      enemy.setVelocityY(100*this.scale);
    } else {
      enemy.setVelocityY(50*this.scale);
    }
  }

  const handleStart = () => {
    setGameStarted(true);
    setScore(0);
    setLives(1);
    setGameOver(false);
  };

  const handleRestart = () => {
    if (gameInstance.current) {
      gameInstance.current.destroy(true);
      gameInstance.current = null;
    }
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setLives(1);

    

  };

  return (
    <div style={{ textAlign: 'center' }}>
      {!gameStarted && !gameOver && (
        <Button variant = 'outlined' onClick={handleStart}>Start Game</Button>
      )}
      {gameOver && (
        <div style={{textAlign:'center'}}>
          <h2>Game Over</h2>
          <p>Your score: {score}</p>
          <Button variant = 'outlined' onClick={handleRestart}>Continue</Button>
        </div>
      )}
      
      <div ref={gameRef} style={{display:gameOver?'none':'block'}} />
      {((widthRef.current && widthRef.current < 600) || showButtons) && (
        <div style={{...gameContainerStyle, display:(gameStarted && !gameOver)?'block':'none'}}>   
          <Button
            variant='outlined'
            style={buttonStyleLeft}
            onMouseDown={handleLeftButtonDown}
            onMouseUp={handleLeftButtonUp}
            onTouchStart={handleLeftButtonDown} // Added for touch screen compatibility
            onTouchEnd={handleLeftButtonUp}  
          >
            <Iconify icon="fa6-solid:caret-left"  />
          </Button>
          <div ref={gameRef} />
          <Button
            variant='outlined'
            style={buttonStyleRight}
            onMouseDown={handleRightButtonDown}
            onMouseUp={handleRightButtonUp}
            onTouchStart={handleRightButtonDown} // Added for touch screen compatibility
            onTouchEnd={handleRightButtonUp}
          >
            <Iconify icon="fa6-solid:caret-right"  />
          </Button>
        </div>
      )}
    </div>
  );
};

export default GalagaGame;