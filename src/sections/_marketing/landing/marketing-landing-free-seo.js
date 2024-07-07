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
import { useFormik } from 'formik';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import {
  inqueryEmail,
  inqueryEmailLink,
  inqueryPhoneLink,
  inqueryPhoneText,
} from 'src/constants/contact';
import useSendRequestForm from 'src/utils/hooks/useSendRequestForm';
import { Slider } from '@mui/material';
import { toast } from 'react-toastify';

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
    company: Yup.string()
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
    }
  });

  const handleServicesChange = (service) => {
    formik.setFieldValue('services', 
      formik.values.services.includes(service)
        ? formik.values.services.filter(app => app !== service)
        : [...formik.values.services, service]
    );
  };

  const submitForm = async () => {
    const errors = await formik.validateForm();
     
      
    if (!formik.values.name || !formik.values.email || !formik.values.phoneNumber) {
      toast('Name, email, and phone are required.');
      return;
    }

    sendRequestFormByEmail(formik.values)

    // toast('Request was successfully sent. We will respond in 2-3 business days.')
    // onReset();
  }

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
          {/* Assuming InfoColumn is defined elsewhere */}
          {InfoColumn}
        
          <Grid xs={12} md={6}>
            <form>
              <Stack spacing={2.5} alignItems="flex-start">
                <Stack
                  spacing={{ xs: 2.5, md: 2 }}
                  direction={{ xs: 'column', md: 'row' }}
                  sx={{ width: 1 }}
                >
                  <TextField
                    name="name"
                    label="Name"
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                   <TextField
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

                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2.5, md: 2 }}
                  sx={{ width: 1 }}
                >
                  <TextField
                    name="phoneNumber"
                    label="Phone number"
                    fullWidth
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                  <TextField
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
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
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
                          {services.label}
                          {services.iconifyIcon && <Iconify icon={services.iconifyIcon} sx={{ ml: 1.5 }} />}
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
                    <TextField
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
                
                <Stack spacing={5} sx={{ width: 1, mt:2 }}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    Project Budget
                  </Typography>

                  <Slider
                    name="budget"
                    valueLabelDisplay="on"
                    max={500000}
                    step={5000}
                    value={formik.values.budget}
                    valueLabelFormat={(value) => fCurrency(value)}
                    onChange={(_, newValue) => formik.setFieldValue('budget', newValue)}
                  />
                 
                </Stack>

                <TextField
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const InfoColumn = (
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
        <Typography variant="h6">Call or Text</Typography>
        <Link color="inherit" variant="body2" href={inqueryPhoneLink}>
          {inqueryPhoneText}
        </Link>
      </Stack>
    </Stack>

    <Stack spacing={2} alignItems="flex-start" direction="row">
      <Iconify width={28} icon="carbon:email" />
      <Stack spacing={0.5}>
        <Typography variant="h6">Email</Typography>
        <Link color="inherit" variant="body2" href={inqueryEmailLink}>
          {inqueryEmail}
        </Link>
      </Stack>
    </Stack>
  </Grid>
)