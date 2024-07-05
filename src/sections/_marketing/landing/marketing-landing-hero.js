import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import withDelay, { DelayWrapper } from 'src/app/components/wrappers/withDelayWrapper';
import withDelayWrapper from 'src/app/components/wrappers/withDelayWrapper';
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
      }}
    >
      <VideoBackground />
      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
          top: { md: 0 },
          left: { md: 0 },
          zIndex: 2,
        }}
      >
        {/* <Grid container columnSpacing={{ xs: 0 }} flex={1}>
          <Grid
            xs={12}
            sx={{
              textAlign: { xs: 'center' },
              flex: { md: 1 },
            }}
            display="flex"
            flexDirection="column"
          >
            <DelayWrapper delay={18500} className = 'banner'>
              <Typography
                variant="h1"
                sx={{ color: 'white', mt: -14, fontWeight: 'bold', fontSize: '120px !important;' }}
                textAlign="center"
                className = 'company-name'
              >
                PLATINUM PROGRAMMING
              </Typography>

              <Typography
                variant="overline"
                sx={{ color: 'white', marginTop: 22 }}
                textAlign="center"
              >
                Executive Website Development
              </Typography>
 
              <Stack
                spacing={3}
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'center', md: 'unset' }}
                justifyContent={{ xs: 'center' }}
                sx={{ mt: 5 }}
              >
                <Button variant="contained" color="inherit" size="large" href="/about">
                  Learn More
                </Button>
              </Stack>
            </DelayWrapper>
          </Grid>
        </Grid> */}
      </Container>
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
        transition: 'backgroundColor 2s', // Change duration as needed
      }}
    >
      <HeroVideoComponent/>
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
      <source src="/assets/stock-photos/platinum-programming.mp4" type="video/mp4" />
    </video>
  );
};
