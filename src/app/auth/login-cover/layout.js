'use client';

import PropTypes from 'prop-types';

import AuthCoverLayout from 'src/layouts/auth/cover';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <AuthCoverLayout
      title="Hi, Welcome Back"
      images={[
        '/assets/images/travel/travel_post_01.jpg',
        '/assets/images/travel/travel_post_03.jpg',
      ]}
    >
      {children}
    </AuthCoverLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
