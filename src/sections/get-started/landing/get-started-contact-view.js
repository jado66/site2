'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import GetStartedContactInfo from '../contact/get-started-contact-info';
import GetStartedContactForm from '../contact/get-started-contact-form';
import { Container } from '@mui/system';

// ----------------------------------------------------------------------

export default function GetStartedContactView() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid xs={12} md={6} lg={5}>
          <GetStartedContactInfo />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <Typography variant="h3" sx={{ mb: 5 }}>
            Ready To Get Started?
          </Typography>

          <GetStartedContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}
