import { Button, ButtonGroup } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';
import { Product } from '../types/Product';
import { addItem, removeItem } from '../store/cart/CartSlice';
import { useAppDispatch } from '../hooks/useRedux';
import { useNavigate } from 'react-router-dom';

interface CartCardProps {
  product: Product;
}

const StyledCartCard = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;

  > figure {
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    background-color: #fff;
    min-width: 224px;
    max-width: 224px;
    width: 224px;
    height: 224px;

    > img {
      object-fit: contain;
      display: block;
      height: 100%;
      width: 100%;
      max-width: 100%;
    }
  }

  > div {
    padding: 2rem;
    gap: 0.5rem;

    > p:nth-of-type(1) {
      color: #a6adbb;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: 600;
    }

    > p:nth-of-type(2) {
      color: #a6adbb;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 1.875rem;
    }
  }
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: rgb(87, 13, 247);
  border-radius: 0.5rem;
  height: 3rem;
  font-size: 0.875rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: none;

  &:hover {
    background-color: rgb(87, 13, 247);
    border: none;
  }
`;

const StyledTextButton = styled(Button)`
  background-color: rgba(166, 173, 187, 0.004);
  border: none;
  color: #a6adbb;
  font-weight: 600;

  &:hover {
    border: none;
  }
`;

function CartCard({ product }: CartCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <StyledEngineProvider injectFirst>
      <StyledCartCard>
        <figure
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          <img src={product.image} />
        </figure>
        <div>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <ButtonGroup>
            <StyledButton
              onClick={() => {
                dispatch(removeItem(product.id));
              }}
            >
              -
            </StyledButton>
            <StyledTextButton>{product.count}</StyledTextButton>
            <StyledButton
              onClick={() => {
                dispatch(addItem(product.id));
              }}
            >
              +
            </StyledButton>
          </ButtonGroup>
        </div>
      </StyledCartCard>
    </StyledEngineProvider>
  );
}

export default CartCard;
