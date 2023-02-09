import axios from 'axios';
import { useEffect, useState } from 'react';

import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import ItemProduct from './components/ItemProduct';

import StyledStore from './Main.styles';

export type ProductType = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
};

type ProductResType = {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number;
};

const Main: React.FC = () => {
  const [page, setPage] = useState(1);

  const [products, setProduct] = useState<ProductResType>();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products', {
          params: { limit: 10, skip: page > 1 ? page * 10 : 0 },
        });
        // eslint-disable-next-line no-console
        console.log(response.data);
        setProduct(response.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  }, [page]);

  return (
    <StyledStore>
      {products ? (
        <>
          <div className="products-box">
            {products?.products.map((item) => (
              <ItemProduct key={item.id} product={item} />
            ))}
          </div>
          <div className="pagination-box">
            <Pagination
              page={page}
              setPage={setPage}
              total={products?.total || 0}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </StyledStore>
  );
};

export default Main;
