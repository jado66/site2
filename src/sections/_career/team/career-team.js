import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CareerTeamItem from './career-team-item';
import { Grid } from '@mui/material';
import { jdBio, laraeBio } from 'src/constants/bios';

// ----------------------------------------------------------------------

export default function CareerTeam({ members }) {
  return (
    <Stack
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Our Team</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Stack>

      <Grid container>

        <Grid xs = {3}>
          <CareerTeamItem key={members[0].id} member={members[0]} />
        </Grid>

        <Grid xs = {9}>
          {jdBio}
        </Grid>

        <Grid xs = {9}>
          {laraeBio}

        </Grid>

        <Grid xs = {3}>
        <CareerTeamItem key={members[1].id} member={members[1]} />

        </Grid>


      </Grid>

      
     
    </Stack>
  );
}

CareerTeam.propTypes = {
  members: PropTypes.array,
};
