'use client';

import PropTypes from 'prop-types';

import MainLayout from 'src/layouts/main';
import EcommerceLayout from 'src/layouts/ecommerce';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <MainLayout>
      <EcommerceLayout>{children}</EcommerceLayout>
    </MainLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
