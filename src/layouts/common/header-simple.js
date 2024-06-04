import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import { Button } from '@chatscope/chat-ui-kit-react';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';

import { HEADER } from '../config-layout';
import HeaderShadow from './header-shadow';
import SettingsButton from './settings-button';

// ----------------------------------------------------------------------

export default function HeaderSimple({ openChatbot, hideChatbot, showChatbot }) {
  const theme = useTheme();

  const handleOpenChatbot = () => {
    if (openChatbot) {
      openChatbot();
    }
  };

  const handleHideChatbot = () => {
    if (hideChatbot) {
      hideChatbot();
    }
  };

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offset && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),

            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo imageStyle={{ marginLeft: '9px' }} />

        <Stack
          spacing={1}
          flexGrow={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <SettingsButton />

          {showChatbot ? (
            <Button color="inherit" variant="contained" onClick={handleHideChatbot}>
              Close Chat
            </Button>
          ) : (
            <Button color="inherit" variant="contained" onClick={handleOpenChatbot}>
              Chat With Amy
            </Button>
          )}
        </Stack>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
