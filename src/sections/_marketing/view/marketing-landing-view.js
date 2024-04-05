'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';
import MainLayout from 'src/layouts/main';

import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingServices from '../landing/marketing-landing-services';
import MarketingNewsletter from '../marketing-newsletter';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <MarketingLandingHero />

      {/* <MarketingOurClients brands={_brands} /> */}

      <MarketingLandingServices />

      {/* <MarketingLandingAbout /> */}

      <MarketingLandingProcess />

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}

      {/* <MarketingTeam members={_members} /> */}

      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      <MarketingNewsletter />

      {/* <MarketingLandingFaqs /> */}
      {/* 
      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}
    </MainLayout>
  );
}
