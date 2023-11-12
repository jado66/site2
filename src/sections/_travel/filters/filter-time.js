/* eslint-disable unused-imports/no-unused-vars */
import PropTypes from 'prop-types';

import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function FilterTime({ departureDay, onChangeDepartureDay, sx }) {
  return (
    <MobileDatePicker
      value={departureDay}
      onChange={onChangeDepartureDay}
      slots={{
        textField: ({ inputProps, InputProps, inputRef, error, ...inputOther }) => (
          <InputBase
            fullWidth
            {...InputProps}
            ref={InputProps?.ref}
            inputRef={inputRef}
            inputProps={{
              ...inputProps,
              ...inputOther,
              placeholder: 'Departure day',
            }}
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={24} icon="carbon:calendar" sx={{ color: 'text.disabled', mr: 1 }} />
              </InputAdornment>
            }
            sx={{
              height: 44,
              typography: 'subtitle1',
              color: 'inherit',
              ...sx,
            }}
          />
        ),
      }}
      {...sx}
    />
  );
}

FilterTime.propTypes = {
  sx: PropTypes.object,
  onChangeDepartureDay: PropTypes.func,
  departureDay: PropTypes.instanceOf(Date),
};
