'use client';
import {
  Button,
  Card,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { useState, useRef } from 'react';

import SvgColor from 'src/components/svg-color';
import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';
import { LoginPlusSignUpFlow } from './applications/LoginPlusSignUpFlow';
import Iconify from 'src/components/iconify/iconify';
import CheckoutView from 'src/sections/services/view/checkout-view';
import { Checkout } from './applications/Checkout';
import { _offices } from 'src/_mock';
import ContactMap from 'src/components/map';
import { GameDemo } from './applications/Game';
import React from 'react';
import useInCenterView from 'src/hooks/use-in-view';
import { useResponsive } from 'src/hooks/use-responsive';
import { EnvSpecificComponent } from 'src/components/util/EnvSpecificComponent';

// ----------------------------------------------------------------------

const CommunicationServies = [
  {
    title: 'Newsletter Subscription',
    demoId: 'newsletter-subscription',
    description:
      'Establish a system for periodic email updates to subscribers about new content, events, or promotions.',
    // 'Set up periodic communication sent via email to a list of subscribers. Subscribers receive timely information directly in their inbox, keeping them informed about new content, events, or promotions.',
    icon: '/assets/icons/ic_marketing_bullhorn.svg',
    hasDemo: true,
    imageType: 'svg',
  },
  {
    title: 'Voice Integration',
    demoId: 'incoming-voice-calls',
    icon: '/assets/icons/ic_customer_service.svg',
    description: 'Automate incoming calls to provide customers with excellent service.',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'SMS Conversations',
    demoId: 'sms-conversations',
    description:
      'Create automated SMS conversations to engage with customers, provide assistance, and send notifications.',
    icon: '/assets/phone2phone.png',
    hasDemo: false,
    imageType: 'png',
  },
];

const LoginAndAccountServices = [
  {
    title: 'User Login & Registration',
    demoId: 'user-login-registration',
    description:
      'User accounts in a web application provide secure access, determine resource allocation, and facilitate personalization based on user preferences.',
    icon: '/assets/icons/ic_signup_job.svg',
    dialgogSize: 'md',
    hasDemo: true,
    imageType: 'svg',
  },
  {
    title: 'Account Managment',
    demoId: 'user-account',
    description:
      'User accounts in a web application provide secure access, determine resource allocation, and facilitate personalization based on user preferences.',
    icon: '/assets/icons/ic_users.svg',
    dialgogSize: 'md',
    hasDemo: false,
    imageType: 'svg',
  },
];

const DataManagementServices = [
  {
    title: 'Database Integration',
    demoId: 'database-integration',
    description:
      'Database integration in web apps enables efficient data management by facilitating smooth database interactions for data storage, retrieval, and manipulation.',
    // 'Database integration ensures that web applications interact seamlessly with databases, providing efficient data management and enhancing overall functionality. Data Storage: Web applications often need to store data, such as user profiles, product information, or transaction records. Data Retrieval: Applications retrieve data from databases based on user requests or system processes. Data Manipulation: Developers can insert, update, or delete data in the database.',
    icon: '/assets/icons/ic_real_time.svg',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'Inventory Management',
    demoId: 'inventory-management',
    description:
      'Automate the tracking of your business goods. Gather data on sales, orders, and stock levels to make informed decisions on what to stock up on.',
    // ' Inventory management refers to the strategic organization, tracking, and control of goods within a business. It ensures that the right amount of in-stock items are available to meet demand without excessive inventory holding. ',
    icon: '/assets/icons/ic_optimization.svg',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'Data Analytics',
    demoId: 'data-analytics',
    description:
      'Extract meaningful insights from raw data, guiding user-centered decisions for improved website experiences by understanding user preferences and optimizing layouts, features, and content.',
    // 'Data analytics is the process of analyzing raw data to extract meaningful insights. User-Centered Decisions: By analyzing data from various sources (user interactions, traffic patterns, demographics), developers gain insights into user preferences, needs, and behavior. Improved User Experiences: Data-driven decisions lead to better website experiences. Developers can optimize layouts, features, and content based on real user data.',
    icon: '/assets/icons/ic_analysis.svg',
    hasDemo: false,
    imageType: 'svg',
  },
];

const ThirdPartyServices = [
  {
    title: 'Payment Integration',
    demoId: 'payment-integration',
    // ayment API integration involves incorporating a payment application programming interface (API) into a software system or website. It enables businesses to accept and process payments seamlessly within their applications or websites. Examples of payment platforms we can integrate include Stripe and Square.
    description:
      'Embed a payment system to your website, allowing for smooth payment processing and seemless transactions.',
    icon: '/assets/icons/ic_money.svg',
    hasDemo: true,
    imageType: 'svg',
  },
  {
    title: 'Social Media',
    demoId: 'social-media',
    description:
      'Integrate social media platforms to your website to increase user engagement and provide a seamless experience.',
    icon: '/assets/icons/ic_social_media.svg',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'AI Powered Web Chat',
    demoId: 'ai-powered-web-chat',
    description: 'Build a custom AI chat experience to help customers with every day tasks.',
    icon: '/assets/chatbot.png',
    hasDemo: false,
    imageType: 'png',
  },
];

const ThirdPartyServices2 = [
  {
    title: 'Custom Corporate Games',
    demoId: 'game',
    description: 'Create a game that matches your branding.',
    icon: '/assets/arcade.png',
    hasDemo: true,
    imageType: 'png',
  },
  {
    title: 'Lead Generation Forms',
    demoId: 'lead-integration-forms',
    description:
      'Lead generation web forms, integral to CRM systems, bridge businesses and potential customers by streamlining the capture, understanding, and nurturing of leads towards sales.',
    //'Lead generation web forms are an essential component of customer relationship management (CRM) systems. They act as the bridge between businesses and potential customers. When integrated within a CRM system, these web forms streamline the process of capturing leads, understanding their needs, and nurturing them toward a sale.',
    icon: '/assets/icons/ic_agreement.svg',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'Google Maps Integration',
    demoId: 'google-maps-integration',
    description:
      'Embed Google Maps into your website to provide location-based services and enhance user experience.',
    icon: '/assets/google.png',
    imageType: 'png',
    hasDemo: false,
  },
];

const Examples = [
  {
    title: 'Example Website',
    description: 'See what an example website for Travel might look like.',
    icon: '/assets/arcade.png',
    hasDemo: true,
    imageType: 'png',
  },
  {
    title: 'Cities Strong',
    demoId: 'lead-integration-forms',
    description: 'Cities Strong is a 501c3 Non-Profit',
    //'Lead generation web forms are an essential component of customer relationship management (CRM) systems. They act as the bridge between businesses and potential customers. When integrated within a CRM system, these web forms streamline the process of capturing leads, understanding their needs, and nurturing them toward a sale.',
    icon: '/assets/icons/ic_agreement.svg',
    hasDemo: false,
    imageType: 'svg',
  },
  {
    title: 'MyHomeTown',
    demoId: 'google-maps-integration',
    description: 'MyHometown is a city-service organization that revitalizes ',
    icon: '/assets/google.png',
    imageType: 'png',
    hasDemo: false,
  },
];
// ----------------------------------------------------------------------

export default function ApplicationsInclude() {
  const theme = useTheme();

  const [currentDemoId, setCurrentDemoId] = useState('');

  const openDemo = (demoId) => {
    setCurrentDemoId(demoId);
  };

  const handleClose = () => {
    setCurrentDemoId();
  };

  const handleOnlyDialogClick = (event) => {
    // if what the user clicked was demo-dialog handle close
    handleClose();
  };

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 10, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Dialog
        open={currentDemoId}
        onClose={handleClose}
        fullScreen
        id="demo-dialog"
        PaperProps={{
          sx: {
            width: '100%',
            height: '100%',
            bgcolor: theme.palette.grey[800],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          onClick: handleClose,
        }}
      >
        <Box
          sx={{
            bgcolor: theme.palette.grey[800],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {currentDemoId === 'newsletter-subscription' && (
            <Box px={5} sx={{ backgroundColor: '#1d2226', borderRadius: 5 }}>
              <MarketingNewsletter sx={{ bgcolor: '#1d2226' }} />
            </Box>
          )}
          {currentDemoId === 'user-login-registration' && (
            <LoginPlusSignUpFlow handleClose={handleClose} />
          )}
          {currentDemoId === 'payment-integration' && <Checkout handleClose={handleClose} />}
          {currentDemoId === 'game' && <GameDemo />}

          {currentDemoId === 'google-maps-integration' && (
            // <Grid xs={12} md={6} lg={7} sx={{ mx: 'auto' }}>
            <Stack
              direction="column"
              alignItems="center"
              display="flex"
              justifyContent="center"
              sx={{
                height: '100%',
                width: '50% ',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Typography variant="h3" gutterBottom>
                Custom Google Map Integration
              </Typography>
              <ContactMap offices={_offices} sx={{ borderRadius: 2, width: 1 }} />
            </Stack>
            // </Grid>
          )}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: theme.spacing(1),
              left: theme.spacing(1),
              zIndex: 9999,
            }}
          >
            <Iconify icon="carbon:close" width={24} height={24} />
          </IconButton>
        </Box>
      </Dialog>

      <Typography variant="h2">Our Services</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          mb: 6,
          maxWidth: 480,
          color: 'text.secondary',
        }}
      >
        We offer a variety of custom web development services and features, built from the ground up
        with your business in mind.
      </Typography>

      <Typography variant="h3" sx={{ my: 6 }}>
        Communication Channels
      </Typography>

      <Box
        sx={{
          rowGap: 4,
          columnGap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {CommunicationServies.map((value) => (
          <ServiceCard key={value.title} {...value} openDemo={openDemo} />
        ))}
      </Box>

      <Typography variant="h3" sx={{ my: 6 }}>
        Secure Logins and Accounts
      </Typography>

      <Box
        sx={{
          rowGap: 4,
          columnGap: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',

          '& > :not(style)': {
            // Selects all direct children except those with the "style" element type, allowing us to uniformly style the children
            minWidth: ['100%', '33.33%'],
            maxWidth: ['100%', '33.33%'],
          },
        }}
      >
        {LoginAndAccountServices.map((value) => (
          <ServiceCard key={value.title} {...value} openDemo={openDemo} />
        ))}
      </Box>

      <Typography variant="h3" sx={{ my: 6 }}>
        Third Party Integrations
      </Typography>

      <Box
        sx={{
          rowGap: 4,
          columnGap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {ThirdPartyServices.map((value) => (
          <ServiceCard key={value.title} {...value} openDemo={openDemo} />
        ))}
      </Box>

      <Box
        sx={{
          mt: 4,
          rowGap: 4,
          columnGap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {ThirdPartyServices2.map((value) => (
          <ServiceCard key={value.title} {...value} openDemo={openDemo} />
        ))}
      </Box>

      <Typography variant="h3" sx={{ my: 6 }}>
        Data Management &amp; Visualization
      </Typography>

      <Box
        sx={{
          rowGap: 4,
          columnGap: 4,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {DataManagementServices.map((value) => (
          <ServiceCard key={value.title} {...value} openDemo={openDemo} />
        ))}
      </Box>

      <Card sx={{ p: { xs: 2, md: 5 }, my: 6, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Need Something Custom?
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography
          sx={{
            my: 3,
            mx: { xs: 2, md: 5 },
            textAlign: 'center',
          }}
          variant="subtitle1"
        >
          The possibilities are endless, and our team of experienced developers is ready to help! We
          can build custom features and services to meet your unique needs.
        </Typography>
        {/* Action */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 5 }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              // Get the element you want to scroll to
              const targetElement = document.getElementById('complimentary-consultation');

              if (targetElement) {
                // Calculate the top position minus 64px offset
                const headerOffset = 64;
                const elementPosition =
                  targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                // Smooth scroll to the calculated position
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }
            }}
          >
            Fill out our contact form to get started
          </Button>
        </Stack>
      </Card>
      <EnvSpecificComponent env="dev">
        <>
          <Typography variant="h3" sx={{ my: 6 }}>
            See Us In Action
          </Typography>

          <Box
            sx={{
              mt: 4,
              rowGap: 4,
              columnGap: 4,
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
              },
            }}
          >
            {Examples.map((value) => (
              <ExamplesCard key={value.title} {...value} />
            ))}
          </Box>
        </>
      </EnvSpecificComponent>
    </Container>
  );
}

const ServiceCard = ({ title, description, icon, hasDemo, demoId, openDemo, imageType }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isInCenterView = useInCenterView(cardRef);

  const mdUp = useResponsive('up', 'md');

  return (
    <Card
      ref={cardRef}
      sx={{
        p: 2,
        cursor: 'pointer',
        backgroundColor: theme.palette.grey[1000],
        ...(isInCenterView && !mdUp
          ? {
              boxShadow: '0 0 0 1px white',
              transform: 'scale(1.02)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }
          : {}),
        '&:hover': {
          backgroundColor: theme.palette.grey[950],
          boxShadow: '0 0 0 1px white',
          transform: 'scale(1.02)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        },
      }}
      onClick={hasDemo ? () => openDemo(demoId) : undefined}
    >
      {imageType !== 'svg' ? (
        <img
          src={icon}
          alt={title}
          style={{
            marginTop: theme.spacing(2),
            height: 64,
            mx: 'auto',
            bgcolor: 'primary.main',
          }}
        />
      ) : (
        <SvgColor
          src={icon}
          color="info"
          sx={{
            mt: 2,
            width: 64,
            height: 64,
            mx: 'auto',
            bgcolor: 'primary.main',
          }}
        />
      )}

      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        {title}
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}> {description} </Typography>

      {hasDemo ? (
        <Button variant="outlined" sx={{ mt: 3 }} onClick={() => openDemo(demoId)}>
          View Demo
        </Button>
      ) : (
        <div style={{ height: '25px' }} />
      )}
    </Card>
  );
};

const ExamplesCard = ({ title, description, hasDemo, demoId, openDemo }) => {
  const theme = useTheme();
  const cardRef = useRef(null);
  const isInCenterView = useInCenterView(cardRef);

  const mdUp = useResponsive('up', 'md');

  return (
    <Card
      ref={cardRef}
      sx={{
        p: 2,
        cursor: 'pointer',
        backgroundColor: theme.palette.grey[1000],
        ...(isInCenterView && !mdUp
          ? {
              boxShadow: '0 0 0 1px white',
              transform: 'scale(1.02)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }
          : {}),
        '&:hover': {
          backgroundColor: theme.palette.grey[950],
          boxShadow: '0 0 0 1px white',
          transform: 'scale(1.02)',
          transition: 'transform 0.3s, box-shadow 0.3s',
        },
      }}
      onClick={hasDemo ? () => openDemo(demoId) : undefined}
    >
      <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
        {title}
      </Typography>

      <Typography sx={{ color: 'text.secondary' }}> {description} </Typography>
    </Card>
  );
};
