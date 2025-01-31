import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';

const DesktopView = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        height: 'calc(100vh - 80px)',
        overflow: 'hidden',
        py: 5,
        position: 'relative',
      }}
    >
      <Box
        component="img"
        src="/assets/stock-photos/about.webp"
        alt="about"
        sx={{
          position: 'absolute',
          top: 0,
          left: '-15%',
          height: '100%',
          width: 'auto',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 1) 65%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        sx={{
          mr: 4,
          ml: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};

const MobileView = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        height: 'auto',
        overflow: 'visible',
        pb: 5,
        pt: 0,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          mb: 3,
        }}
      >
        <Box
          component="img"
          src="/assets/stock-photos/about.webp"
          alt="about"
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            height: 'calc(100vh - 64px)',
            width: 'auto',
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 95%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Grid
        container
        justifyContent="space-between"
        sx={{
          mr: 0,
          ml: 0,
          position: 'relative',
          zIndex: 3,
        }}
      >
        {children}
      </Grid>
    </Box>
  );
};

export default function MarketingLandingAboutHero() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));

  const content = (
    <>
      <Grid xs={12} xl={7} md={5} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid
        xs={12}
        md={7}
        xl={5}
        sx={{
          height: { md: 'calc(100vh - 80px)', xs: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: { xs: 3, md: 2, lg: 7 },
          mt: { xs: -2, md: 0 },
        }}
      >
        <Grid item md={10} lg={12}>
          <Typography variant="h2">About</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'white' }}>
            If you are seeking a state-of-the-art, customized website to enhance your business, you
            have arrived at the right destination.
            <br />
            <br />
            Platinum Programming specializes in developing bespoke web applications, leveraging
            advanced software and the latest web technologies. We provide tailored services and
            packages designed to meet the specific needs of corporate partners, established
            enterprises, and well-funded startups. Explore our portfolio and schedule a
            complimentary consultation today to distinguish your professional website with the
            expertise of our highly skilled developers.
          </Typography>

          <Button
            variant="contained"
            color="inherit"
            size="large"
            fullWidth
            href="/services"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Our Services
          </Button>
        </Grid>
      </Grid>
    </>
  );

  return isMdUp ? <DesktopView>{content}</DesktopView> : <MobileView>{content}</MobileView>;
}
