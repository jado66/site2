import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import { NavBasicMobile } from 'src/components/nav-basic';
import { NAV } from '../../../config-layout';

// ----------------------------------------------------------------------

export default function NavMobile({ data, openChatbot, hideChatbot, showChatbot }) {
  const pathname = usePathname();

  const handleHideChatbot = () => {
    if (hideChatbot) {
      hideChatbot();
    }
  };

  const handleOpenChatbot = () => {
    if (openChatbot) {
      openChatbot();
    }
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
      <IconButton onClick={mobileOpen.onTrue} sx={{ ml: 1, color: 'inherit' }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>
          <Logo sx={{ mx: 2.5, my: 3 }} />

          <NavBasicMobile data={data} />

          <Stack spacing={1.5} sx={{ p: 3 }}>
            {showChatbot ? (
              <Button color="inherit" sx={{ typography: 'subtitle2' }} onClick={handleHideChatbot}>
                Close Chat
              </Button>
            ) : (
              <Button color="inherit" sx={{ typography: 'subtitle2' }} onClick={handleOpenChatbot}>
                Chat With Amy
              </Button>
            )}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
