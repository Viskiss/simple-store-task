import { useEffect, useState } from 'react';

export const useWindowWidth = (innerWidth: number) => {
  const [width, setWidth] = useState(innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return width;
};
