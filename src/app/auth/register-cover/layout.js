'use client';

import PropTypes from 'prop-types';

import AuthCoverLayout from 'src/layouts/auth/cover';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <AuthCoverLayout
      title={`Manage The Job \n More Effectively`}
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
