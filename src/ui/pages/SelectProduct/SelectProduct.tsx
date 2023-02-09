import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { ProductType } from '../Main/Main';

import Loader from '../../components/Loader';

import StyledSelect from './SelectProduct.styles';

const SelectProduct: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<ProductType>();

  useEffect(() => {
    if (!product) {
      (async () => {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${productId}`,
          );
          setProduct(response.data);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      })();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSelect>
      {product ? (
        <>
          <div className="product">
            <div className="product__img">
              <img className="product__img" src={product?.thumbnail} alt="" />
            </div>
            <div className="product__info">
              <p>Brand: {product?.brand}</p>
              <p>Product name {product?.title}</p>
              <p>Category {product?.category}</p>
              <p>{product?.description}</p>
              <div>
                <p>Diiscount %: {product?.discountPercentage}</p>
                <p>Price: {product?.price}</p>
                <p>Rating: {product?.rating}</p>
              </div>
            </div>
          </div>
          <div className="product__img-box">
            {product?.images.map((i) => (
              <img key={i} className="product__img-arr" src={i} alt="" />
            ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </StyledSelect>
  );
};

export default SelectProduct;
