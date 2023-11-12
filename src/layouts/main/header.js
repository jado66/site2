import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';
import Label from 'src/components/label';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import Searchbar from '../common/searchbar';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';
import SettingsButton from '../common/settings-button';
import { NavBasicDesktop } from 'src/components/nav-basic';
import Iconify from 'src/components/iconify';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function Header({ headerOnDark }) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  const renderContent = (
    <>
      <Box sx={{ lineHeight: 0, position: 'relative' }}>
        {/* <Logo /> */}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          J-Apps AI
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
          data={[
            {
              title: 'Home',
              path: '/',
            },
            { title: 'Get Started', path: '/get-started' },
            {
              title: 'Examples',
              path: '/pages1',
              children: [
                { title: 'Solar', path: '/examples/solar' },
                { title: 'AI Education', path: '/examples/ai-education' },
              ],
            },
            {
              title: 'Applications',
              path: '/applications',
            },
            {
              title: 'About Us',
              path: '/about',
            },
          ]}
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
          <Button
            variant="contained"
            color="inherit"
            href={paths.zoneStore}
            target="_blank"
            rel="noopener"
          >
            Get Started
          </Button>
        )}
      </Stack>

      {!mdUp && (
        <NavMobile
          data={[
            {
              title: 'Home',
              path: '/',
            },
            { title: 'Get Started', path: '/get-started' },
            {
              title: 'Examples',
              path: '/pages1',
              children: [
                { title: 'Solar', path: '/examples/solar' },
                { title: 'AI Education', path: '/examples/ai-education' },
              ],
            },
            {
              title: 'Applications',
              path: '/applications',
            },
            {
              title: 'About Us',
              path: '/about',
            },
          ]}
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
