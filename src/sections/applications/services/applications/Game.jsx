'use client';
import { Box, Card, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Loading from 'src/app/loading';
import { useResponsive } from 'src/hooks/use-responsive';

const maxWidth = 500;
const maxHeight = 620;
const margin = 8;

const cardStyleBase = {
  margin: `${margin}px`,
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth:`${maxWidth+margin*2}px`
};

const GalagaGame = dynamic(() => import('src/components/game/Galaga.jsx'), { ssr: false });

export const GameDemo = () => {
    const [width, setWidth] = useState(maxWidth);
    const [height, setHeight] = useState(maxHeight);

    const [isOnMobile, setOnMobile] = useState(false)

    const mdUp = useResponsive('up', 'sm');

    useEffect(() => {
        if (!mdUp){
            setOnMobile(true)
        }
    }, [mdUp]);


    useEffect(() => {
        const updateDimensions = () => {
            const availableWidth = window.innerWidth - (2 * margin);
            const availableHeight = window.innerHeight - (2 * margin);
            setWidth(availableWidth > maxWidth ? maxWidth : availableWidth);
            setHeight(availableHeight > maxHeight ? maxHeight : availableHeight);
        };

        // Initial update
        updateDimensions();

        // Update dimensions on window resize
        window.addEventListener('resize', updateDimensions);
        
        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    
    const cardStyle = {
        ...cardStyleBase,
        width: `${width}px`,
        height: `${height}px`
    };

    if (mdUp === null){
        return <Loading/>
    }
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h3' textAlign='center' gutterBottom>
                Platinum Programming Galaga
            </Typography>

            {
                mdUp  ? (
                    <Card style={cardStyle} id = 'gamewrapper'>
                        <GalagaGame showButtons = {isOnMobile}/>
                    </Card>
                ):
                (
                <Card style={cardStyle}>
                    <Typography>
                        Please rotate your device
                    </Typography>
                </Card>
                )
            }
            
        </Box>
    );
}
