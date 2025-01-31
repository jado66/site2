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
import { usePathname, useRouter } from 'next/navigation';

// ----------------------------------------------------------------------
const mainNav = () => {
  return [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Demos',
      children: [
        { title: 'Service Demos', path: '/services' },
        { title: 'Sample Website', path: '/examples/travel' },
      ],
    },

    { title: 'Contact', path: '/contact' },
    // {...includeInEnv({
    //   prod: {},
    //   dev:  {
    //     title: 'Blog',
    //     path: '/blog',
    //   }
    // })},
  ];
};
const travelNav = [
  {
    title: 'Home',
    path: '/examples/travel/',
  },
  {
    title: 'Tours',
    path: '/examples/travel/',
  },
  {
    title: 'Blog',
    path: '/examples/travel/',
  },
  {
    title: 'Bookings',
    path: '/examples/travel/',
  },
  {
    title: 'About Us',
    path: '/examples/travel/',
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
    // if (openChatbot) {
    //   openChatbot();
    // }
    router.push('/contact');
  };

  const handleHideChatbot = () => {
    if (hideChatbot) {
      hideChatbot();
    }
  };

  const router = useRouter();
  const pathname = usePathname();

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
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            textTransform: 'uppercase',
            mt: '4px',
          }}
          fontWeight={'bold'}
        >
          {type === 'main' && (
            <>
              {!mdUp ? (
                <BlurContainer>
                  <Logo stacked size={35} sx={{ mr: 1, mt: 0.4 }} />
                </BlurContainer>
              ) : (
                <BlurContainer>
                  <Logo stacked size={50} sx={{ mr: 1, mt: 0.4 }} />
                </BlurContainer>
              )}
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

        {mdUp && pathname.toLowerCase() !== '/contact/' && (
          <>
            {showChatbot ? (
              <Button color="inherit" variant="contained" onClick={handleHideChatbot}>
                Close Chat
              </Button>
            ) : (
              <Button
                sx={{
                  color: '#white',
                  textTransform: 'none',
                  // backgroundColor:'black',
                  // '&:hover':{
                  //   backgroundColor:'#333333',
                  // }
                }}
                variant="outlined"
                onClick={handleOpenChatbot}
              >
                {type === 'main' && 'Request Quote'}
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
    <AppBar sx={{ maxWidth: 'auto' }}>
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
          maxWidth="xl"
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

const BlurContainer = ({ children, sx }) => (
  <Box
    style={{
      position: 'relative',
      display: 'inline-block',
    }}
  >
    <Box
      style={{
        position: 'absolute',
        top: -2.5,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        filter: 'blur(15px)',
        background: 'rgba(0, 0, 0, .75)',
        borderRadius: '15%',
        width: '100%',
        height: '100%',
        opacity: 1,
      }}
      sx={sx}
    />
    {children}
  </Box>
);
