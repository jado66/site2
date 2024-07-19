'use client';

import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Chatbot from 'src/components/chat/Chatbot';
import { usePathname } from 'src/routes/hooks';

import Header from './header';
import Footer from './footer';

import { HEADER } from '../config-layout';

// ----------------------------------------------------------------------

const pathsOnDark = ['/career', 'examples/travel'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning', '/marketing'];

export const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('/');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error('useActiveSection must be used within an ActiveSectionProvider');
  }

  return context;
};

export default function MainLayout({ children }) {

  const pathname = usePathname();

  const actionPage = (arr) => arr.some((path) => pathname === path || pathname === `${path}/`);

  const [showChatbot, setShowChatbot] = useState(false);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  const hideChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <ActiveSectionProvider>

      <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
        <Header
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
          {!actionPage(spacingLayout) && <Spacing />}

          {children}
        </Box>

        <Footer />
      </Box>
    </ActiveSectionProvider>

  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

// ----------------------------------------------------------------------

function Spacing() {
  return (
    <Box
      sx={{
        height: { xs: HEADER.H_MOBILE, md: HEADER.H_DESKTOP },
      }}
    />
  );
}
