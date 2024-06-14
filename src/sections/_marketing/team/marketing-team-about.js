import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingTeamItem from './marketing-team-item';
import { Grid } from '@mui/material';

// ----------------------------------------------------------------------

export default function MarketingTeamAbout({ members }) {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Highly Skilled Development Team
      </Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
          color: 'text.secondary',
        }}
      >
        Meet our team of highly skilled developers, graphic designers, project managers, and
        technical experts.
      </Typography>

      <Grid container>

        <Grid md = {3} xs = {12}>
          <MarketingTeamItem key={members[0].id} member={members[0]}/>
        </Grid>

        <Grid md = {9} xs = {12} p = {5}>
          Bio Bio bio 
        </Grid>


         
          <Grid md = {9} xs = {12} p = {5} mt = {6} display={{xs:'none', md:'block'}}>
            Bio Bio bio 
          </Grid>

          <Grid md = {3} xs = {12} mt = {6}>
            <MarketingTeamItem key={members[1].id} member={members[1]}/>
          </Grid>
          <Grid md = {9} xs = {12} p = {5} mt = {6} display={{xs:'block', md:'none'}}>
            Bio Bio bio 
          </Grid>
          
      </Grid>


   
    </Container>
  );
}

MarketingTeamAbout.propTypes = {
  members: PropTypes.array,
};
