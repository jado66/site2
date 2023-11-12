'use client';

import PropTypes from 'prop-types';

import AuthBackgroundLayout from 'src/layouts/auth/background';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <AuthBackgroundLayout>{children}</AuthBackgroundLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
