'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MainLayout from 'src/layouts/main';
import SolarHero from '../components/solar-hero';

// ----------------------------------------------------------------------

export default function SolarView() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <SolarHero />

      {/* <Applications /> */}
    </MainLayout>
  );
}
