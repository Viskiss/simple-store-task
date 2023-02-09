import { useNavigate } from 'react-router-dom';

import type { ProductType } from '../../Main';

import StyledItem from './ItemProduct.styles';

type PropsType = {
  product: ProductType;
};

const ItemProduct: React.FC<PropsType> = ({ product }) => {
  const navigate = useNavigate();

  const getProduct = async (id: number) => {
    try {
      navigate(`select-product/${id}`);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  return (
    <StyledItem onClick={() => getProduct(product.id)}>
      <div className="product__img">
        <img className="product__img-cover" src={product.thumbnail} alt="" />
      </div>
      <div className="product__info">
        <p>{product.title}</p>
      </div>
      <div className="product__price">
        <span>Price: {product.price}</span>
        <span>Rating: {product.rating}</span>
      </div>
    </StyledItem>
  );
};

export default ItemProduct;
