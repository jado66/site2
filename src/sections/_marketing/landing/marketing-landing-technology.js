import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const TECH_STACK = [
  {
    label: 'NextJs',
    content: 'A powerful tool for making websites work smoothly and load quickly.',
  },
  {
    label: 'React',
    content: 'The building blocks of our user interfaces, ensuring everything looks great!',
  },
  {
    label: 'Node.js',
    content: 'The brain behind our server operations, making sure your requests are handled efficiently.',
  },
  {
    label: 'MongoDB',
    content: 'Where we securely store all the data and information you see on our site.',
  },
  {
    label: 'MUI',
    content: 'The style guide we use to make sure everything is visually appealing and user-friendly.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingTechnology() {
  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          py: { xs: 5, md: 10 },
          px: { xs: 5, md: 0 },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 0, md: 3 }}
          rowSpacing={{ xs: 5, md: 0 }}
          justifyContent="space-between"
        >
          <Grid
            xs={12}
            md={5}
            sx={{
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Our Technology
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Tools We Use
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              At Platinum Programming, we use various amazing tools to build our projects. These technologies help us create beautiful and fast websites, much like the one you're on right now!
            </Typography>
            <Typography variant="h2" sx={{ my: 3 }}>
              Built By Us
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 2, mx:'auto' }}>
            This  website was crafted by our talented team using these technologies. Our expertise in these tools ensures that we deliver top-notch performance and a smooth user experience.          </Typography>
          </Grid>

            {/* TODO Add we can work with other languages and frameworks */}

          <Grid xs={12} md={6}>
            <Stack spacing={5}>
              {TECH_STACK.map((tech) => (
                <Stack
                  key={tech.label}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Divider
                      flexItem
                      orientation="vertical"
                      sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                    />
                  }
                >
                  <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                    <Typography variant="h4" sx={{ color: 'primary.main' }}>
                      {tech.label}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {tech.content}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

      
      </Container>
    </Box>
  );
}
