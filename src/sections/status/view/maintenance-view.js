'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';
import { varBounce, MotionContainer } from 'src/components/animate';
import { Container } from '@mui/system';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        pb: 3,
      }}
    >
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            This Page Is Currently Under Maintenance
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            We are currently working hard on this page!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Image
            alt="maintenance"
            src="/assets/illustrations/illustration_maintenance.svg"
            sx={{
              mx: 'auto',
              maxWidth: 320,
              mt: { xs: 5, sm: 8 },
              mb: { xs: 3, sm: 1 },
            }}
          />
        </m.div>

        <Button component={RouterLink} href="/" size="large" color="inherit" variant="contained">
          Go to Home
        </Button>
      </MotionContainer>
    </Container>
  );
}
