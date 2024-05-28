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
import { useCallback, useState } from 'react';
import EcommerceAccountWishlistView from 'src/sections/_ecommerce/view/ecommerce-account-wishlist-view';
import EcommerceAccountVouchersView from 'src/sections/_ecommerce/view/ecommerce-account-vouchers-view';
import EcommerceAccountOrdersPage from 'src/sections/_ecommerce/view/ecommerce-account-orders-view';
import EcommerceAccountPaymentView from 'src/sections/_ecommerce/view/ecommerce-account-payment-view';
import ContactMap from 'src/components/map';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const AccountTabs = ['Personal Info', 'Wishlist', 'Vouchers', 'Orders', 'Payment'];

export default function ServicesView() {
  const [accountPage, setAccountPage] = useState('Personal Info');

  const handleChangeTab = useCallback((event, newValue) => {
    setAccountPage(newValue);
  }, []);

  const { scrollYProgress } = useScroll();
  return (
    <MainLayout>
      <Grid container>
        <ScrollProgress scrollYProgress={scrollYProgress} />

        <Grid xs={12}>
          <ApplicationsHero />
        </Grid>

        <StyledAccordion title="Eccomerce Features">
          <>
            <CheckoutView />

            <EcommerceCartView />
          </>
        </StyledAccordion>

        <StyledAccordion title="User Accounts">
          <>
            <Grid xs={12} md={6} lg={7} sx={{ mx: 'auto' }}>
              <Tabs
                value={accountPage}
                scrollButtons="auto"
                allowScrollButtonsMobile
                onChange={handleChangeTab}
                variant="fullWidth"
                sx={{ mb: 3, display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                {AccountTabs.map((category) => (
                  <Tab key={category} value={category} label={category} />
                ))}
              </Tabs>
            </Grid>

            <Box
              sx={{
                flexGrow: 1,
                pl: { md: 8 },
                mx: 'auto',
                width: { md: `calc(100% - ${280}px)` },
              }}
            >
              {accountPage === 'Personal Info' && <EcommerceAccountPersonalView />}
              {accountPage === 'Wishlist' && <EcommerceAccountWishlistView />}
              {accountPage === 'Vouchers' && <EcommerceAccountVouchersView />}
              {accountPage === 'Orders' && <EcommerceAccountOrdersPage />}
              {accountPage === 'Payment' && <EcommerceAccountPaymentView />}
            </Box>
          </>
        </StyledAccordion>

        <StyledAccordion title="External Technology Integration">
          <>
            <Grid xs={12} md={6} lg={7} sx={{ mx: 'auto' }}>
              <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
            </Grid>
          </>
        </StyledAccordion>

        {/* <Applications /> */}

        {/* <ApplicationsInclude /> */}

        {/* <ApplicationsBenefits /> */}

        {/* <ApplicationsHowItWork /> */}
      </Grid>
    </MainLayout>
  );
}

const StyledAccordion = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion
        sx={{
          '&.Mui-expanded': {
            marginY: 0,
          },
          width: '100%',
        }}
        PaperProps={{ marginTop: 0 }}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '& .MuiAccordionSummary-content': {
              justifyContent: 'center',
              alignItems: 'center',
            },
            display: 'flex',
            width: '100%',
          }}
        >
          <Typography variant="h3">
            {title}
            <Iconify
              icon="tabler:chevron-up"
              style={{
                marginLeft: '1em',
                transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ my: 0 }}>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};
