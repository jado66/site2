import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';
import { Divider, List, ListItem } from '@mui/material';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SERVICES = [
  {
    name: 'Discovery and Planning',
    icon: '/assets/icons/ic_sketch_design.svg',
    description: 'Phase 1',
    bullets: [
      'Client Consultations',
      'Discussing Needs',
      'Gathering Requirements',
      'Collaboritive Brainstorming',
      'Determining Solutions',
    ],
  },
  {
    name: 'Development',
    icon: '/assets/icons/ic_optimization.svg',
    description: 'Phase 2',
    bullets: [
      'Custom Design',
      'Full-Stack Development',
      'Regular Progress Reviews w/ Client',
      'Feedback Loop between Principal Developer and Client Point of Contact',
    ],
  },
  {
    name: 'Testing and Feedback',
    icon: '/assets/icons/ic_search.svg',
    description: 'Phase 3',
    bullets: [
      'Debugging',
      'Product Refinement',
      'Alpha/Beta Testing',
      'Quality Assurance Confirmation',
    ],
  },
  {
    name: 'Launch and Grow',
    icon: '/assets/icons/ic_analysis.svg',
    description: 'Phase 4',
    bullets: [
      'Deployment',
      'Dedicated Post-Launch Support',
      'Ongoing Maintenance',
      'Growth Strategies',
      'Continued Development',
    ],
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
        backgroundColor: (theme) => theme.palette.primary.darker,
        maxWidth: '100% !important',
        mx: 0,
        color: 'common.white',
      }}
      fullWidth
    >
      <Container maxWidth="lg">
        <Stack
          spacing={3}
          sx={{
            maxWidth: 600,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Initial Launch
          </Typography>

          <Typography variant="h2">Work Flow</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            We offer a well-defined working porcess to streamline production and comprehensively
            develop your project from the ground up.
          </Typography>
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            alignItems: 'flex-end',
            gridTemplateColumns: {
              sm: 'repeat(1, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, icon } = service;

  return (
    <Card
      sx={{
        position: 'relative',
        p: 2,
        color: (theme) => theme.palette[COLORS[index]].darker,
        bgcolor: (theme) => theme.palette[COLORS[index]].light,
        boxShadow: (theme) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 1 && {
          mb: { md: 2.5 },
        }),
        ...(index === 2 && {
          mb: { md: 5 },
        }),
        ...(index === 3 && {
          mb: { md: 7.5 },
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 64,
          height: 64,
          opacity: 0.48,
        }}
      />
      <Typography
        variant="body2"
        sx={{ textAlign: 'right', position: 'absolute', top: 0, right: 0, mt: 3, mr: 3 }}
        gutterBottom
      >
        {service.description}
      </Typography>
      <Typography variant="h5" sx={{ mt: 3, textAlign: 'center' }}>
        {name}
      </Typography>
      <Divider sx={{ my: 2 }} />

      <List sx={{ width: '100%', maxWidth: 360, listStyleType: 'disc' }}>
        {service.bullets.map((bullet) => (
          <ListItem key={bullet}>
            <Typography variant="body2">• {bullet}</Typography>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
