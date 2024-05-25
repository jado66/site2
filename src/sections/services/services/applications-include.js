import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  // Row A
  {
    title: 'Newsletter Subscription',
    description:
      'Set up periodic communication sent via email to a list of subscribers. Subscribers receive timely information directly in their inbox, keeping them informed about new content, events, or promotions.',
    icon: '/assets/icons/ic_marketing_bullhorn.svg',
  },
  {
    title: 'Email',
    description:
      'Email integrations build automated email responses to handle customer inquiries and provide support. Make marketing emails more personalized.',
    icon: '/assets/icons/ic_inbox.svg',
  },
  {
    title: 'Incoming Voice Calls',
    icon: '/assets/icons/ic_customer_service.svg',
    description: 'Automate incoming calls to provide customers with excellent service.',
  },
  {
    title: 'Outgoing Voice Calls',
    description: ' Automate outgoing calls to provide proactive customer service and updates.',
    icon: '/assets/icons/ic_customer_service.svg',
  },

  // Row B
  {
    title: 'User Login & Accounts',
    description:
      "A user account represents an individual's profile within a web application or system. User login and accounts ensure secure access, personalization, and engagement for users. Authentication: Accounts allow users to log in securely. Authorization: Accounts determine what resources (pages, features, data) a user can access. Personalization: Accounts enable customization based on user preferences.",
    icon: '/assets/icons/ic_users.svg',
  },
  {
    title: 'Database Integration',
    description:
      'Database integration ensures that web applications interact seamlessly with databases, providing efficient data management and enhancing overall functionality. Data Storage: Web applications often need to store data, such as user profiles, product information, or transaction records. Data Retrieval: Applications retrieve data from databases based on user requests or system processes. Data Manipulation: Developers can insert, update, or delete data in the database.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Payment Integration',
    description:
      'Payment API integration involves incorporating a payment application programming interface (API) into a software system or website. It enables businesses to accept and process payments seamlessly within their applications or websites. Examples of payment platforms we can integrate include Stripe and Square.',
    icon: '/assets/icons/ic_money.svg',
  },
  {
    title: 'Inventory Management',
    description:
      ' Inventory management refers to the strategic organization, tracking, and control of goods within a business. It ensures that the right amount of in-stock items are available to meet demand without excessive inventory holding. ',
    icon: '/assets/icons/ic_optimization.svg',
  },

  // Row C
  {
    title: 'SMS Conversations',
    description:
      'Create automated SMS conversations to engage with customers, provide assistance, and send notifications.',
    icon: '/assets/icons/ic_file.svg',
  },
  {
    title: 'Social Media',
    description:
      'Social media integrations develop chatbots for social media platforms to interact with customers and address their queries.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'AI Powered Web Chat',
    description: 'Build a custom AI chat experience to help customers with every day tasks.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Lead Integration Forms',
    description:
      'Lead generation web forms are an essential component of customer relationship management (CRM) systems. They act as the bridge between businesses and potential customers. When integrated within a CRM system, these web forms streamline the process of capturing leads, understanding their needs, and nurturing them toward a sale.',
    icon: '/assets/icons/ic_agreement.svg',
  },

  // Row D
  {
    title: 'Blogs',
    description:
      'A blog is an online resource where content related to specific or general topics is regularly published for a community of readers. Blogs can shift a website from static to dynamic with… Regular Updates: Unlike static websites, websites with blogs are constantly updated with fresh content. New blog posts are added at regular intervals, keeping the audience engaged. Dynamic Content: Blogs allow authors to share their thoughts, experiences, and expertise on various topics. They can include articles, tutorials, personal reflections, and more.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Course Creation',
    description:
      'With the rising popularity of online courses, we can provide your website with the proper tools to publish professional virtual courses. Our software strategies take elements like user experience and structural design into consideration, so you are free to focus on creating quality content.',
    icon: '/assets/icons/ic_creativity.svg',
  },
  {
    title: 'Data Analytics',
    description:
      'Data analytics is the process of analyzing raw data to extract meaningful insights. User-Centered Decisions: By analyzing data from various sources (user interactions, traffic patterns, demographics), developers gain insights into user preferences, needs, and behavior. Improved User Experiences: Data-driven decisions lead to better website experiences. Developers can optimize layouts, features, and content based on real user data.',
    icon: '/assets/icons/ic_analysis.svg',
  },
  {
    title: 'Tailored Services',
    description:
      'Whatever your web development needs, we are confident in our team’s ability to provide services tailored to your company objectives. Schedule a free consultation today to discuss how we can bring your vision to life.',
    icon: '/assets/icons/ic_chip.svg',
  },
];

// ----------------------------------------------------------------------

export default function ApplicationsInclude() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Typography variant="h2">Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        We offer a variety of custom web development services and features, built from the ground up
        with your business in mind.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
