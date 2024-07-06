import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { CardContent, CardMedia } from '@mui/material';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const STEPS = [
  {
    name: 'Contact',
    image: '/assets/stock-photos/contact.webp',
    content: 'Fill out the contact form below and we will get back to you within 24 hours',
    path: paths.marketing.services,
  },
  {
    name: 'Discuss Requirements',
    image: '/assets/stock-photos/discuss.webp',
    content: 'We will discuss your requirements and provide a quote',
    path: paths.marketing.services,
  },
  {
    name: 'Get Started',
    image: '/assets/stock-photos/get-started.jpeg',
    content: 'After the quote is accepted, we will get started on your project',
    path: paths.marketing.services,
  },
  {
    name: 'Constant Communication',
    image: '/assets/stock-photos/constant.webp',
    content:
      'We will keep you updated on the progress of your project, taking your feedback into account',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export default function GetStartedSteps() {
  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          py: { xs: 5, md: 10 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Get Started
          </Typography>

          <Typography variant="h2">Just 4 Easy Steps</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We have a simple 4-step process to get you started with our company, ensuring a
            successful partnership.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {STEPS.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, image, content, path } = service;

  return (
    <Card
      sx={{
        textAlign: 'center',
        ...(index === 1 && {
          pb: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          pb: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <CardMedia component="img" alt={name} image={image} />

      <CardContent sx={{ px: 4, py: 5 }}>
        <Stack spacing={1} sx={{ my: 5 }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
