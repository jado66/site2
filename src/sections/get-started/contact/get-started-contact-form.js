import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import FormHelperText from '@mui/material/FormHelperText';
import ToggleButton, { toggleButtonClasses } from '@mui/material/ToggleButton';

import { fCurrency } from 'src/utils/format-number';

// import { _tags } from 'src/_mock';
import { _applications } from './_application-list';

import FormProvider, { RHFSlider, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const _tags = _applications.map((application) => application.label);

export default function MarketingContactForm() {
  const MarketingContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    applications: Yup.array().required().min(1, 'You must select at least one area of interest'),
    email: Yup.string().required('Email is required').email('That is not an email'),
    company: Yup.string().required('Company is required'),
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
    watch,
  } = methods;

  const values = watch();

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

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5} alignItems="flex-start">
        <Stack
          spacing={{ xs: 2.5, md: 2 }}
          direction={{ xs: 'column', md: 'row' }}
          sx={{ width: 1 }}
        >
          <RHFTextField name="name" label="Name" />
        </Stack>

        <RHFTextField name="email" label="Email" />
        <RHFTextField name="phoneNumber" label="Phone number" />

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
                      selected={field.value.includes(application.label)}
                      onChange={() => field.onChange(getSelected(field.value, application.label))}
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

        <Stack spacing={5} sx={{ py: 2, px: 3, width: 1 }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Your Budget: {fCurrency(values.budget[0])} - {fCurrency(values.budget[1])}
          </Typography>

          <RHFSlider
            name="budget"
            valueLabelDisplay="on"
            min={10000}
            max={1000000}
            step={1000}
            valueLabelFormat={(value) => fCurrency(value)}
          />
        </Stack>

        <RHFTextField
          name="message"
          label="Message"
          multiline
          rows={4}
          helperText={
            values.applications.includes('Other')
              ? 'Please make sure to describe what you mean by "Other" in areas of interest.'
              : ''
          }
        />
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
  );
}
