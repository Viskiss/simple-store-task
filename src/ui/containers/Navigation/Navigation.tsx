import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import Loader from '../../components/Loader';

import MainLayoutStyled from '../MainLayout.styles';

const MainPage = lazy(() => import('../../pages/Main'));
const SelectProduct = lazy(() => import('../../pages/SelectProduct'));

const Navigation: React.FC = () => {
  return (
    <MainLayoutStyled>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/select-product/:productId"
            element={<SelectProduct />}
          />
        </Routes>
      </Suspense>
    </MainLayoutStyled>
  );
};

export default Navigation;
