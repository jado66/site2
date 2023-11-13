import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Web Chat',
    description: 'Build a custom AI chat experience to help customers with everyday tasks. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Incoming Voice Calls',
    icon: '/assets/icons/ic_customer_service.svg',
    description: 'Automate incoming calls and provide customers with excellent service.',
  },
  {
    title: 'Outgoing Voice Calls',
    description: 'Automate outgoing voice calls to provide proactive customer service and updates.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'SMS Conversations',
    description:
      'Create automated SMS conversations to engage with customers, provide assistance, and send notifications.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Email',
    description:
      'Build automated email responses to handle customer inquiries and provide support. Make marketing emails more personalized.',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Social Media',
    description:
      'Develop chatbots for social media platforms to interact with customers and address their queries. ',
    icon: '/assets/icons/ic_social_media.svg',
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
      <Typography variant="h2">Applications Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
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
