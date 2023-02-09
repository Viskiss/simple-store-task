import styled from 'styled-components';

export default styled.div`
  .product {
    display: flex;
    gap: 30px;
    padding-bottom: 40px;
  }

  .product__img-box {
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: scroll;
  }

  .product__img-arr {
    width: calc((100% - (20px * 3)) / 4);
  }
`;
