import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';

import Logo from '../logo';
import ProgressBar from '../progress-bar';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledRoot2 = styled('div')(({ theme }) => ({
  ...bgBlur({
    blur: 2,
    opacity: 0.24,
    color: theme.palette.background.default,
  }),
  top: 0,
  zIndex: 9999,
  width: '100%',
  height: '100vh',
  display: 'flex',
  // position: 'absolute',
  // alignItems: 'center',
  justifyContent: 'center',
}));

// ----------------------------------------------------------------------

export default function SplashScreen({ sx }) {
  return (
    <>
      <ProgressBar />

      <StyledRoot sx={sx}>
        <m.div
          animate={{
            scale: [1, 0.96, 1, 0.96, 1],
            opacity: [1, 0.48, 1, 0.48, 1],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeatDelay: 1,
            repeat: Infinity,
          }}
        >
          <Logo size={128} />
        </m.div>
      </StyledRoot>

      <Box sx={{ width: 1, height: '100vh' }} />
    </>
  );
}

export const LogoLoading = ({ sx }) => {
  return (
    <StyledRoot2>
      <m.div
        animate={{
          // scale: [1, 0.96, 1, 0.96, 1],
          opacity: [1, 0.48, 1, 0.48, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 0,
          repeat: Infinity,
        }}
        style={{ display: 'flex', flexDirection: 'row', height: '40px', alignItems: 'center' }}
      >
        <Logo size={25} single />
        <Typography variant="h3" sx={{ my: 0, mb: 0.2, mx: { md: 4, xs: 1 }, pb: 0.2 }}>
          Loading More Content
        </Typography>
        <Logo size={25} single />
      </m.div>
    </StyledRoot2>
  );
};

SplashScreen.propTypes = {
  sx: PropTypes.object,
};
