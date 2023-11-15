import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Header from './header';
import Footer from './footer';
import Chatbot from 'src/components/chat/Chatbot';

import { usePathname } from 'src/routes/hooks';
import { HEADER } from '../config-layout';
import { useState } from 'react';

// ----------------------------------------------------------------------

const pathsOnDark = ['/career', '/travel'];

const spacingLayout = [...pathsOnDark, '/', '/e-learning', '/marketing'];

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const actionPage = (arr) => arr.some((path) => pathname === path || pathname === `${path}/`);

  const [showChatbot, setShowChatbot] = useState(true);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  const hideChatbot = () => {
    setShowChatbot(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header
        headerOnDark={actionPage(pathsOnDark)}
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
