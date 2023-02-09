import dayjs from 'dayjs';
import { useState } from 'react';

import StyledHeader from './Header.styles';

const getDate = () => {
  return dayjs().format('DD-MM-YYYY HH:mm:ss');
};

const Header: React.FC = () => {
  const [time, setTime] = useState('');

  setInterval(() => {
    setTime(getDate);
  }, 100);

  return <StyledHeader>{time}</StyledHeader>;
};

export default Header;
