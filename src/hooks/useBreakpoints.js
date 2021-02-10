import { useState, useEffect } from 'react';

import screenSizes from 'Constants/screenSizes';
import useWindowSize from 'hooks/useWindowSize';

const useBreakpoints = () => {
  const { width } = useWindowSize();
  const [windowType, setWindowType] = useState({
    isSm: undefined,
    isMd: undefined,
    isLg: undefined,
  });

  useEffect(() => {
    setWindowType({
      isSm: width < screenSizes.sm,
      isMd: width < screenSizes.md && width >= screenSizes.sm,
      isLg: width >= screenSizes.md,
    });
  }, [width]);

  return windowType;
};

export default useBreakpoints;
