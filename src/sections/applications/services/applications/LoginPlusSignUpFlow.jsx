import { Card, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { useState } from 'react';
import ForgotPasswordView from 'src/sections/auth/forgot-password-view';
import LoginBackgroundView from 'src/sections/auth/login-background-view';
import RegisterBackgroundView from 'src/sections/auth/register-background-view';

export const LoginPlusSignUpFlow = ({ handleClose }) => {
  const [loginPage, setLoginPage] = useState('login');
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        flexDirection: {xs: 'column', md:'row'},
        height: '100%',
        width: '100% ',
        py: 3,
        pt:{xs: 40, md:3},

        px:1
      }}
      onClick={handleClose}
    >
      <Stack
        spacing={4}
        sx={{
          p: 4,
          width: 1,
          mx: 'auto',
          flexShrink: 0,
          maxWidth: 400,
          borderRadius: 2,
          textAlign: { xs: 'center', md: 'left' },
          marginBottom: 'auto',
        }}
      >
        <Card sx={{ p: 4, borderRadius: 2 }} onClick={(e) => e.stopPropagation()}>
          <Typography variant="h4" paragraph>
            User Login & Registration
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A user account represents an individual's profile within a web application or system.
            User login and accounts ensure secure access, personalization, and engagement for users.
            Authentication: Accounts allow users to log in securely. Authorization: Accounts
            determine what resources (pages, features, data) a user can access. Personalization:
            Accounts enable customization based on user preferences.
          </Typography>
        </Card>
      </Stack>
      <Stack
        spacing={4}
        sx={{
          p: 4,
          width: 1,
          mr: { xs: '', md: 'auto' },
          flexShrink: 0,
          maxWidth: 600,
          borderRadius: 2,
          bgcolor: 'background.default',
          boxShadow: theme.customShadows.z24,
          textAlign: { xs: 'center', md: 'left' },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {loginPage === 'login' && (
          <LoginBackgroundView
            onRegisterClick={() => setLoginPage('register')}
            onForgotPasswordClick={() => setLoginPage('forgot')}
          />
        )}
        {loginPage === 'register' && (
          <RegisterBackgroundView onLoginClick={() => setLoginPage('login')} />
        )}
        {loginPage === 'forgot' && (
          <ForgotPasswordView onLoginClick={() => setLoginPage('login')} />
        )}
      </Stack>
    </Stack>
  );
};
