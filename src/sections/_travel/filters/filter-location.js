import InputBase from '@mui/material/InputBase';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';

import { countries } from 'src/assets/data';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterLocation() {
  return (
    <Autocomplete
      sx={{ width: 1 }}
      popupIcon={null}
      options={countries}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <InputBase
          {...params.InputProps}
          inputProps={params.inputProps}
          fullWidth
          placeholder="Where we go?"
          startAdornment={
            <InputAdornment position="start">
              <Iconify width={24} icon="carbon:location" sx={{ color: 'text.disabled', mr: 1 }} />
            </InputAdornment>
          }
          sx={{ height: 44, typography: 'subtitle1', color: 'inherit' }}
        />
      )}
      renderOption={(props, option) => {
        if (!option.label) {
          return null;
        }

        return (
          <li {...props} key={option.label}>
            <Iconify
              key={option.label}
              icon={`circle-flags:${option.code.toLowerCase()}`}
              width={28}
              sx={{ mr: 1 }}
            />
            {option.label} ({option.code}) +{option.phone}
          </li>
        );
      }}
    />
  );
}
