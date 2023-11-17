'use client';

import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import GetStartedSteps from './landing/get-started-steps';

import GetStartedContactView from './landing/get-started-contact-view';
// ----------------------------------------------------------------------

export default function GetStartedView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <GetStartedSteps />;
      <GetStartedContactView />
    </>
  );
}

//   return (
//     <>
//       <Box
//         sx={{
//           py: 5,
//           bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
//         }}
//       >
//         <Container>
//           <CustomBreadcrumbs
//             heading="Form Validation"
//             links={[
//               {
//                 name: 'Components',
//                 href: paths.components.root,
//               },
//               { name: 'Form Validation' },
//             ]}
//             moreLink={['https://react-hook-form.com/', 'https://github.com/jquense/yup']}
//           />
//         </Container>
//       </Box>

//       <Container sx={{ my: 10 }}>
//         <Stack direction="row" alignItems="center" justifyContent="space-between">
//           <Typography variant="h4"> React Hook Form + Yup </Typography>
//           <FormControlLabel
//             control={<Switch checked={debug.value} onClick={debug.onToggle} />}
//             label="Show Debug"
//             labelPlacement="start"
//           />
//         </Stack>

//         <Divider sx={{ my: 5 }} />

//         <ReactHookForm debug={debug.value} />
//       </Container>
//     </>
//   );
// }
