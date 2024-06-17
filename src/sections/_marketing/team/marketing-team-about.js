import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MarketingTeamItem from './marketing-team-item';
import { Divider, Grid } from '@mui/material';
import { jdBio, laraeBio } from 'src/constants/bios';

// ----------------------------------------------------------------------

export default function MarketingTeamAbout({ members }) {
  
  const jdBioSections = jdBio.map((section, index) => (
    <Typography variant = 'subtitle1' key = {`jdBio${index}`} gutterBottom mb = {2}>
      {section}
    </Typography>
  ))

  const laraeBioSections = laraeBio.map((section, index) => (
    <Typography variant = 'subtitle1' key = {`laraeBio${index}`} gutterBottom mb = {2}>
      {section}
    </Typography>
  ))

  return (
    <Container
      sx={{
        py: { xs: 10, md: 10 },
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

        <Grid md = {4} xs = {12} px = {{xs:5, md:0}}>
          <MarketingTeamItem key={members[0].id} member={members[0]} sx = {{maxHeight:{xs:'90vh', md:'auto'}}}/>
        </Grid>

        <Grid md = {8} xs = {12} p = {5}>
          {jdBioSections}
        </Grid>

        <Grid xs = {12} my = {6} display={{xs:'none', md:'block'}}>
          <Divider/>
        </Grid>

        <Grid md = {8} xs = {12} p = {5} display={{xs:'none', md:'block'}}>
          {laraeBioSections}
        </Grid>
        <Grid md = {4} xs = {12} px = {{xs:5,  md:0}} mt = {{xs:5, md: 0}}>
          <MarketingTeamItem key={members[1].id} member={members[1]} sx = {{maxHeight:{xs:'90vh', md:'auto'}}}/>
        </Grid>
        <Grid md = {8} xs = {12} p = {5} display={{xs:'block', md:'none'}}>
          {laraeBioSections}
        </Grid>

        <Grid xs = {12} my = {6} display={{xs:'none', md:'block'}}>
          <Divider/>
        </Grid>
          
        <Grid xs = {12} display='flex' justifyContent='center' flexDirection='column'>
          <img
            src={'/assets/images/board.jpg'}
          
            style={{borderRadius:'1em'}}
          />
          <Grid xs = {12} md = {10} mx  ='auto' mt = {3}>
            <Typography variant='subtitle1'>
              We offer a roster of 50+ contractors and employees, who have each been personally vetted by upper management.  Our roster includes senior software developers, lead engineers, doctoral graduates, subject matter experts, and other experienced professionals located in the Washington D.C area and throughout the United States.  It is our pleasure to serve you with a specialized team, involving professionals in web development, software, marketing, branding, design, and more.
            </Typography>
          </Grid>
        </Grid>
        
      
      </Grid>


   
    </Container>
  );
}

MarketingTeamAbout.propTypes = {
  members: PropTypes.array,
};
