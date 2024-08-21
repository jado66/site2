import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { fCurrency } from 'src/utils/format-number';
import * as Yup from 'yup';
import { _tags } from 'src/_mock';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';
import { Form, useFormik } from 'formik';
import {
  inqueryEmail,
  inqueryEmailLink,
  inqueryPhoneLink,
  inqueryPhoneText,
  businessHours,
} from 'src/constants/contact';
import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

import useSendRequestForm from 'src/utils/hooks/useSendRequestForm';
import { Divider, Slider } from '@mui/material';
import { toast } from 'react-toastify';
import { transform } from 'typescript';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export const _services = [
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
    services: Yup.array(),
    email: Yup.string().required('Email is required').email('That is not an email'),
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string(),
    company: Yup.string(),
  });

  const { loading, error, success, sendRequestFormByEmail } = useSendRequestForm();

  const formik = useFormik({
    initialValues: {
      name: '',
      services: [],
      email: '',
      phoneNumber: '',
      budget: [40000, 100000],
      message: '',
    },
    validationSchema: MarketingContactSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      // awsait sendRequestFormByEmail(values);
    },
  });

  const handleServicesChange = (service) => {
    formik.setFieldValue(
      'services',
      formik.values.services.includes(service)
        ? formik.values.services.filter((app) => app !== service)
        : [...formik.values.services, service]
    );
  };

  const submitForm = async () => {
    const errors = await formik.validateForm();

    if (!formik.values.name || !formik.values.email || !formik.values.phoneNumber) {
      toast('Name, email, and phone are required.');
      return;
    }

    sendRequestFormByEmail(formik.values);

    // toast('Request was successfully sent. We will respond in 2-3 business days.')
    // onReset();
  };

  const mdUp = useResponsive('up', 'md');

  const FormData = (
    <>
      <Grid xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid
        xs={12}
        md={5}
        sx={{
          bgcolor: { md: 'transparent', xs: '#212B36' },
          px: { xs: 2, md: 4 },
          mt: { xs: -2, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: 'white',
            mb: { xs: 3, md: 4 },
            mt: { xs: 0, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
            whiteSpace: 'nowrap',
          }}
        >
          Complimentary Consultation
        </Typography>
        <form>
          <Stack spacing={2.5} alignItems="flex-start">
            <Stack spacing={{ xs: 2.5, md: 2 }} direction={'row'} sx={{ width: 1 }}>
              <StyledTextField
                name="name"
                label="Name"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <StyledTextField
                name="email"
                label="Email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Stack>

            <Stack direction={'row'} spacing={{ xs: 2.5, md: 2 }} sx={{ width: 1 }}>
              <StyledTextField
                name="phoneNumber"
                label="Phone number"
                fullWidth
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
              <StyledTextField
                name="company"
                label="Company Name"
                fullWidth
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Stack>

            <Stack spacing={1} sx={{ pt: 2, width: 1 }}>
              <Typography variant="overline" sx={{ color: 'white' }}>
                Areas of Interest
              </Typography>
              <div>
                <Stack direction="row" flexWrap="wrap" spacing={2}>
                  {_services.map((services) => (
                    <ToggleButton
                      key={services.label}
                      color="standard"
                      selected={formik.values.services.includes(services.label)}
                      onChange={() => handleServicesChange(services.label)}
                      sx={{
                        py: 0.5,
                        px: 1,
                        color: 'white',
                        typography: 'body2',
                        [`&.${toggleButtonClasses.selected}`]: {
                          bgcolor: 'text.primary',
                          borderColor: 'transparent',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'text.primary',
                          },
                        },
                      }}
                    >
                      {services.label}
                      {services.iconifyIcon && (
                        <Iconify icon={services.iconifyIcon} sx={{ ml: 1.5 }} />
                      )}
                    </ToggleButton>
                  ))}
                </Stack>
              </div>
            </Stack>

            {formik.values.services.includes('Other') && (
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 2.5, md: 2 }}
                sx={{ width: 1 }}
              >
                <StyledTextField
                  name="other"
                  label="Other Interests"
                  fullWidth
                  value={formik.values.other}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.other && Boolean(formik.errors.other)}
                  helperText={formik.touched.other && formik.errors.other}
                />
              </Stack>
            )}

            <Stack spacing={5} sx={{ width: 1, mt: 2, display: 'flex', flexDirection: 'row' }}>
              <Typography variant="overline" sx={{ color: 'white', whiteSpace: 'nowrap' }}>
                Total Budget
              </Typography>

              <StyledSlider
                name="budget"
                valueLabelDisplay="on"
                max={500000}
                min={10000}
                step={5000}
                value={formik.values.budget}
                valueLabelFormat={(value) => fCurrency(value)}
                onChange={(_, newValue) => formik.setFieldValue('budget', newValue)}
              />
            </Stack>

            <StyledTextField
              name="message"
              label="Message"
              fullWidth
              multiline
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Stack>

          <Button
            size="large"
            color="inherit"
            type="button"
            variant="contained"
            sx={{ mt: 3 }}
            onClick={submitForm}
            // disabled={
            //   !formik.touched.name ||
            //   !formik.touched.email ||
            //   !!formik.errors.name ||
            //   !!formik.errors.email
            // }
          >
            Send Request
          </Button>
        </form>

        <Grid container spacing={4} mt={{ xs: 4, md: 4 }} sx={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h2">
              Let's Connect
            </Typography>
          </Grid>

          <Grid item md={4} xs={6} display="flex" justifyContent="center">
            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Stack spacing={0.5} display="flex" justifyContent="center">
                <Iconify width={28} icon="carbon:mobile" sx={{ marginX: 'auto' }} />
                <Typography variant="h6">Call or Text</Typography>
                <Link color="inherit" variant="body2" href={inqueryPhoneLink}>
                  {inqueryPhoneText}
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12} display="flex" justifyContent="center" order={{ xs: 3, md: 2 }}>
            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Stack spacing={0.5}>
                <Iconify width={28} icon="carbon:email" sx={{ marginX: 'auto' }} />

                <Typography variant="h6">Email</Typography>
                <Link color="inherit" variant="body2" href={inqueryEmailLink}>
                  {inqueryEmail}
                </Link>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} xs={6} display="flex" justifyContent="center" order={{ xs: 2, md: 3 }}>
            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Stack spacing={0.5}>
                <Iconify width={28} icon="carbon:time" sx={{ marginX: 'auto' }} />

                <Typography variant="h6">Business Hours</Typography>
                <Stack spacing={0.5} direction="row" sx={{ marginX: 'auto' }}>
                  <Typography variant="body2">8 AM</Typography>
                  <Typography variant="body2">-</Typography>
                  <Typography variant="body2">4 PM</Typography>
                  <Typography variant="body2"></Typography>
                  <Typography variant="body2">PT</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  if (mdUp) {
    return <DesktopView>{FormData}</DesktopView>;
  } else {
    return <MobileContactVideo>{FormData}</MobileContactVideo>;
  }
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  'span[data-index="1"]': {
    '& .MuiSlider-valueLabelOpen': {
      top: 'auto',
      bottom: -10,
      transform: 'translateY(100%) scale(1)',
      '&::before': {
        transform: 'translate(-50%, -290%) rotate(45deg)',
      },
    },
  },
}));

const DesktopView = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        height: '100vh',
        overflow: 'hidden',
        py: 5,
        position: 'relative',
      }}
    >
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: '-15%',
          height: '100%',
          width: 'auto',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/stock-photos/contact-us.webm" type="video/mp4" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 45%, rgba(33, 43, 54, 1) 65%)',
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

const MobileContactVideo = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        height: 'auto',
        overflow: 'visible',
        py: 5,
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
          component="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            height: 'auto',
            width: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src="/assets/stock-photos/contact-us.webm" type="video/webm" />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(33, 43, 54, 1) 90%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </Box>
      <Grid
        container
        spacing={5}
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

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white', // Text color
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Label color
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white', // Placeholder color
    opacity: 1, // Ensures full opacity for the placeholder text
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white', // Outline color
  },
});
