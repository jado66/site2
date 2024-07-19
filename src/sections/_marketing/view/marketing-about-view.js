'use client';

import { _members, _brandsColor, _testimonials } from 'src/_mock';


import MarketingTeamAbout from '../team/marketing-team-about';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingAboutCoreValues from '../about/marketing-about-core-values';
import MarketingLandingAboutHero from '../landing/marketing-landing-about-hero';
import MarketingAboutMissionStatement from '../about/marketing-about-mission-statement';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingServices from '../landing/marketing-landing-services';
import GetStartedSteps from 'src/sections/get-started/landing/get-started-steps';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingLandingAboutHero />

      <MarketingLandingServices />
      <MarketingTeamAbout members={_members} />
      <MarketingLandingProcess />
      <MarketingAboutMissionStatement />
      {/* <MarketingAboutOurVision /> */}
      {/* <MarketingAboutPartnerLogos /> */}
      <MarketingAboutCoreValues />
      <MarketingLandingFreeSEO  />
      <GetStartedSteps/>

    </>
  );
}
