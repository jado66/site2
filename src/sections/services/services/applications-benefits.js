import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

const BENEFITS = [
  {
    title: 'Unique Design and Functionality',
    description:
      'A custom website is built from scratch, offering a tailored design and unique functionality specifically for your business or brand. It reflects your identity and stands out.',
    iconColor: 'primary',
  },
  {
    title: 'Tailored Functionality',
    description:
      'Custom sites can incorporate specific features relevant to your business needs. Whether it’s an intricate booking system, e-commerce functionality, or interactive elements, you can build exactly what you require.',
    iconColor: 'success',
  },
  {
    title: 'Scalability and Flexibility',
    description:
      'Custom sites are more flexible and can be easily modified as your business evolves. As your business grows, a custom site can evolve alongside it. Web developers create custom websites with your specific needs in mind, allowing for future adjustments. You can easily add new features, optimize performance, and adapt to changing requirements.',
    iconColor: 'secondary',
  },
  {
    title: 'SEO Optimization',
    description:
      'Custom websites allow for fine-tuning of SEO elements.You can optimize code, meta tags, and content to improve search engine rankings.',
    iconColor: 'secondary',
  },
  {
    title: 'Security and Maintenance',
    description:
      'Custom sites can be built with robust security measures. Regular maintenance ensures security patches and updates are promptly applied.',
    iconColor: 'success',
  },
  {
    title: 'Long-Term Investment',
    description:
      'While custom development requires more time and money upfront, it’s a long-term investment that aligns precisely with your business objectives.',
    iconColor: 'primary',
  },
  {
    title: 'Unique Brand Identity',
    description:
      'A custom website is tailored to your brand, reflecting its personality, values, and vision. You have complete control over the design, ensuring it stands out from competitors.',
    iconColor: 'success',
  },
];

// ----------------------------------------------------------------------

export default function ApplicationsBenefits() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Benefits of a Custom Website
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,

            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          What are the differences between a custom website and a template-based website, and how
          can I know which option is a better fit for my business? With a template-based website,
          you are locked into the features and functionality offered by the template’s host
          platform, whether it be Wix or WordPress. You may be forced to completely start over when
          the size of your business and/or the complexity of your website outgrow your host
          platform. Most successfully scaling businesses will eventually need to transition form a
          template-based website to a custom website, and beginning with a custom website can
          alleviate the time and cost spent on this unnecessary transition. People often gravitate
          towards template-based websites with the assumption that their website will be simpler to
          develop because it requires little to no coding. While this is true for small businesses
          with basic website needs, templates without coding functionality become incredibly complex
          as the business grows. Furthermore, many template-based websites look similar, and most
          individuals with any degree of experience in web development will visually spot a Wix and
          WordPress website. This may cause your branding to appear “cheap” and threaten the
          perceived value of your goods and services. A common criticism of custom websites is
          pricing. However, if you intend to establish a highly professional online presence, you
          will most likely need to hire a developer regardless of whether you purchase a
          template-based website or a custom website. In other words, you will be budgeting for
          development costs with both website options, so why not invest in the long-term
          scalability of a custom website? In contrast to template-based websites, custom websites
          offer tailored solutions. A custom website is a better match for your business and website
          needs if you prioritize uniqueness, scalability, and tailored functionality.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(0, 3).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} reverse />
            ))}
          </Stack>

          {mdUp && <Image alt="benefits" src="/assets/illustrations/illustration_benefits.svg" />}

          <Stack spacing={{ xs: 4, md: 10 }}>
            {BENEFITS.slice(-4).map((benefit, index) => (
              <BenefitItem key={benefit.title} benefit={benefit} index={index} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function BenefitItem({ benefit, reverse, index }) {
  const { title, description, iconColor } = benefit;

  return (
    <Stack
      spacing={1}
      direction={{ xs: 'row', md: reverse ? 'row-reverse' : 'row' }}
      sx={{
        ...(reverse && {
          textAlign: { md: 'right' },
        }),
        ...(index === 1 && {
          pl: { md: 6 },
          ...(reverse && {
            pl: { md: 0 },
            pr: { md: 6 },
          }),
        }),
      }}
    >
      <Box
        sx={{
          m: 1,
          width: 16,
          height: 16,
          flexShrink: 0,
          borderRadius: '50%',
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          ...(iconColor === 'secondary' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
          }),
          ...(iconColor === 'success' && {
            background: (theme) =>
              `linear-gradient(to bottom, ${theme.palette.success.light}, ${theme.palette.success.main})`,
          }),
        }}
      />

      <Stack spacing={1}>
        <Typography variant="h5">{title}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}

BenefitItem.propTypes = {
  benefit: PropTypes.shape({
    description: PropTypes.string,
    iconColor: PropTypes.string,
    title: PropTypes.string,
  }),
  index: PropTypes.number,
  reverse: PropTypes.bool,
};
