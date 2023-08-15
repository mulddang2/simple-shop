import { Badge, IconButton, IconButtonProps } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useAppSelector } from '../hooks/useRedux';
import { getCartItemCount } from '../store/cart/CartSlice';

const StyledIconButton = styled(IconButton)`
  width: 3rem;
`;

const StyledBadge = styled(Badge)`
  color: #ffffff;

  > span {
    background-color: #ef4444;
  }
`;

const StyledShoppingBagOutlinedIcon = styled(ShoppingBagOutlinedIcon)`
  color: #ffffff;
`;

function CartButton(props: IconButtonProps) {
  const cartItems = useAppSelector(getCartItemCount);

  return (
    <StyledEngineProvider injectFirst>
      <StyledIconButton {...props}>
        <StyledBadge className="cart-count" badgeContent={cartItems}>
          <StyledShoppingBagOutlinedIcon />
        </StyledBadge>
      </StyledIconButton>
    </StyledEngineProvider>
  );
}

export default CartButton;
