import { Button, Card, Dialog, Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import { useState } from 'react';

import SvgColor from 'src/components/svg-color';
import MarketingNewsletter from 'src/sections/_marketing/marketing-newsletter';
import { LoginPlusSignUpFlow } from './applications/LoginPlusSignUpFlow';
import Iconify from 'src/components/iconify/iconify';
import CheckoutView from 'src/sections/services/view/checkout-view';
import { Checkout } from './applications/Checkout';

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
    hasDemo: true,
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
    hasDemo: true,
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
    hasDemo: true,
  },
];

const SERVICES = [
  // Row A
  // {
  //   title: 'Newsletter Subscription',
  //   demoId: 'newsletter-subscription',
  //   description:
  //     'Establish a system for periodic email updates to subscribers about new content, events, or promotions.',
  //   // 'Set up periodic communication sent via email to a list of subscribers. Subscribers receive timely information directly in their inbox, keeping them informed about new content, events, or promotions.',
  //   icon: '/assets/icons/ic_marketing_bullhorn.svg',
  //   hasDemo: true,
  // },
  // {
  //   title: 'Email',
  //   demoId: 'email',
  //   description:
  //     'Email integrations build automated email responses to handle customer inquiries and provide support. Make marketing emails more personalized.',
  //   icon: '/assets/icons/ic_inbox.svg',
  //   hasDemo: false,
  // },
  // {
  //   title: 'Incoming Voice Calls',
  //   demoId: 'incoming-voice-calls',
  //   icon: '/assets/icons/ic_customer_service.svg',
  //   description: 'Automate incoming calls to provide customers with excellent service.',
  //   hasDemo: false,
  // },
  // {
  //   title: 'Outgoing Voice Calls',
  //   demoId: 'outgoing-voice-calls',
  //   description: ' Automate outgoing calls to provide proactive customer service and updates.',
  //   icon: '/assets/icons/ic_customer_service.svg',
  //   hasDemo: false,
  // },

  // Row B
  // {
  //   title: 'User Login & Registration',
  //   demoId: 'user-login-registration',
  //   description:
  //     'User accounts in a web application provide secure access, determine resource allocation, and facilitate personalization based on user preferences.',
  //   icon: '/assets/icons/ic_users.svg',
  //   dialgogSize: 'md',
  //   hasDemo: true,
  // },

  // {
  //   title: 'Database Integration',
  //   demoId: 'database-integration',
  //   description:
  //     'Database integration in web apps enables efficient data management by facilitating smooth database interactions for data storage, retrieval, and manipulation.',
  //   // 'Database integration ensures that web applications interact seamlessly with databases, providing efficient data management and enhancing overall functionality. Data Storage: Web applications often need to store data, such as user profiles, product information, or transaction records. Data Retrieval: Applications retrieve data from databases based on user requests or system processes. Data Manipulation: Developers can insert, update, or delete data in the database.',
  //   icon: '/assets/icons/ic_real_time.svg',
  //   hasDemo: false,
  // },
  {
    title: 'Payment Integration',
    demoId: 'payment-integration',
    description:
      'Payment API integration embeds a payment system into a software or website, allowing businesses to smoothly process payments within their platforms, like Stripe or Square.',
    icon: '/assets/icons/ic_money.svg',
    hasDemo: true,
  },

  // Row C

  {
    title: 'Social Media',
    demoId: 'social-media',
    description:
      'Social media integrations develop chatbots for social media platforms to interact with customers and address their queries.',
    icon: '/assets/icons/ic_social_media.svg',
    hasDemo: false,
  },
  {
    title: 'AI Powered Web Chat',
    demoId: 'ai-powered-web-chat',
    description: 'Build a custom AI chat experience to help customers with every day tasks.',
    icon: '/assets/icons/ic_social_media.svg',
    hasDemo: false,
  },
  {
    title: 'Lead Integration Forms',
    demoId: 'lead-integration-forms',
    description:
      'Lead generation web forms, integral to CRM systems, bridge businesses and potential customers by streamlining the capture, understanding, and nurturing of leads towards sales.',
    //'Lead generation web forms are an essential component of customer relationship management (CRM) systems. They act as the bridge between businesses and potential customers. When integrated within a CRM system, these web forms streamline the process of capturing leads, understanding their needs, and nurturing them toward a sale.',
    icon: '/assets/icons/ic_agreement.svg',
    hasDemo: false,
  },

  // Row D
  {
    title: 'Blogs',
    demoId: 'blogs',
    description:
      'A blog is an online resource where content related to specific or general topics is regularly published for a community of readers. Blogs can shift a website from static to dynamic with… Regular Updates: Unlike static websites, websites with blogs are constantly updated with fresh content. New blog posts are added at regular intervals, keeping the audience engaged. Dynamic Content: Blogs allow authors to share their thoughts, experiences, and expertise on various topics. They can include articles, tutorials, personal reflections, and more.',
    icon: '/assets/icons/ic_social_media.svg',
    hasDemo: false,
  },
  {
    title: 'Course Creation',
    demoId: 'course-creation',
    description:
      'With the rising popularity of online courses, we can provide your website with the proper tools to publish professional virtual courses. Our software strategies take elements like user experience and structural design into consideration, so you are free to focus on creating quality content.',
    icon: '/assets/icons/ic_creativity.svg',
    hasDemo: false,
  },

  {
    title: 'Tailored Services',
    demoId: 'tailored-services',
    description:
      'Whatever your web development needs, we are confident in our team’s ability to provide services tailored to your company objectives. Schedule a free consultation today to discuss how we can bring your vision to life.',
    icon: '/assets/icons/ic_chip.svg',
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
        pt: { xs: 5, md: 10 },
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
          {currentDemoId === 'newsletter-subscription' && <MarketingNewsletter />}
          {currentDemoId === 'user-login-registration' && (
            <LoginPlusSignUpFlow handleClose={handleClose} />
          )}
          {currentDemoId === 'payment-integration' && <Checkout handleClose={handleClose} />}
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

      <Typography variant="h2">Services Include</Typography>

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
    </Container>
  );
}

const ServiceCard = ({ title, description, icon, hasDemo, demoId, openDemo, imageType }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        p: 2,
        cursor: 'pointer',
        backgroundColor: theme.palette.grey[1000],
        '&:hover': {
          // Style for hover effect goes here
          backgroundColor: theme.palette.grey[950],
          // make slightly bigger
          border: '1px solid white',
          transform: 'scale(1.02)',
          transition: 'transform 0.3s',
          // tranistion backgroundColor
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

      {hasDemo && (
        <Button variant="outlined" sx={{ mt: 3 }} onClick={() => openDemo(demoId)}>
          View Demo
        </Button>
      )}
    </Card>
  );
};

{
  /* <Divider sx={{ my: 4 }} />

<Box
  sx={{
    rowGap: 4,
    columnGap: 4,
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
  }}
>
  {SERVICES.map((value) => (
    <ServiceCard key={value.title} {...value} openDemo={openDemo} />
  ))}
</Box> */
}
