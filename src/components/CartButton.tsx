import { Badge, IconButton, IconButtonProps } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

type CartButtonProps = IconButtonProps & {
  count: number;
};

function CartButton({ count }: CartButtonProps) {
  const StyledIconButton = styled(IconButton)``;

  const StyledBadge = styled(Badge)`
    color: #ffffff;
    
    > span {
      background-color: #ef4444;
    }
  `;

  const StyledShoppingBagOutlinedIcon = styled(ShoppingBagOutlinedIcon)`
    color: #ffffff;
  `;

  return (
    <StyledEngineProvider injectFirst>
      <StyledIconButton>
        <StyledBadge className="cart-count" badgeContent={count}>
          <StyledShoppingBagOutlinedIcon />
        </StyledBadge>
      </StyledIconButton>
    </StyledEngineProvider>
  );
}

export default CartButton;
