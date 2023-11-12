import Box from '@mui/material/Box';

import { countries } from 'src/assets/data';

import Iconify from 'src/components/iconify';
import { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export default function EcommerceCheckoutShippingDetails() {
  return (
    <Box
      rowGap={2.5}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
    >
      <RHFTextField name="streetAddress" label="Street address" />

      <RHFTextField name="zipCode" label="ZIP Code" />

      <RHFTextField name="city" label="City" />

      <RHFAutocomplete
        name="country"
        label="Country"
        options={countries.map((country) => country.label)}
        getOptionLabel={(option) => option}
        renderOption={(props, option) => {
          const { code, label, phone } = countries.filter((country) => country.label === option)[0];

          if (!label) {
            return null;
          }

          return (
            <li {...props} key={label}>
              <Iconify
                key={label}
                icon={`circle-flags:${code.toLowerCase()}`}
                width={28}
                sx={{ mr: 1 }}
              />
              {label} ({code}) +{phone}
            </li>
          );
        }}
      />
    </Box>
  );
}
