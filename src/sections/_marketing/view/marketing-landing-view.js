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

import { default as VisibilitySensor } from 'react-visibility-sensor';
import MainLayout, { useActiveSection } from 'src/layouts/main';
import { useResponsive } from 'src/hooks/use-responsive';
import { useEffect, useState, Suspense, lazy } from 'react';
import { SplashScreen } from 'src/components/loading-screen';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import { LogoLoading } from 'src/components/loading-screen/splash-screen';

// Lazy load components
const MarketingLandingFaqs = lazy(() => import('../landing/marketing-landing-faqs'));
const MarketingLandingAbout = lazy(() => import('../landing/marketing-landing-about'));
const MarketingLandingProcess = lazy(() => import('../landing/marketing-landing-process'));
const MarketingLandingServices = lazy(() => import('../landing/marketing-landing-services'));
const MarketingNewsletter = lazy(() => import('../marketing-newsletter'));
const MarketingTeamAbout = lazy(() => import('../team/marketing-team-about'));
const MarketingAboutCoreValues = lazy(() => import('../about/marketing-about-core-values'));
const MarketingAboutMissionStatement = lazy(() =>
  import('../about/marketing-about-mission-statement')
);
const MarketingLandingAboutHero = lazy(() => import('../landing/marketing-landing-about-hero'));
const MarketingLandingFreeSEO = lazy(() => import('../landing/marketing-landing-free-seo'));
const GetStartedSteps = lazy(() => import('src/sections/get-started/landing/get-started-steps'));
const ApplicationsInclude = lazy(() =>
  import('src/sections/applications/services/applications-include')
);
const ApplicationsHero = lazy(() => import('src/sections/applications/services/applications-hero'));
const MarketingLandingTechnology = lazy(() => import('../landing/marketing-landing-technology'));

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const [isReady, setIsReady] = useState(false);

  const { setActiveSection } = useActiveSection();

  const mdUp = useResponsive('up', 'md');

  useEffect(() => {
    if (mdUp !== undefined) {
      setIsReady(true);
    }
  }, [mdUp]);

  const onChangeVisibility = (visible, activeSection) => {
    if (visible) {
      setActiveSection(activeSection);
    }
  };

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <VisibilitySensor
        onChange={(visible) => onChangeVisibility(visible, '/')}
        partialVisibility
        scrollCheck
        intervalCheck
      >
        <MarketingLandingHero />
      </VisibilitySensor>

      {/* <MarketingOurClients brands={_brands} /> */}
      <VisibilitySensor
        onChange={(visible) => onChangeVisibility(visible, '/about')}
        partialVisibility
        scrollCheck
        intervalCheck
      >
        <Suspense fallback={<LogoLoading />}>
          <>
            <MarketingLandingAboutHero />
            <MarketingLandingServices includeIntro />
            <MarketingLandingTechnology />
            <MarketingTeamAbout members={_members} />
            <MarketingLandingProcess />
            <MarketingAboutMissionStatement />
            <VisibilitySensor
              onChange={(visible) => onChangeVisibility(visible, '/about')}
              partialVisibility
            >
              <MarketingAboutCoreValues />
            </VisibilitySensor>
          </>
        </Suspense>
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(visible) => onChangeVisibility(visible, '/services')}
        partialVisibility
        scrollCheck
        intervalCheck
      >
        <Suspense fallback={<LogoLoading />}>
          <>
            <ApplicationsHero />
            <VisibilitySensor
              onChange={(visible) => onChangeVisibility(visible, '/services')}
              partialVisibility
              scrollCheck
              intervalCheck
            >
              <ApplicationsInclude />
            </VisibilitySensor>
          </>
        </Suspense>
      </VisibilitySensor>

      <VisibilitySensor
        onChange={(visible) => onChangeVisibility(visible, '/contact')}
        partialVisibility
        scrollCheck
        intervalCheck
      >
        <Suspense fallback={<LogoLoading />}>
          <>
            <MarketingLandingFreeSEO />
            <GetStartedSteps />
          </>
        </Suspense>
      </VisibilitySensor>

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}
      {/* <MarketingTeam members={_members} /> */}
      {/* <PricingMarketing plans={_pricingMarketing} /> */}
      {/* <MarketingLandingFaqs /> */}
      {/*
      <MarketingTestimonial testimonials={_testimonials} />
      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />
      <MarketingLandingFreeSEO />
      <MarketingNewsletter /> */}
    </>
  );
};
