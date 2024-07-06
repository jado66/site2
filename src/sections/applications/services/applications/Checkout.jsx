'use client';

import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useState, useCallback, useEffect, useRef } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tours } from 'src/_mock';

import FormProvider from 'src/components/hook-form';

import TravelCheckOutSummary from 'src/sections/_travel/checkout/travel-check-out-summary';
import TravelCheckOutPaymentForm from 'src/sections/_travel/checkout/travel-check-out-payment-form';
import TravelCheckOutShippingForm from 'src/sections/_travel/checkout/travel-check-out-shipping-form';
import { useBoolean } from 'src/hooks/use-boolean';
import { StepLabel } from '@mui/material';
import TravelOrderCompletedView from 'src/sections/_travel/view/travel-order-completed-view';
import { useTheme } from '@mui/system';

export const Checkout = ({ handleClose }) => {
  const [checkoutPage, setCheckoutPage] = useState(0);

  const theme = useTheme();

  const scrollRef = useRef(null);

  const sameBilling = useBoolean();

  const [departureDay, setDepartureDay] = useState(new Date());

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
  });

  const TravelCheckoutSchema = Yup.object().shape({
    billingAddress: Yup.object().shape({}),
  });

  const defaultValues = {
    billingAddress: {
      firstName: '',
      lastName: '',
      fullAddress: '',
      fullAddress2: '',
    },
    shippingAddress: {
      firstName: '',
      lastName: '',
      fullAddress: '',
      fullAddress2: '',
    },
    paymentMethods: {
      methods: 'paypal',
      card: {
        cardNumber: '',
        cardHolder: '',
        expirationDate: '',
        ccv: '',
      },
    },
  };

  const methods = useForm({
    resolver: yupResolver(TravelCheckoutSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      setCheckoutPage(1);
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleChangeDepartureDay = useCallback((newValue) => {
    setDepartureDay(newValue);
  }, []);

  const handleIncrementGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children + 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults + 1 });
      }
    },
    [guests]
  );

  const handleDecreaseGuests = useCallback(
    (guest) => {
      if (guest === 'children') {
        setGuests({ ...guests, children: guests.children - 1 });
      } else {
        setGuests({ ...guests, adults: guests.adults - 1 });
      }
    },
    [guests]
  );

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [checkoutPage]);

  return (
    <Container
      sx={{
        position: 'absolute',
        pb: { xs: 8, md: 15 },
        top: 0
      }}
      onClick={handleClose}
    >
      <div ref={scrollRef} style={{ position: 'relative'}} />
      {checkoutPage === 0 ? (
        <>
          <Typography variant="h3" sx={{ mb: 5, mt: 5 }}>
            Payment Integration
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5 }}>
            Payment API integration involves incorporating a payment application programming
            interface (API) into a software system or website. It enables businesses to accept and
            process payments seamlessly within their applications or websites. Examples of payment
            platforms we can integrate include Stripe and Square.
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h4" sx={{ mb: 5 }}>
            Confirm and Pay
          </Typography>
          <FormProvider methods={methods} onSubmit={onSubmit}>
            <Grid container spacing={{ xs: 5, md: 8 }} onClick={(e) => e.stopPropagation()}>
              <Grid xs={12} md={7}>
                <Stack>
                  <StepLabel title="Shipping Information" step="1" />

                  <TravelCheckOutShippingForm
                    sameBilling={sameBilling.value}
                    onChangeSameBilling={sameBilling.onToggle}
                  />

                  <Divider sx={{ my: 5, borderStyle: 'dashed' }} />

                  <StepLabel title="Payment Methods" step="2" />

                  <TravelCheckOutPaymentForm />
                </Stack>
              </Grid>

              <Grid xs={12} md={5}>
                <TravelCheckOutSummary
                  guests={guests}
                  tour={_tours[0]}
                  departureDay={departureDay}
                  isSubmitting={isSubmitting}
                  onDecreaseGuests={handleDecreaseGuests}
                  onIncrementGuests={handleIncrementGuests}
                  onChangeDepartureDay={handleChangeDepartureDay}
                />
              </Grid>
            </Grid>
          </FormProvider>
        </>
      ) : (
        <>
          <TravelOrderCompletedView onClickBack={() => setCheckoutPage(0)} />
        </>
      )}
    </Container>
  );
};
