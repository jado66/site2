import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SvgColor from 'src/components/svg-color';
import SubscribeWidget from '../common-components/subscribe-widget';

// ----------------------------------------------------------------------
export default function MarketingNewsletter({ sx, ...other }) {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.neutral', ...sx }} {...other}>
      <Container>
        <Stack
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: 'column', md: 'row' }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            direction={{ xs: 'column', md: 'row' }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <SvgColor
              src="/assets/icons/ic_newsletter.svg"
              sx={{ width: 80, height: 80, color: 'primary.main' }}
            />

            <Stack spacing={1}>
              <Typography variant="h4">Subscribe to Our Newsletter</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Get updates on all our latest offerings.
              </Typography>
            </Stack>
          </Stack>

          <SubscribeWidget />
        </Stack>
      </Container>
    </Box>
  );
}

MarketingNewsletter.propTypes = {
  sx: PropTypes.object,
};
