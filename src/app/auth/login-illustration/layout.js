'use client';

import PropTypes from 'prop-types';

import AuthIllustrationLayout from 'src/layouts/auth/illustration';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <AuthIllustrationLayout>{children}</AuthIllustrationLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
