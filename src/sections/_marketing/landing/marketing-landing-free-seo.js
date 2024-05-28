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

export default function MarketingLandingFreeSEO() {
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array().required().min(1, 'Services field must have at least 1 items'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    compnany: Yup.string().required('Compnany is required'),
    website: Yup.string().required('Website is required'),
  });

  const defaultValues = {
    applications: [],
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    website: '',
    budget: [2000, 10000],
    message: '',
  };

  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0),
          imgUrl: '/assets/images/marketing/marketing_get_free_seo.jpg',
        }),
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
          <Grid xs={12} md={5}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: 'common.white',
                mb: { xs: 3, md: 8 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Schedule a <br />
              Complimentary Consultation
            </Typography>

            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Iconify width={28} icon="carbon:mobile" />
              <Stack spacing={0.5}>
                <Typography variant="h6">Call or text us</Typography>
                <Link color="inherit" variant="body2" href={inqueryPhoneLink}>
                  {inqueryPhoneText}
                </Link>
              </Stack>
            </Stack>

            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Iconify width={28} icon="carbon:email" />
              <Stack spacing={0.5}>
                <Typography variant="h6">Talk to us</Typography>
                <Link color="inherit" variant="body2" href={inqueryEmailLink}>
                  {inqueryEmail}
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <FormProvider methods={methods} onSubmit={onSubmit}>
              <Stack spacing={2.5} alignItems="flex-start">
                <Stack
                  spacing={{ xs: 2.5, md: 2 }}
                  direction={{ xs: 'column', md: 'row' }}
                  sx={{ width: 1 }}
                >
                  <RHFTextField name="firstName" label="First Name" />
                  <RHFTextField name="lastName" label="Last Name" />
                </Stack>

                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <RHFTextField name="email" label="Email" />
                  <RHFTextField name="phoneNumber" label="Phone number" />
                </Stack>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <RHFTextField name="company" label="Company" />

                  <RHFTextField name="website" label="Website" />
                </Stack>

                <Stack spacing={1} sx={{ py: 2, width: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    Areas of Interest
                  </Typography>
                  <Controller
                    name="applications"
                    control={control}
                    render={({ field, fieldState: { error } }) => (
                      <div>
                        <Stack direction="row" flexWrap="wrap" spacing={2}>
                          {_applications.map((application) => (
                            <ToggleButton
                              {...field}
                              key={application.label}
                              color="standard"
                              selected={field.value?.includes(application.label)}
                              onChange={() =>
                                field.onChange(getSelected(field.value, application.label))
                              }
                              sx={{
                                py: 0.5,
                                px: 1,
                                typography: 'body2',
                                [`&.${toggleButtonClasses.selected}`]: {
                                  bgcolor: 'text.primary',
                                  borderColor: 'transparent',
                                  color: (theme) =>
                                    theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
                                  '&:hover': {
                                    bgcolor: 'text.primary',
                                  },
                                },
                              }}
                            >
                              {application.label}

                              {application.iconifyIcon && (
                                <Iconify icon={application.iconifyIcon} sx={{ ml: 1.5 }} />
                              )}
                            </ToggleButton>
                          ))}
                        </Stack>

                        {!!error && (
                          <FormHelperText error sx={{ px: 2 }}>
                            {error?.message}
                          </FormHelperText>
                        )}
                      </div>
                    )}
                  />
                </Stack>

                <Stack spacing={5} sx={{ width: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    Project Budget
                  </Typography>

                  <RHFSlider
                    name="budget"
                    valueLabelDisplay="on"
                    max={20000}
                    step={1000}
                    valueLabelFormat={(value) => fCurrency(value)}
                  />
                </Stack>

                <RHFTextField name="message" label="Message" multiline rows={2} />
              </Stack>

              <LoadingButton
                size="large"
                color="inherit"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ mt: 3 }}
              >
                Send Request
              </LoadingButton>
            </FormProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
