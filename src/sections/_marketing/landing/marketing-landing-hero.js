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

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        overflow: 'hidden',
      }}
    >
      <VideoBackground />

      <Container
        sx={{
          py: 15,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0 }} flex={1}>
          <Grid
            xs={12}
            sx={{
              textAlign: { xs: 'center' },
              flex: { md: 1 },
            }}
          >
            <Typography variant="overline" sx={{ color: 'secondary.main' }} textAlign="center">
              Executive Website Development
            </Typography>

            <Typography variant="h1" sx={{ my: 3 }}>
              PLATINUM TECHNOLOGIES
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              We develop custom web applications utiziling the latest technologies
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

              {/* <Stack direction="row" alignItems="center" sx={{ typography: 'h6' }}>
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Examples
              </Stack> */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const VideoBackground = () => {
  return (
    <video
      autoPlay
      muted
      loop
      style={{
        position: 'absolute',
        width: '100%',
        left: '50%',
        top: '50%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: '-1',
      }}
    >
      <source src="/assets/background/bob.mp4" type="video/mp4" />
    </video>
  );
};
