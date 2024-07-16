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
      position: 'relative',
      backgroundImage: 'url(/assets/stock-photos/services.webp)',
      py: { xs: 10, md: 30 },
      backgroundSize: 'cover', // Ensure background covers the container
      backgroundPosition: 'center', // Center the background image
      width: '100%', // Ensure width is 100%
      height: 'auto', // Set height to auto to maintain aspect ratio
    }}
    >
       <Box
        sx={{
          position: 'absolute',
          top: '75%',
          left: 0,
          right: 0,
          bottom: '0',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
        }}
      />
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
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
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
