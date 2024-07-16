'use client';
import dynamic from 'next/dynamic';

// Dynamically import PhaserGame without SSR
const GalagaGame = dynamic(() => import('src/components/game/Galaga.jsx'), { ssr: false });

const Game = () => {

    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom:'5px' }}>
                Platinum Galaga
            </h1>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                position:'relative',
                height:'100%',
                padding:'1em'

            }}>
                <GalagaGame />
               
            </div>
        </>
    );
};

export default Game;
