import HomeView from 'src/sections/_home/view/home-view';
import MarketingLandingView from 'src/sections/_marketing/view/marketing-landing-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Marketing: Home',
};

export default function MarketingLandingPage() {
  return <MarketingLandingView />;
  // return <HomeView />;
}
