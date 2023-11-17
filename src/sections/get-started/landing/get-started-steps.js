import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const STEPS = [
  {
    name: 'Contact Us',
    icon: '/assets/icons/service/ic_service_mail.svg',
    content: 'Fill out the contact form below and we will get back to you within 24 hours',
    path: paths.marketing.services,
  },
  {
    name: 'Discuss Requirements',
    icon: '/assets/icons/service/ic_service_analysis.svg',
    content: 'We will discuss your requirements and provide a quote',
    path: paths.marketing.services,
  },
  {
    name: 'Get Started',
    icon: '/assets/icons/service/ic_service_seo.svg',
    content: 'After the quote is accepted, we will get started on your project',
    path: paths.marketing.services,
  },
  {
    name: 'Constant Communication',
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
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

          <Typography variant="h2">Just 3 Easy Steps</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We have a simple 3-step process to get you started with our company, ensuring a
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
  const { name, icon, content, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </Stack>

      <IconButton
        component={RouterLink}
        href={path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      ></IconButton>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
