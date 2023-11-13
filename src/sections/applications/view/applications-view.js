'use client';

import { _testimonials, _marketingPosts } from 'src/_mock';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MainLayout from 'src/layouts/main';

import Applications from '../services/applications';
import ApplicationsHero from '../services/applications-hero';
// import MarketingTestimonial from '../testimonial/marketing-testimonial';
// import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import ApplicationsInclude from '../services/applications-include';
import ApplicationsBenefits from '../services/applications-benefits';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import ApplicationsHowItWork from '../services/applications-how-it-work';

// ----------------------------------------------------------------------

export default function ApplicationsView() {
  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <ApplicationsHero />

      {/* <Applications /> */}

      <ApplicationsInclude />

      <ApplicationsBenefits />

      <ApplicationsHowItWork />
    </MainLayout>
  );
}
