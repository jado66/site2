/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

// ----------------------------------------------------------------------

import PropTypes from 'prop-types';

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Platinum Programming',
  description:
    'Platinum Programming is a premier software development company specializing in professional web and custom application development. Leveraging next-gen technologies such as NextJs and React, our agency provides top-notch front-end development solutions. With a team of JavaScript professionals adept at full-stack programming and JS frameworks, we deliver digital transformation services using cutting-edge technology. Our DevOps practices and Agile methodologies ensure high-quality code standards and efficient project delivery. Choose us for reliable coding solutions with modern web technologies and scalable software.',
  keywords:
    'Platinum Programming, Software Development Company, Professional Web Development, Enterprise Software Solutions, Custom Web Application Development, NextJs Development, React Web Development, Frontend Development Agency, JavaScript Professionals, Full Stack JavaScript, JS Frameworks Experts, Digital Transformation Services, Cutting Edge Technology Solutions, DevOps Practices, Agile Methodologies, High Quality Code Standards, Experienced Developers, Reliable Coding Solutions, Modern Web Technologies, Scalable Software',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeColorPresets: 'preset02', // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
            }}
          >
            <ThemeProvider>
              <ToastContainer theme="dark" />

              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
