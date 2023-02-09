import { useEffect, useState } from 'react';

export const useHeigthWidth = () => {
  const [width, setWidth] = useState<number>();
  const [heigth, setHeigth] = useState<number>();

  useEffect(() => {
    document.addEventListener('click', (e) => {
      const eventItem = e.target;

      if (eventItem instanceof Element) {
        setWidth(eventItem.clientWidth);
        setHeigth(eventItem.clientHeight);
      }
    });
  }, []);

  return { width, heigth };
};
