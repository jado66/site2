'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

// MUI Components
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Icons

// Utils
import { bgGradient } from 'src/theme/css'; // Assuming this is your gradient utility
import Iconify from 'src/components/iconify';
import { useGoogleAdsConversion } from 'src/utils/GoogleAnalytics';
import useSendRequestForm from 'src/utils/hooks/useSendRequestForm';

const initialValues = {
  name: '',
  services: [],
  email: '',
  phoneNumber: '',
  budget: [40000, 100000],
  message: '',
  company: '',
  other: '',
};

export default function MarketingLandingFreeSEO() {
  const { triggerConversion } = useGoogleAdsConversion();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);

  const { loading, error, success, sendRequestFormByEmail } = useSendRequestForm();

  // Contact information constants
  const inquiryEmail = 'Contact@PlatinumProgramming.com';
  const inquiryEmailLink = `mailto:${inquiryEmail}`;
  const inquiryPhoneText = '(385) 309-1356';
  const inquiryPhoneLink = `tel:${inquiryPhoneText.replace(/[^0-9]/g, '')}`;

  // Service options
  const services = [
    { label: 'Chatbot', iconifyIcon: 'bx:bot' },
    { label: 'Email', iconifyIcon: 'ic:outline-email' },
    { label: 'Voice', iconifyIcon: 'carbon:phone-voice' },
    { label: 'SMS', iconifyIcon: 'ic:outline-sms' },
    { label: 'Other' },
  ];

  // Form validation schema
  const MarketingContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('That is not a valid email'),
    phoneNumber: Yup.string().required('Phone number is required'),
    company: Yup.string(),
    services: Yup.array(),
    budget: Yup.array(),
    message: Yup.string(),
    other: Yup.string(),
  });

  // Form initialization
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      services: [],
      budget: [40000, 100000],
      message: '',
      other: '',
    },
    validationSchema: MarketingContactSchema,
    onSubmit: async (values) => {},
  });

  const submitForm = async () => {
    const errors = await formik.validateForm();

    if (!formik.values.name || !formik.values.email || !formik.values.phoneNumber) {
      toast('Name, email, and phone are required.');
      return;
    }

    await sendRequestFormByEmail(formik.values);
    triggerConversion();

    //reset vals
    formik.resetForm({ values: initialValues });

    setActiveStep(0);
    // toast('Request was successfully sent. We will respond in 2-3 business days.')
    // onReset();
  };

  // Toggle service selection
  const handleServicesChange = (service) => {
    formik.setFieldValue(
      'services',
      formik.values.services.includes(service)
        ? formik.values.services.filter((app) => app !== service)
        : [...formik.values.services, service]
    );
  };

  // Format currency for budget slider
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ['Basic Info', 'Services & Budget', 'Message'];

  const FormContent = (
    <>
      <Grid xs={12} lg={7} md={4} sx={{ display: { xs: 'none', md: 'block' } }} />
      <Grid
        xs={12}
        md={8}
        lg={5}
        sx={{
          bgcolor: { md: 'transparent', xs: 'background.paper' },
          px: { xs: 2, md: 4 },
          mt: { xs: -2, lg: 0 },
          pb: { xs: 4, md: 0 },
          borderRadius: { xs: 2, md: 0 },
          boxShadow: { xs: 1, md: 0 },
          position: 'relative',
          zIndex: 2,
        }}
        id="complimentary-consultation"
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: 'common.white',
            mb: { xs: 3, md: 4 },
            mt: { xs: 3, md: 0 },
            textAlign: { xs: 'center', md: 'left' },
            whiteSpace: { md: 'nowrap' },
          }}
        >
          Complimentary Consultation
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2.5} alignItems="flex-start">
            {activeStep === 0 && (
              <>
                <Stack
                  spacing={{ xs: 2.5, md: 2 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ width: 1 }}
                >
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

                <Stack
                  spacing={{ xs: 2.5, md: 2 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  sx={{ width: 1 }}
                >
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
              </>
            )}

            {activeStep === 1 && (
              <>
                <Stack spacing={1} sx={{ pt: 2, width: 1 }}>
                  <Typography variant="overline" sx={{ color: 'common.white' }}>
                    Areas of Interest
                  </Typography>
                  <Box>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      spacing={0}
                      sx={{ gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}
                    >
                      {services.map((service) => (
                        <ToggleButton
                          key={service.label}
                          color="standard"
                          selected={formik.values.services.includes(service.label)}
                          onChange={() => handleServicesChange(service.label)}
                          sx={{
                            py: 0.5,
                            px: 1,
                            color: 'common.white',
                            typography: 'body2',
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                            '&.Mui-selected': {
                              bgcolor: 'common.white',
                              borderColor: 'transparent',
                              color: 'common.black',
                              '&:hover': {
                                bgcolor: 'common.white',
                              },
                            },
                          }}
                        >
                          {service.label}
                          {service.iconifyIcon && (
                            <Iconify icon={service.iconifyIcon} sx={{ ml: 1.5 }} />
                          )}
                        </ToggleButton>
                      ))}
                    </Stack>
                  </Box>
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

                <Stack
                  spacing={1}
                  sx={{
                    width: 1,
                    mt: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' },
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'common.white',
                      whiteSpace: 'nowrap',
                      mb: { xs: 1, sm: 0 },
                    }}
                  >
                    Total Budget
                  </Typography>

                  <Box sx={{ width: 1, px: 1 }}>
                    <StyledSlider
                      name="budget"
                      valueLabelDisplay="on"
                      max={500000}
                      min={10000}
                      step={5000}
                      value={formik.values.budget}
                      valueLabelFormat={(value) => formatCurrency(value)}
                      onChange={(_, newValue) => formik.setFieldValue('budget', newValue)}
                      sx={{ mt: { xs: 3, sm: 0 } }}
                    />
                  </Box>
                </Stack>
              </>
            )}

            {activeStep === 2 && (
              <StyledTextField
                name="message"
                label="Message"
                fullWidth
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            )}
          </Stack>

          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: 'common.white' }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep === steps.length - 1 ? (
              <Button
                size="large"
                color="inherit"
                type="button"
                onClick={submitForm}
                variant="contained"
                sx={{
                  bgcolor: 'common.white',
                  color: 'common.black',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                type="button"
                sx={{
                  color: 'common.white',
                  borderColor: 'common.white',
                  '&:hover': {
                    borderColor: 'rgba(255, 255, 255, 0.9)',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
                variant="outlined"
              >
                Next
              </Button>
            )}
          </Box>
        </form>

        <Accordion
          sx={{
            mt: 4,
            bgcolor: 'transparent',
            color: 'common.white',
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            expandIcon={<Iconify icon="akar-icons:chevron-down" sx={{ color: 'common.white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Contact Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={4} sx={{ textAlign: 'center' }}>
              <Grid item xs={6} display="flex" justifyContent="center">
                <Stack spacing={1} alignItems="center">
                  <Iconify width={28} icon="carbon:mobile" sx={{ color: 'common.white' }} />
                  <Typography variant="h6" sx={{ color: 'common.white' }}>
                    Call or Text
                  </Typography>
                  <Link
                    color="inherit"
                    variant="body2"
                    href={inquiryPhoneLink}
                    sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    {inquiryPhoneText}
                  </Link>
                </Stack>
              </Grid>

              <Grid item xs={6} display="flex" justifyContent="center">
                <Stack spacing={1} alignItems="center">
                  <Iconify width={28} icon="carbon:time" sx={{ color: 'common.white' }} />
                  <Typography variant="h6" sx={{ color: 'common.white' }}>
                    Hours
                  </Typography>
                  <Stack spacing={0.5} direction="row" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    <Typography variant="body2">8 AM</Typography>
                    <Typography variant="body2">-</Typography>
                    <Typography variant="body2">4 PM</Typography>
                    <Typography variant="body2">PT</Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} display="flex" justifyContent="center">
                <Stack spacing={1} alignItems="center">
                  <Iconify width={28} icon="carbon:email" sx={{ color: 'common.white' }} />
                  <Typography variant="h6" sx={{ color: 'common.white' }}>
                    Email
                  </Typography>
                  <Link
                    color="inherit"
                    variant="body2"
                    href={inquiryEmailLink}
                    sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    {inquiryEmail}
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </>
  );

  if (isMobile) {
    return <MobileContactView>{FormContent}</MobileContactView>;
  } else {
    return <DesktopContactView>{FormContent}</DesktopContactView>;
  }
}

const DesktopContactView = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        minHeight: '100vh',
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

const MobileContactView = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.5),
        }),
        minHeight: '100vh',
        py: 5,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          mb: 3,
          height: '300px',
          overflow: 'hidden',
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
            height: '100%',
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.common.white,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.common.white,
  },
  '& .MuiInputBase-input::placeholder': {
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.common.white,
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.light,
  },
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.common.white,
  height: 3,
  '& .MuiSlider-thumb': {
    height: 14,
    width: 14,
    backgroundColor: theme.palette.common.white,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0 0 0 8px rgba(255, 255, 255, 0.16)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.common.white,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.common.white,
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 3,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    height: 3,
  },
  'span[data-index="1"]': {
    '& .MuiSlider-valueLabelOpen': {
      transform: 'translateY(-100%) scale(1)',
    },
  },
}));
