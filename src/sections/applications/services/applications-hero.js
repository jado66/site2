import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ApplicationsHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderForm = (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
      <InputBase
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:email" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Email"
        sx={{
          pl: 1.5,
          height: 48,
          borderRadius: 1,
          color: 'grey.800',
          bgcolor: 'common.white',
        }}
      />

      <InputBase
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Iconify icon="carbon:license-global" width={24} sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
        placeholder="Website URL"
        sx={{
          pl: 1.5,
          height: 48,
          borderRadius: 1,
          color: 'grey.800',
          bgcolor: 'common.white',
        }}
      />

      <Button
        fullWidth={!mdUp}
        color="primary"
        size="large"
        variant="contained"
        sx={{ flexShrink: 0 }}
      >
        Analyse
      </Button>
    </Stack>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.common.black, 0)} 0%`,
          endColor: `${theme.palette.common.black} 75%`,
          imgUrl: '/assets/images/marketing/marketing_services_hero.jpg',
        }),
        py: { xs: 15, md: 20 },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 480,
                textAlign: 'center',
                color: 'common.white',
              }}
            >
              <Typography variant="h1" sx={{ color: 'primary.main' }}>
                AI Applications
              </Typography>

              <Typography sx={{ opacity: 0.72 }}>
                Our team can help you to build AI applications that can help you to automate your
                any type of customer facing communication
              </Typography>
            </Stack>

            <Stack
              spacing={2}
              direction={{ xs: 'column', md: 'row' }}
              alignItems={{ md: 'center' }}
              justifyContent={{ md: 'center' }}
            >
              <Button
                fullWidth={!mdUp}
                color="primary"
                size="large"
                variant="contained"
                sx={{ flexShrink: 0 }}
              >
                Web Chat
              </Button>
              <Button
                fullWidth={!mdUp}
                color="primary"
                size="large"
                variant="contained"
                sx={{ flexShrink: 0 }}
              >
                Text (SMS)
              </Button>
              <Button
                fullWidth={!mdUp}
                color="primary"
                size="large"
                variant="contained"
                sx={{ flexShrink: 0 }}
              >
                Voice
              </Button>
              <Button
                fullWidth={!mdUp}
                color="primary"
                size="large"
                variant="contained"
                sx={{ flexShrink: 0 }}
              >
                Email
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
