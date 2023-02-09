import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - (20px * 3)) / 4);
  height: 20%;

  .product__img {
    display: flex;
    height: calc((305 / 100) * 15%);
    background-color: #35373724;
    overflow: hidden;
  }

  .product__img-cover {
    cursor: pointer;
    width: 100%;
    height: auto;
    object-fit: contain;
    inset: 0;
    z-index: 123;
  }

  .product__price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
