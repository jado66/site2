import { useState } from 'react';
import { Box, Button, Typography, Card } from '@mui/material';
import { Icon } from '@iconify/react';

const ChatbotContainer = ({ children, showChatbot, hideChatbot }) => {
  const isDesktop = true; //useMediaQuery('(min-width: 720px)');

  if (isDesktop) {
    return (
      <Box
        id="chatbot-container"
        sx={{
          position: 'fixed',
          display: showChatbot ? 'flex' : 'none',
          top: 0,
          right: 0,
          mt: 7,
          mr: 6,
          justifyContent: 'flex-end',
          zIndex: 8900,
        }}
      >
        <Card
          sx={{
            width: 300,
            height: 450,
            bgcolor: 'white',
            boxShadow: 2,
            border: 1,
            display: 'flex',
            flexDirection: 'column',
            ms: 'auto',
          }}
        >
          {children}
        </Card>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          p: 4,
          bgcolor: 'white',
          zIndex: 9,
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', justifyContent: 'flex-end' }}>{children}</Box>
      </Box>
    );
  }
};

export default ChatbotContainer;
