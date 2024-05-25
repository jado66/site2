'use client';

import { _testimonials, _marketingPosts, _offices } from 'src/_mock';

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
import CheckoutView from './checkout-view';
import EcommerceCartView from 'src/sections/_ecommerce/view/ecommerce-cart-view';
import EcommerceAccountPersonalView from 'src/sections/_ecommerce/view/ecommerce-account-personal-view';
import AccountLayout from 'src/layouts/account';
import { useState } from 'react';
import EcommerceAccountWishlistView from 'src/sections/_ecommerce/view/ecommerce-account-wishlist-view';
import EcommerceAccountVouchersView from 'src/sections/_ecommerce/view/ecommerce-account-vouchers-view';
import EcommerceAccountOrdersPage from 'src/sections/_ecommerce/view/ecommerce-account-orders-view';
import EcommerceAccountPaymentView from 'src/sections/_ecommerce/view/ecommerce-account-payment-view';
import ContactMap from 'src/components/map';
import { Grid } from '@mui/material';

// ----------------------------------------------------------------------

export default function ServicesView() {
  const [accountPage, setAccountPage] = useState(0);

  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <Grid container>
        <ScrollProgress scrollYProgress={scrollYProgress} />

        <Grid xs={12}>
          <ApplicationsHero />
        </Grid>

        <CheckoutView />

        <EcommerceCartView />

        <AccountLayout setPage={setAccountPage} page={accountPage}>
          {accountPage === 0 && <EcommerceAccountPersonalView />}
          {accountPage === 1 && <EcommerceAccountWishlistView />}
          {accountPage === 2 && <EcommerceAccountVouchersView />}
          {accountPage === 3 && <EcommerceAccountOrdersPage />}
          {accountPage === 4 && <EcommerceAccountPaymentView />}
        </AccountLayout>

        <Grid xs={12} md={6} lg={7} sx={{ mx: 'auto' }}>
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
        {/* <Applications /> */}

        {/* <ApplicationsInclude /> */}

        {/* <ApplicationsBenefits /> */}

        {/* <ApplicationsHowItWork /> */}
      </Grid>
    </MainLayout>
  );
}
