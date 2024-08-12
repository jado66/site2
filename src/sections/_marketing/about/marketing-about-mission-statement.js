import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';

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
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          center: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better contrast
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white', // Adjust text color for readability
          padding: { xs: 2, md: 5 },
          left: '10%',
          width: '30%', // Take up the center 50% of the screen
        }}
      >
        <Typography variant="h2" sx={{ textAlign: 'left' }}>
          Our Mission
        </Typography>

        <Divider sx={{ my: 2, backgroundColor: 'primary.contrastText' }} />

        <Typography
          sx={{
            my: 3,
            mx: 0,
            textAlign: 'left',
          }}
          variant="subtitle1"
        >
          We empower businesses with fully customized websites, tailored to their unique brand
          needs.
        </Typography>
        <Typography
          sx={{
            my: 3,
            mx: 0,
            textAlign: 'left',
          }}
          variant="subtitle1"
        >
          With highly skilled top-tier developers leading the way, we leverage the latest
          cutting-edge web technology to ensure modern and innovative web development solutions.
        </Typography>
        <Typography
          sx={{
            my: 3,
            mx: 0,
            textAlign: 'left',
          }}
          variant="subtitle1"
        >
          Our mission is to make our client partners stand out with an exceptional online presence
          in the digital age.
        </Typography>
        <Typography
          sx={{
            my: 3,
            mx: 0,
            textAlign: 'left',
          }}
          variant="subtitle1"
        >
          At Platinum Programming, you can expect platinum-grade products, people, and partnerships.
        </Typography>
      </Box>
    </Box>
  );
}
