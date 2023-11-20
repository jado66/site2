import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Chatbot from 'src/components/chat/Chatbot';

import Header from './header';
import Footer from './footer';

import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

export default function TravelLayout({ children }) {
  const [showChatbot, setShowChatbot] = useState(false);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  const hideChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header
        type="travel"
        headerOnDark={true}
        openChatbot={openChatbot}
        hideChatbot={hideChatbot}
        showChatbot={showChatbot}
      />
      <Chatbot showChatbot={showChatbot} hideChatbot={hideChatbot} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

TravelLayout.propTypes = {
  children: PropTypes.node,
};
