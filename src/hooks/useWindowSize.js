import { useState, useEffect } from 'react';

const useWindowSize = () => {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    document.addEventListener('resize', handleResize);
    return () => document.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
