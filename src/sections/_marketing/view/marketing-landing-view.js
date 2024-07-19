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

import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingServices from '../landing/marketing-landing-services';
import MarketingNewsletter from '../marketing-newsletter';
import MainLayout, { useActiveSection } from 'src/layouts/main';
import { useResponsive } from 'src/hooks/use-responsive';
import { useEffect, useState } from 'react';
import { SplashScreen } from 'src/components/loading-screen';
import Logo from 'src/components/logo';
import { Box } from '@mui/system';
import MarketingTeamAbout from '../team/marketing-team-about';
import MarketingAboutCoreValues from '../about/marketing-about-core-values';
import MarketingAboutMissionStatement from '../about/marketing-about-mission-statement';
import MarketingLandingAboutHero from '../landing/marketing-landing-about-hero';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import GetStartedSteps from 'src/sections/get-started/landing/get-started-steps';
import ApplicationsInclude from 'src/sections/applications/services/applications-include';
import ApplicationsHero from 'src/sections/applications/services/applications-hero';
import { default as VisibilitySensor } from 'react-visibility-sensor';

// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  return (
    <MainLayout>
      <HomePage/>
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
      setActiveSection(activeSection)
    }
  };


  if (!isReady){
    return <SplashScreen />
  }


  return (

    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      
      <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/')} partialVisibility scrollCheck intervalCheck>
        <MarketingLandingHero /> 
      </VisibilitySensor>

      {/* <MarketingOurClients brands={_brands} /> */}
      {/* About */}

      <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/about')} partialVisibility scrollCheck intervalCheck>
        <>
          <MarketingLandingAboutHero />

          <MarketingLandingServices includeIntro/>

          <MarketingTeamAbout members={_members} />
          <MarketingLandingProcess />
          <MarketingAboutMissionStatement />
          {/* <MarketingAboutOurVision /> */}
          {/* <MarketingAboutPartnerLogos /> */}
          <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/about')} partialVisibility >
            <MarketingAboutCoreValues />
          </VisibilitySensor>

        </>
      </VisibilitySensor>
      

      <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/services')} partialVisibility scrollCheck intervalCheck >

      {/* <Applications /> */}
        <>
          <ApplicationsHero/>
            <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/services')} partialVisibility scrollCheck intervalCheck >
              <ApplicationsInclude />
            </VisibilitySensor>

        </>
      </VisibilitySensor>

      <VisibilitySensor onChange={(visible)=>onChangeVisibility(visible, '/contact')} partialVisibility scrollCheck intervalCheck>

      {/* <Applications /> */}
        <>
          <MarketingLandingFreeSEO  />
          <GetStartedSteps />
        </>
      </VisibilitySensor>

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}
      {/* <MarketingTeam members={_members} /> */}
      {/* <PricingMarketing plans={_pricingMarketing} /> */}
      {/* <MarketingLandingFaqs /> */}
      {/* 
      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO /> */}
      {/* <MarketingNewsletter /> */}
    </>
  )
}