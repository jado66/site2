import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Card, Divider } from '@mui/material';

export default function MarketingAboutMissionStatement() {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 10 },
      }}
    >
      <Card sx = {{p:5, maxWidth: 800, mx:'auto'}}>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        Our Mission Statement
      </Typography>

      <Divider sx = {{my:2}}/>

      <Typography
        sx={{
          mt: 3,
          mx: 5,
          textAlign: 'justify',
          textAlignLast: 'center'
        }}
        variant = "subtitle1"

      >
        We empower businesses with fully customized websites, tailored to their unique brand needs.  With highly skilled top-tier developers leading the way, we leverage the latest cutting-edge web technology to ensure modern and innovative web development solutions.  Our mission is to make our client partners stand out with an exceptional online presence in the digital age.  At Platinum Programming, you can expect platinum-grade products, people, and partnerships.
      </Typography>

     

      </Card>
   
    </Container>
    
  );
}
