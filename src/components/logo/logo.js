import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

function Logo({ single = false, stacked = false, size = 50, sx, imageStyle }) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const fullLogo = <img src="/assets/logo/LogoFull.png" width={'229px'} height={'150px'} />;

  const singleLogo = (
    <img src="/assets/logo/Logo.png" width={size * 1.97} height={size} style={imageStyle} />
  );

  const stackedLogo = (
    <img src="/assets/logo/LogoStacked.png" width={size * 4.97} height={size} style={imageStyle} />
  );

  const logoToDisplay = (single ? singleLogo : stacked ? stackedLogo : fullLogo)


  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          // width: 150,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {logoToDisplay}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
