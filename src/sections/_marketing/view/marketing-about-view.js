'use client';

import { _members, _brandsColor, _testimonials } from 'src/_mock';

import MarketingAbout from '../about/marketing-about';
import MarketingNewsletter from '../marketing-newsletter';
import MarketingTeamAbout from '../team/marketing-team-about';
import MarketingAboutStory from '../about/marketing-about-story';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingAboutOurClients from '../marketing-about-our-clients';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingAboutOurVision from '../about/marketing-about-our-vision';
import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import MarketingAboutCoreValues from '../about/marketing-about-core-values';
import MainLayout from 'src/layouts/main';
import GetStartedSteps from 'src/sections/get-started/landing/get-started-steps';
import MarketingLandingAboutHero from '../landing/marketing-landing-about-hero';
import MarketingAboutMissionStatement from '../about/marketing-about-mission-statement';
import MarketingAboutPartnerLogos from '../about/marketing-about-partners';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingLandingAboutHero />


      <MarketingAboutMissionStatement />

      <MarketingTeamAbout members={_members} />

      {/* <MarketingAboutOurVision /> */}

      <MarketingAboutPartnerLogos />

      <MarketingAboutCoreValues />

      <GetStartedSteps />

      {/* <MarketingAboutStory /> */}

      {/* <MarketingAboutOurClients brands={_brandsColor} /> */}

      {/* <MarketingTestimonial testimonials={_testimonials} /> */}
      {/* <MarketingNewsletter /> */}

      {/* <MarketingLandingFaqs /> */}

      <MarketingLandingFreeSEO />
    </>
  );
}
