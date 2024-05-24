import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';
import Tooltip from '@mui/material/Tooltip';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { NavBasicMobile } from 'src/components/nav-basic';
import { NAV } from '../../../config-layout';
import { SwipeableDrawer } from '@mui/material';

// ----------------------------------------------------------------------

export default function NavMobile({ data, openChatbot, hideChatbot, showChatbot }) {
  const pathname = usePathname();

  const handleToggleChatbot = () => {
    if (!showChatbot) {
      openChatbot();
      return;
    }

    hideChatbot();
  };

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton sx={{ ml: 1, color: 'inherit' }} onClick={handleToggleChatbot}>
        <Iconify icon="quill:chat" />
      </IconButton>

      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <SwipeableDrawer
        anchor="top"
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            textAlign: 'center',
            // width: NAV.W_VERTICAL,
          },
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={mobileOpen.onFalse}
          sx={{
            position: 'absolute',
            right: 0,
            marginTop: '20px',
            marginRight: '24px',
            top: 0,
          }}
        >
          <Iconify icon="carbon:close-filled" />
        </IconButton>

        {/* <Scrollbar> */}
        <Logo sx={{ mx: 2.5, my: 3 }} single />

        <NavBasicMobile data={data} />
        {/* </Scrollbar> */}
      </SwipeableDrawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
