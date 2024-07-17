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
import MainLayout from 'src/layouts/main';
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
// ----------------------------------------------------------------------

export default function MarketingLandingView() {
  const { scrollYProgress } = useScroll();
  const [isReady, setIsReady] = useState(false);

  const mdUp = useResponsive('up', 'md');

  useEffect(() => {
    if (mdUp !== undefined) {
      setIsReady(true);
    }
  }, [mdUp]);

  if (!isReady){
    return <SplashScreen />
  }
  
  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />
{/*       
      {
        mdUp ? <MarketingLandingHero /> :  (
          <Box sx = {{w:"100%"}} display='flex' justifyContent='center' px = {5} pt = {15}  pb = {10}>
            <Logo size={128} />
          </Box>
          
        ) 

      } */}

    <MarketingLandingHero /> 
      
      {/* <MarketingOurClients brands={_brands} /> */}
      {/* About */}
      <MarketingLandingAboutHero />

      <MarketingLandingServices includeIntro/>

      <MarketingTeamAbout members={_members} />
      <MarketingLandingProcess />
      <MarketingAboutMissionStatement />
      {/* <MarketingAboutOurVision /> */}
      {/* <MarketingAboutPartnerLogos /> */}
      <MarketingAboutCoreValues />


      {/* <Applications /> */}
      <ApplicationsHero/>
      <ApplicationsInclude />
      <GetStartedSteps />
      <MarketingLandingFreeSEO  />

      {/* <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} /> */}
      {/* <MarketingTeam members={_members} /> */}
      {/* <PricingMarketing plans={_pricingMarketing} /> */}
      {/* <MarketingLandingFaqs /> */}
      {/* 
      <MarketingTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <MarketingLandingFreeSEO /> */}
      {/* <MarketingNewsletter /> */}

    </MainLayout>
  );
}
