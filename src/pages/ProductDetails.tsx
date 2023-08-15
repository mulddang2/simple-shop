import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductDetailsContainer = styled.div`
  background-color: rgb(42, 48, 60);
  min-height: calc(100vh - 4.5rem - 296px);
  padding-top: 4.5rem;
`;

function ProductDetails() {
  const { id } = useParams();

  return (
    <ProductDetailsContainer>
      <ProductCard productId={id !== undefined ? +id : null} />
    </ProductDetailsContainer>
  );
}

export default ProductDetails;
