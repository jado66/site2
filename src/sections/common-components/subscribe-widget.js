import { useState } from 'react';
import validateEmail from 'src/utils/validation/validate-email';
import useSubscribe from 'src/utils/hooks/useSubscribe';
import { LoadingButton } from '@mui/lab';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const SubscribeWidget = () => {
  const [email, setEmail] = useState('');
  const [textFieldError, setTextFieldError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { loading, error, subscribe } = useSubscribe();

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const waitAndExecute = (time, callback) => {
    setTimeout(callback, time);
  };

  const resetForm = () => {
    setEmail('');
    setHasSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      subscribe(email);
      setTextFieldError(false);
      waitAndExecute(500, resetForm);
      console.log('Email is valid');
    } else {
      console.log('Email is invalid');
      setTextFieldError(true);
    }
  };

  const helperText = error ? error : 'Double check that your email is correct';

  return (
    <TextField
      fullWidth
      hiddenLabel
      placeholder={hasSubmitted ? 'You are subscribed!' : 'Enter your email'}
      value={email}
      onChange={handleChange}
      error={textFieldError || error} // Add error prop
      helperText={(textFieldError || error) && helperText} // Add helperText prop
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <LoadingButton
              size="large"
              color="inherit"
              variant="contained"
              sx={{
                height: 54,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                mr: -1.25,
              }}
              loading={loading}
              onClick={handleSubmit}
            >
              Sign Up
            </LoadingButton>
          </InputAdornment>
        ),
        sx: { pr: 0 },
      }}
      sx={{ maxWidth: 466 }}
    />
  );
};
// sx={{  }}>
export default SubscribeWidget;
