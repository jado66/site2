'use client';
import { Card, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

const maxWidth = 820;
const maxHeight = 620;
const margin = 0;

const cardStyleBase = {
  margin: `${margin}px`,
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const GalagaGame = dynamic(() => import('src/components/game/Galaga.jsx'), { ssr: false });

export const GameDemo = () => {
    const [width, setWidth] = useState(maxWidth);
    const [height, setHeight] = useState(maxHeight);

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

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h3' textAlign='center' gutterBottom>
                Platinum Programming Galaga
            </Typography>
            <Card style={cardStyle}>
                <GalagaGame />
            </Card>
        </div>
    );
}
