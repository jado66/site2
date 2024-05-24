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
import { Divider } from '@mui/material';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'User Management',
    caption: 'Authentication',
    icon: '/assets/icons/service/ic_service_seo.svg',
    content:
      'User management authentication gives you, in addition to selective team members, the tools and controls necessarily to confidently and securely manage your website. We can provide you with a login page connected to an authentication provider, a database where user information and password hashes (password backups) are stored. Authentication allows for protected pages within your website, so select sections and pages of your website can be inaccessible without login credentials. Sensitive webpages can be protected by login information only distributed to your team members with relevant roles. Website administrators can have exclusive access to different pages and functionality than general users.',
    path: paths.marketing.services,
  },
  {
    name: 'Data Management',
    caption: 'Database Integration',
    icon: '/assets/icons/service/ic_service_mail.svg',
    content:
      'Any successful business manages data, whether it be inventory data, sales reports, weather forecasts, customer information, or other organized data collections. Integrating a database into your website allows you to display relevant data, and we can also provide website administrators (or users, if applicable) with the proper tools to search, filter, sort, edit, delete, and manage company data, however they see fit.',
    path: paths.marketing.services,
  },
  {
    name: 'Connections',
    caption: 'API Integration',
    icon: '/assets/icons/service/ic_service_analysis.svg',
    content:
      'Are there services outside the scope of your website that you wish to connect with your site? Your business may benefit from connecting a payment processing app or social media platform to your website. For example, our clients commonly request that we connect the payment platform Stripe for billing or the social media platform Instagram directly to their website. The list of possible connections is extensive, but essentially, any outside connection from your website to another service or provider uses APIs. Our team of highly skilled web developers is capable of creating API integrations to facilitate the aforementioned web connections.',
    path: paths.marketing.services,
  },
  {
    name: 'Custom Communication',
    caption: 'SMS Marketing, Email Marketing, Chatbots',
    icon: '/assets/icons/service/ic_service_bullhorn.svg',
    content:
      '"Communication is key," and here at Platinum Programming, we pride ourselves in automating clear and consistent communication with customers. Technical communications are different channels we can utilize to speak directly to each customer. We can create custom interfaces for your website using communication modalities such as email, text messaging, voice applications (incoming or outgoing calls), web chats using custom chatGPT models, and more.',
    path: paths.marketing.services,
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
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
            maxWidth: 900,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Customized
          </Typography>

          <Typography variant="h2">Web Development</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Our team of top-tier developers create custom web applications using the latest web
            programming. We offer services and packages tailored to the needs of coprate partners,
            established businesses and funded start-ups. Make your prefessional website stand out
            with the support of our highly skilled develoeprs and specialized software.
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
              md: 'repeat(2, 1fr)',
            },
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, caption, icon, content, path } = service;

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
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {caption}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </Typography>
      </Stack>

      {/* <IconButton
        component={RouterLink}
        href={path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton> */}
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
