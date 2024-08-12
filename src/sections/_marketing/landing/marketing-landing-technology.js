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
    content: 'An advanced framework for optimized website performance and fast loading times.',
  },
  {
    label: 'React',
    content: 'A foundational library for building modern and dynamic user interfaces.',
  },
  {
    label: 'Node.js',
    content: 'The core of our server-side operations, ensuring efficient request handling.',
  },
  {
    label: 'MongoDB',
    content: 'Where we securely manage and store all site-related data and information.',
  },
  {
    label: 'MUI',
    content: 'The design system we employ to ensure visually appealing and intuitive interfaces.',
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
              alignItems: 'center',
            }}
          >
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              Our Technology
            </Typography>

            <Typography variant="h2" sx={{ my: 3 }}>
              Our Technology Stack
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              At Platinum Programming, we utilize a range of cutting-edge tools to develop our
              projects. These technologies enable us to create efficient and visually appealing
              websites.
            </Typography>
            <Typography sx={{ color: 'text.secondary', mt: 2, mx: 'auto' }}>
              This website was meticulously designed by our skilled team using these tools. Our
              proficiency in these technologies ensures optimal performance and an exceptional user
              experience.
            </Typography>
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
                    <Typography
                      variant="h4"
                      sx={{ color: 'primary.main', marginTop: { md: '-20px', xs: '-36px' } }}
                    >
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
