import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import Container from '@mui/material/Container';
import TimelineItem from '@mui/lab/TimelineItem';
import Typography from '@mui/material/Typography';
import TimelineContent from '@mui/lab/TimelineContent';
import { alpha, useTheme } from '@mui/material/styles';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    step: 'STEP 1',
    title: 'Discovery And Planning',
    description: 'Explore and plan the project requirements and goals.',
  },
  {
    step: 'STEP 2',
    title: 'Development',
    description: 'Build and implement the solution based on the project requirements.',
  },
  {
    step: 'STEP 3',
    title: 'Testing & Feedback',
    description: 'Thoroughly test the solution and gather feedback for improvements.',
  },
  {
    step: 'STEP 4',
    title: 'Launch & Grow',
    description: 'Deploy the solution and focus on growth and continuous improvement.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

// ----------------------------------------------------------------------

export default function ApplicationsHowItWork() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.8),
          imgUrl: '/assets/background/overlay_2.jpg',
        }),
        color: 'common.white',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          How It Works
        </Typography>

        <Typography
          sx={{
            mt: 3,
            mx: 'auto',
            opacity: 0.72,
            maxWidth: 480,
            textAlign: 'center',
            mb: { xs: 8, md: 10 },
          }}
        >
          Explore the Project Steps and Get Started!
        </Typography>

        <Timeline position={mdUp ? 'alternate' : 'right'}>
          {TIMELINES.map((value, index) => (
            <TimelineItem
              key={value.title}
              sx={{
                '&:before': {
                  ...(!mdUp && { display: 'none' }),
                },
              }}
            >
              <TimelineSeparator>
                <TimelineDot color={COLORS[index]} />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                <Typography variant="overline" sx={{ color: `${COLORS[index]}.main` }}>
                  {value.step}
                </Typography>

                <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.72,
                    maxWidth: { md: 360 },
                    ...(index % 2 && {
                      ml: 'auto',
                    }),
                  }}
                >
                  {value.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
