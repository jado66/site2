import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';
import { useState, useRef, useEffect } from 'react';

import './banner.css';
import { Divider, Stack, Typography } from '@mui/material';
import Logo from 'src/components/logo';
// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative !important',
          width: '100%',
          height: { xs: '40vh', lg: '100vh' }, // Adjust this to fit your layout needs
        }}
      >
        <VideoBackground />
      </Box>
      <Container
        sx={{
          pb: { xs: 10, md: 10 },
          pt: { xs: 10, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 900,
            height: { xs: '50vh', lg: 'auto' },
            mb: { xs: 4, md: 15 },
            mx: { xs: 'auto' },
            textAlign: { xs: 'center' },
          }}
        >
          <Stack display={{ xs: 'auto', lg: 'none' }}>
            <Logo sx={{ mt: 3 }} size={80} />
          </Stack>

          <Typography variant="h2">Custom Web Development </Typography>

          <Typography
            sx={{ color: 'text.secondary', maxWidth: { xs: '400px', md: '800px' }, mx: 'auto' }}
          >
            Platinum Programming delivers innovative custom web solutions, ensuring your digital
            presence stands out with expert development, responsive design, and comprehensive
            support.
          </Typography>
        </Stack>

        <Divider
          sx={{
            mt: { xs: 0, md: 15 },
            mb: { xs: 6, md: 15 },
            borderColor: 'lightgray',
            mx: 5,
            display: { xs: 'auto', md: 'none' },
          }}
        />
      </Container>
    </>
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
