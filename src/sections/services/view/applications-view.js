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
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  alpha,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import LoginBackgroundView from 'src/sections/auth/login-background-view';
import { bgGradient } from 'src/theme/css';
import { useTheme } from '@mui/system';
import VerifyView from 'src/sections/auth/verify-view';
import RegisterBackgroundView from 'src/sections/auth/register-background-view';
import ForgotPasswordView from 'src/sections/auth/forgot-password-view';
import { AnalyticsTrafficSources } from 'src/sections/analytics/TrafficSources';

// ----------------------------------------------------------------------

const AccountTabs = ['Personal Info', 'Wishlist', 'Vouchers', 'Orders', 'Payment'];

export default function ServicesView() {
  const [accountPage, setAccountPage] = useState('Personal Info');
  const [loginPage, setLoginPage] = useState('login');

  const theme = useTheme();

  const handleChangeTab = useCallback((event, newValue) => {
    setAccountPage(newValue);
  }, []);

  const { scrollYProgress } = useScroll();
  return (
    <>
      <Grid container>
        <ScrollProgress scrollYProgress={scrollYProgress} />

        <Grid xs={12}>
          <ApplicationsHero />
        </Grid>

        <StyledAccordion title="Data and Analytics">
          <>
            <AnalyticsTrafficSources />
          </>
        </StyledAccordion>

        <StyledAccordion title="Eccomerce Features">
          <>
            <CheckoutView />

            <Divider sx />

            <EcommerceCartView />
          </>
        </StyledAccordion>

        <StyledAccordion title="Login and Sign-Up Flows">
          <>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                mx: -2,
                py: 12,
                minHeight: '100vh',
              }}
            >
              <Stack
                spacing={4}
                sx={{
                  p: 4,
                  width: 1,
                  mx: 'auto',
                  flexShrink: 0,
                  maxWidth: 400,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  boxShadow: theme.customShadows.z24,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                {loginPage === 'login' && (
                  <LoginBackgroundView
                    onRegisterClick={() => setLoginPage('register')}
                    onForgotPasswordClick={() => setLoginPage('forgot')}
                  />
                )}
                {loginPage === 'register' && (
                  <RegisterBackgroundView onLoginClick={() => setLoginPage('login')} />
                )}
                {loginPage === 'forgot' && (
                  <ForgotPasswordView onLoginClick={() => setLoginPage('login')} />
                )}
              </Stack>
            </Stack>

            <Divider />

            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                mx: -2,
                py: 12,
                minHeight: '100vh',
              }}
            >
              <Stack
                spacing={4}
                sx={{
                  p: 4,
                  width: 1,
                  mx: 'auto',
                  flexShrink: 0,
                  maxWidth: 400,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  boxShadow: theme.customShadows.z24,
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                <VerifyView />
              </Stack>
            </Stack>
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
    </>
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
