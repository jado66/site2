'use client';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { _tours, _travelPosts, _testimonials } from 'src/_mock';

import TravelNewsletter from '../travel-newsletter';
import TravelFilters from '../filters/travel-filters';
import TravelLandingHero from '../landing/travel-landing-hero';
import TravelTestimonial from '../testimonial/travel-testimonial';
import TravelLandingSummary from '../landing/travel-landing-summary';
import TravelLandingIntroduce from '../landing/travel-landing-introduce';
import TravelLandingToursByCity from '../landing/travel-landing-tours-by-city';
import TravelLandingTourFeatured from '../landing/travel-landing-tour-featured';
// import BlogTravelLandingLatestPosts from '../../blog/travel/travel-landing-posts';
import TravelLandingFavoriteDestinations from '../landing/travel-landing-favorite-destinations';
import TravelLayout from 'src/layouts/main/travelLayout';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { travelPageInstructionsToast } from 'src/utils/toasts';
import { ActiveSectionProvider } from 'src/layouts/main';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// ----------------------------------------------------------------------

export default function TravelLandingView() {
  return (
    <ActiveSectionProvider>
      <TravelLayout>
        <IntroDialog />
        <Box sx={{ position: 'relative' }}>
          <TravelLandingHero tours={_tours.slice(0, 5)} />

          <Container
            sx={{
              mb: { md: 10 },
              left: { md: 0 },
              right: { md: 0 },
              bottom: { md: 0 },
              mx: { md: 'auto' },
              pt: { xs: 3, md: 2 },
              position: { md: 'absolute' },
            }}
          >
            <TravelFilters
              sx={{
                color: { md: 'common.white' },
                bgcolor: (theme) => ({
                  xs: 'background.neutral',
                  md: alpha(theme.palette.common.white, 0.08),
                }),
              }}
            />
          </Container>
        </Box>

        <TravelLandingIntroduce />

        <TravelLandingSummary />

        <TravelLandingFavoriteDestinations tours={_tours.slice(0, 4)} />

        <TravelLandingTourFeatured tours={_tours.slice(0, 4)} />

        <TravelLandingToursByCity tours={_tours.slice(0, 8)} />

        <TravelTestimonial testimonials={_testimonials} />

        <TravelNewsletter />
      </TravelLayout>
    </ActiveSectionProvider>
  );
}

const IntroDialog = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Welcome!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This page is part of an example site, only intended to demonstrate our development
            capabilities.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
