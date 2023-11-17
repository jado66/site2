'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';
import Container from '@mui/material/Container';
import Image from 'src/components/image';
import { varBounce, MotionContainer } from 'src/components/animate';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function NotFoundView() {
  return (
    <MainLayout>
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
              Page Not Found!
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL?
              Be sure to check your spelling.
            </Typography>
          </m.div>

          <m.div variants={varBounce().in}>
            <Image
              alt="404"
              src="/assets/illustrations/illustration_404.svg"
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
    </MainLayout>
  );
}
