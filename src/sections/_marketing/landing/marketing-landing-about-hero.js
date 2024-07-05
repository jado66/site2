import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { fCurrency } from 'src/utils/format-number';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { _tags } from 'src/_mock';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

import { bgGradient } from 'src/theme/css';
import FormProvider, { RHFSlider, RHFTextField } from 'src/components/hook-form';

import Iconify from 'src/components/iconify';
import {
  inqueryEmail,
  inqueryEmailLink,
  inqueryPhoneLink,
  inqueryPhoneText,
} from 'src/constants/contact';

// ----------------------------------------------------------------------

export const _applications = [
  {
    label: 'Chatbot',
    iconifyIcon: 'bx:bot',
  },
  {
    label: 'Email',
    iconifyIcon: 'ic:outline-email',
  },
  {
    label: 'Voice',
    iconifyIcon: 'carbon:phone-voice',
  },
  {
    label: 'SMS',
    iconifyIcon: 'ic:outline-sms',
  },
  {
    label: 'Other',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAboutHero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/about.jpg',
        }),
        height: 'calc(100vh - 60px  )',
        overflow: 'hidden',
        py: { xs: 10, md: 5 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 3,
          }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={6} />

          <Grid xs={12} md={5} pt={{md:10, xs:2}}>
            <Typography variant="h2">About</Typography>

            <Typography sx={{ mt: 3, mb: 5, color: 'white' }}>
              If you are in the market for a cutting-edge, customized website to elevate your
              business, you have come to the right place.
              <br />
              <br />
              Platinum Programming develops custom web applications, utilizing specialized software
              and the latest web technology. We offer services and packages tailored to the needs of
              corporate partners, established businesses, and funded start-up companies. Take a look
              at our work and book a free consultation today to make your professional website stand
              out with the support of our highly skilled developers.
            </Typography>

            <Button
              variant="contained"
              color="inherit"
              size="large"
              fullWidth
              href = '/portfolio'
              endIcon={<Iconify icon="carbon:chevron-right" />}
            >
              See Examples of Our Work
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
