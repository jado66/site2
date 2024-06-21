import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { IconButton, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import { NavBasicDesktop } from 'src/components/nav-basic';
import NavMobile from './nav/mobile';
import { HEADER } from '../config-layout';
import HeaderShadow from '../common/header-shadow';
import { RouterLink } from 'src/routes/components';
import Iconify from 'src/components/iconify';
import { travelPageInstructionsToast } from 'src/utils/toasts';
import Logo from 'src/components/logo';
import { includeInEnv } from 'src/components/util/EnvSpecificComponent';
import { envSwitch } from 'src/components/util/EnvComponentSwitch';

// ----------------------------------------------------------------------
const mainNav = () => {

  return(
    [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'About',
        path: '/about',
      },
      envSwitch({ 
        prod: { title: 'Portfolio', path: '/portfolio'}, 
        dev: { 
          title: 'Portfolio', 
          children: [
            { title: 'Our Services', path: '/portfolio' }, 
            { title: 'Example Travel Site', path: '/examples/travel' }] }
        }),
      envSwitch({ 
        prod: { title: 'Example Sites',
          children: [
            { title: 'Travel', path: '/examples/travel' },
            // { title: 'Education', path: '/examples/education' },
          ]}, 
        dev:  {
          title: 'Blog',
          path: '/blog',
        }
      }),
      { title: 'Contact', path: '/contact' },

    ]
    
  )
}
const travelNav = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Tours',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/',
  },
  {
    title: 'Bookings',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/',
  },
];

const educationNav = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/',
  },
  {
    title: 'Careers',
    path: '/',
  },
  {
    title: 'About Us',
    path: '/',
  },
];

const TravelInfoIcon = () => (
  <IconButton onClick={travelPageInstructionsToast} sx={{ ml: 1, color: 'inherit' }}>
    <Iconify icon="fluent:info-16-filled" sx={{ color: 'inherit' }} />
  </IconButton>
);
export default function Header({
  headerOnDark,
  openChatbot,
  hideChatbot,
  showChatbot,
  type = 'main',
}) {
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

  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const navData = type === 'main' ? mainNav() : type === 'travel' ? travelNav : educationNav;

  const renderContent = (
    <>
      {type !== 'main' && (
        <Box sx={{ mr: 5 }}>
          <Button
            component={RouterLink}
            href="/"
            variant="text"
            sx={{ fontSize: '8pt', color: offset ? 'common.white' : 'common.white' }}
          >
            <Iconify width={16} icon="carbon:chevron-left" sx={{ mr: 1 }} />
            Back
          </Button>
        </Box>
      )}

      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        {/* <Logo /> */}
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
        >
          {type === 'main' && (
            <>
              <Logo single size={18} sx={{ mr: 1, mt: 0.4 }} />
              Platinum Programming
            </>
          )}
          {type === 'travel' && (
            <>
              Avelora Travel
              <TravelInfoIcon />
            </>
          )}
          {type === 'education' && 'AcaduPro'}
        </Typography>
      </Box>

      {mdUp ? (
        // <Stack >
        <NavBasicDesktop
          flexGrow={1}
          alignItems="center"
          sx={{ height: 1 }}
          justifyContent="center"
          slotProps={{
            rootItem: {
              '& .icon': { display: 'none' },
            },
          }}
          data={navData}
        />
      ) : (
        // </Stack>
        <Box sx={{ flexGrow: 1 }} />
      )}

      <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
        {/* <Stack spacing={1} direction="row" alignItems="center">
          <Searchbar />

          <SettingsButton />
        </Stack> */}

        {mdUp && (
          <>
            {showChatbot ? (
              <Button color="inherit" variant="contained" onClick={handleHideChatbot}>
                Close Chat
              </Button>
            ) : (
              <Button
                color={offset ? 'inherit' : 'primary'}
                variant="contained"
                onClick={handleOpenChatbot}
              >
                {type === 'main' && 'Complimentary Consultation'}
                {type === 'travel' && 'Get Live Assistance'}
                {type === 'education' && 'Open Chat'}
              </Button>
            )}
          </>
        )}
      </Stack>

      {!mdUp && (
        <NavMobile
          hideChatbot={handleHideChatbot}
          showChatbot={showChatbot}
          openChatbot={handleOpenChatbot}
          data={navData}
        />
      )}
    </>
  );

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderContent}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
