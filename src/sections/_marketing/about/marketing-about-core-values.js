import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { borderRadius } from '@mui/system';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Innovation',
    // description: "Innovation in business is the heartbeat of progress, propelling organizations forward in an ever-evolving marketplace. It's the creative engine that drives companies to develop groundbreaking products, services, and processes that redefine industries and meet evolving customer needs. From pioneering technological advancements to reimagining traditional business models, Platinum Programming innovatively fosters agility, competitiveness, and sustainability.  In today's dynamic landscape, businesses that prioritize innovation not only stay relevant but also carve out new opportunities for growth and success. That's why our team dares to challenge the status quo, embrace change, and cultivate a culture where fresh ideas flourish.",
    description: "Innovation drives progress. At Platinum Programming, we create groundbreaking products and services for evolving customer needs. We challenge the status quo, embrace change, and cultivate fresh ideas for growth and success.",
    icon: '/assets/stock-photos/innovation.webp',
  },
  {
    title: 'Customer Satisfaction',
    // description: "At Platinum Programming, we strive to provide you with competitive customer service and complete customer satisfaction. We believe that key factors contributing to customer satisfaction in web development include quality assurance, usability, reliability, and maintenance. Quality Assurance - Delivering bug-free, error-free software. Usability - Ensuring intuitive interfaces and smooth user experiences. Reliability - Building a positive reputation through consistently reliable services. Maintenance - Minimizing the need for ongoing fixes and updates. To prioritize customer satisfaction, we keep an open line of communication between our clients and project manager to ensure that client expectations are being met.",
    description:'Platinum Programming prioritizes customer satisfaction. We deliver reliable, user-friendly software with minimal need for fixes. Our open communication ensures we meet client expectations.',
    icon: '/assets/stock-photos/satisfaction.webp',
  },
  {
    title: 'Integrity',
    // description: "Integrity is the cornerstone of every successful business, including Platinum Programming.  It serves as the bedrock of trust between our team and our clients, and it encompasses a commitment to honesty, transparency, and ethical conduct in all business dealings. Upholding integrity means adhering to moral principles even when faced with difficult decisions, maintaining consistency between words and actions, and taking responsibility for mistakes. We believe that businesses built on integrity foster long-lasting relationships with customers, employees, suppliers, and the wider community. They prioritize fairness, respect, and accountability, creating a culture of trust and credibility that forms the foundation for sustainable growth and positive impact. In a world where credibility is invaluable, integrity isn't just a choice—it's a strategic imperative for thriving in the modern marketplace.",
    description: 'Integrity at Platinum Programming means honesty, transparency, and ethical conduct. We adhere to moral principles, maintain consistency, and take responsibility for mistakes, fostering trust-filled relationships and sustainable growth.',
    icon: '/assets/stock-photos/integrity.webp',
  },
  {
    title: 'Collaboration',
    // description: "At Platinum Programming, collaboration is the catalyst for synergy, driving collective success through the pooling of diverse talents, resources, and perspectives. Our business transcends organizational boundaries, fostering partnerships both within and outside the company to achieve shared goals. Whether it's teams collaborating on projects, departments aligning their efforts, or businesses forming strategic alliances, collaboration cultivates innovation, efficiency, and adaptability. By leveraging the strengths of each participant, our collaboration unlocks new opportunities, accelerates problem-solving, and enhances decision-making processes. In today's interconnected world, businesses that embrace collaboration not only tap into a wealth of expertise but also foster a culture of teamwork, mutual respect, and continuous learning, propelling them towards sustained growth and competitiveness.",
    description: 'Platinum Programming values collaboration. We combine diverse talents for success, fostering innovation and adaptability. Through collaboration, we unlock opportunities, solve problems, and enhance decision-making, driving growth and competitiveness.',
    icon: '/assets/stock-photos/collaboration.webp',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 10, md: 10 },
        pb: { xs: 10, md: 10 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Core Values
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}
          >
            <img
              src={value.icon}
              style={{
                hheight: 180,
                width: 'auto', // This will adjust the width automatically keeping aspect ratio
                objectFit: 'contain', // This makes sure the image is scaled properly without losing its aspect ratio
                mx: 'auto',
                color: 'primary.main',
                borderRadius: '16px'
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
