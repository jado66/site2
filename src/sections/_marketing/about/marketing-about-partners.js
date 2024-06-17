'use client';

import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';

const partnerLogos = [
  'centauri.webp',
  'sinch.webp',
  'kbr.webp',
  'fbi.webp',
  'deiji.webp'
];

export default function MarketingAboutPartnerLogos() {
    const [activeStep, setActiveStep] = React.useState(0);

    const rotateLogos = () => setActiveStep(p=>p+1)

    useEffect(()=>{

        const intervalId = setInterval(()=>{
            rotateLogos()
        },10500)
        return () => clearInterval(intervalId);

    },[])
  
  const slideRenderer = () => {
    
    const middleIndex = activeStep % partnerLogos.length
    
    let leftIndex = middleIndex - 1
    let rightIndex = middleIndex + 1
    

    if (leftIndex < 0)
        leftIndex = partnerLogos.length - 1

    if (rightIndex > partnerLogos.length - 1)
        rightIndex = 0

    let nextRightIndex = rightIndex + 1

    if (nextRightIndex > partnerLogos.length - 1)
        nextRightIndex = 0

    const leftLogo = partnerLogos[leftIndex]
    const middleLogo = partnerLogos[middleIndex]
    const rightLogo = partnerLogos[rightIndex]
    const nextRightLogo = partnerLogos[nextRightIndex]

    const displayedLogos = [leftLogo, middleLogo, rightLogo, nextRightLogo]


    return (
        <>
          {displayedLogos.map((logo, index) => {
            let style;
  
            if (index === leftIndex) {
              style = {
                transform: 'translateX(-100%)', // Exit left
                transition: 'transform 1s',
              };
            } else if (index === middleIndex) {
              style = {
                transform: 'translateX(0)', // Middle/active position
                transition: 'transform 1s',
              };
            } else if (index === rightIndex) {
              style = {
                transform: 'translateX(100%)', // Enter from right
                transition: 'transform 1s',
              };
            } else if (index === nextRightIndex) {
              style = {
                transform: 'translateX(200%)', // Right position off-screen
                transition: 'transform 1s',
              };
            } else {
              style = {
                transform: 'translateX(-200%)', // Hide other logos
                transition: 'transform 1s',
              };
            }
  
            return (
              <Box
                key={`${logo}-${activeStep}`}
                sx={{
                  height: 100,
                  width: '50%', // Adjust based on your layout needs
                  ...style,
                }}
              >
                <img 
                    src={`/assets/images/partner-logos/${logo}`}

                />
                </Box>
            );
          })}
        </>
      );
  
  }

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
        Past Partners
      </Typography>


      
      {/* Carousel Container */}
      <Box sx={{ width: '500px', height:'200px', flexGrow: 1, margin: 'auto', display: 'flex', backgroundColor:'red',  overflow: 'hidden' }}>
        {slideRenderer()}
      </Box>
    </Container>
  );
}