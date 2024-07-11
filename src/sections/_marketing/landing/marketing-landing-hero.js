import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';
import { useState, useRef, useEffect } from 'react';


import './banner.css'
// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative !important',
        width: '100%',
        height:{xs:'50vh', lg:'100vh'}, // Adjust this to fit your layout needs
      }}
    >
      <VideoBackground />
      
    </Box>
  );
}

const VideoBackground = () => {
  const [isVideoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const handleVideoEnd = () => {
      setVideoEnded(true);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        zIndex: -1,
        backgroundColor: isVideoEnded ? '#000' : 'transparent',
        transition: 'background-color 2s', // Change duration as needed
      }}
    >
      <HeroVideoComponent />
    </div>
  );
};


const HeroVideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = (e) => {
      if (e.animationName === 'fadeOut') {
        videoRef.current.classList.remove('fade-out');
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        videoRef.current.classList.add('fade-in');
      }
    };

    const videoElement = videoRef.current;
    videoElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      videoElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      className="fade-in"
      onEnded={() => {
        videoRef.current.classList.remove('fade-in');
        videoRef.current.classList.add('fade-out');
      }}
      style={{
        position: 'absolute',
        width: '111.5%',
        height: '100%',
        objectFit: 'cover',
        marginLeft: '-11.5%',
      }}
    >
      <source src="/assets/stock-photos/platinum-programming.webm" type="video/webm" />
    </video>
  );
};
