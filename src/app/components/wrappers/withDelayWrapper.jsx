import React, { useEffect, useState } from 'react';

export const DelayWrapper = ({ children, delay }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isReady ? children : null;
};
