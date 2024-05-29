import { Stack } from '@mui/material';
import { useTheme } from '@mui/system';
import VerifyView from 'src/sections/auth/verify-view';

export const MultiFactorAuth = () => {
  const theme = useTheme();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        mx: -2,
        py: 12,
        minHeight: '100vh',
      }}
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
          bgcolor: 'background.default',
          boxShadow: theme.customShadows.z24,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <VerifyView />
      </Stack>
    </Stack>
  );
};
