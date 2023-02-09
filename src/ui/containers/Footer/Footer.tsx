import { useEffect, useState } from 'react';

import { useHeigthWidth } from '../../../utils/getHeightWigth';
import { useWindowWidth } from '../../../utils/getWindowWidth';

import StyledFooter from './Footer.styles';

const Footer: React.FC = () => {
  const [mousePos, setMousePos] = useState('');
  const windowWidth = useWindowWidth(window.innerWidth);
  const heigthWidth = useHeigthWidth();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos(`x: ${event.clientX}, y: ${event.clientY}`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <StyledFooter>
      <p>Cursor at: {mousePos}</p>
      <p>Width: {windowWidth}</p>
      <p>
        W/H element: {heigthWidth.width}, {heigthWidth.heigth}
      </p>
    </StyledFooter>
  );
};

export default Footer;
