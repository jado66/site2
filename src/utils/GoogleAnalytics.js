// components/GoogleAnalytics.js
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const TRACKING_ID = 'AW-16845702778';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (window.gtag) {
      // Send page view when the path changes
      window.gtag('config', TRACKING_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Global Site Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}

// Optional: Conversion tracking component
export function useGoogleAdsConversion() {
  const triggerConversion = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16845702778/_skeCPLg-JkaEPqM1OA-',
      });
    }
  };

  return { triggerConversion };
}
