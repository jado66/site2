import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Divider, Grid } from '@mui/material';

export default function MarketingAboutMissionStatement() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'none',
        height: 'calc(100vh - 64px)',
        backgroundImage: 'url(/assets/stock-photos/our-vision.jpeg)', // Path to your image
        backgroundSize: 'cover', // Make sure the image covers the entire viewport
        backgroundPosition: 'center', // Center the image
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          display: { lg: 'none', xs: 'block' },
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better contrast
          zIndex: 1,
        }}
      />
      <Grid
        container
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white', // Adjust text color for readability
          padding: { xs: 2, md: 5 },
          display: 'flex',
          flexDirection: 'row',
        }}
        spacing={4}
      >
        <Grid item lg={5} xs={12} sx={{ ml: 2 }}>
          <Grid>
            <Typography variant="h2" sx={{ textAlign: 'left' }}>
              Our Mission
            </Typography>
            <Divider sx={{ my: 2, backgroundColor: 'primary.contrastText' }} />
          </Grid>
          <Grid item xs={12} mb={3}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              We empower businesses with fully customized websites, tailored to their unique brand
              needs.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={3}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              With highly skilled top-tier developers leading the way, we leverage the latest
              cutting-edge web technology to ensure modern and innovative web development solutions.
            </Typography>
          </Grid>
          <Grid item xs={12} mb={3}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              Our mission is to make our client partners stand out with an exceptional online
              presence in the digital age.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
              At Platinum Programming, you can expect platinum-grade products, people, and
              partnerships.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg={7}></Grid>
      </Grid>
    </Box>
  );
}
