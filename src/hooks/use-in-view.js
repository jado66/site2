import { useEffect, useState } from 'react';

const useInCenterView = (ref) => {
    const [isInCenterView, setIsInCenterView] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;
  
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowCenter = windowHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
  
        const threshold = 200; // Adjust this value as needed
  
        if (Math.abs(elementCenter - windowCenter) <= threshold) {
          setIsInCenterView(true);
        } else {
          setIsInCenterView(false);
        }
      };
  
      handleScroll(); // Check initially
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [ref]);
  
    return isInCenterView;
  };
  
  export default useInCenterView;