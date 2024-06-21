'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import ApplicationsHowItWork from 'src/sections/applications/services/applications-how-it-work';
import ApplicationsBenefits from 'src/sections/applications/services/applications-benefits';

// ----------------------------------------------------------------------

export default function ApplicationsView() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ApplicationsBenefits />

      <ApplicationsHowItWork />
    </>
  );
}
