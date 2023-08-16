import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { clearItem, selectCartItems } from '../store/cart/CartSlice';
import CartCard from '../components/CartCard';
import TextButton, { TextButtonTheme } from '../components/TextButton';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { API } from '../utils/api';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CartContainer = styled.div`
  min-height: calc(100vh - 4.5rem - 296px);
  padding-top: 4.5rem;
  background-color: rgb(42, 48, 60);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    max-width: 1360px;
    margin: 0 auto;
    .not-exist {
      color: #a6adbb;
      font-size: 1.5rem;
      line-height: 2rem;
      margin-bottom: 2.5rem;
    }

    > div:nth-of-type(1) {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }

    > div:nth-of-type(2) {
      display: flex;
      align-items: center;
      margin-top: 2.5rem;
      > p {
        display: inline;
        color: #a6adbb;
        font-size: 1.5rem;
        line-height: 2rem;
        margin-right: 1.25rem;
      }
    }
  }
`;

function Cart() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [products, SetProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClear = () => {
    dispatch(clearItem());
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const newProducts: Product[] = [];
      let newTotalPrice: number = 0;

      for (let i = 0; i < cartItems.length; i++) {
        const newProduct: Product = await API.get(
          `/products/${cartItems[i].productId}`
        );

        newProduct.count = cartItems[i].count;
        newProducts.push(newProduct);
        newTotalPrice += newProduct.price * newProduct.count;
      }

      SetProducts(newProducts);
      setTotalPrice(newTotalPrice);
    })();
  }, [cartItems]);

  return (
    <CartContainer>
      <div>
        <div>
          {products.length > 0 ? (
            products.map((product: Product, index: number) => {
              return <CartCard key={index} product={product} />;
            })
          ) : (
            <div>
              <p className="not-exist">장바구니에 물품이 없습니다.</p>
              <TextButton
                text="담으러 가기"
                theme={TextButtonTheme.DEFAULT}
                onClick={() => {
                  navigate('/');
                }}
              />
            </div>
          )}
        </div>
        <div>
          <p>총 : ${totalPrice}</p>
          <TextButton
            text="구매하기"
            theme={TextButtonTheme.DEFAULT}
            onClick={() => {
              if (products.length > 0) {
                handleClickOpen();
              } else {
                toast.error('구매할 물품이 없습니다 😵');
              }
            }}
          />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'정말로 구매하시겠습니까?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            장바구니의 모든 상품들이 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <TextButton
            text="네"
            theme={TextButtonTheme.DEFAULT}
            onClick={handleClear}
          />
          <TextButton
            text="아니오"
            theme={TextButtonTheme.OUTLINED}
            onClick={handleClose}
          />
        </DialogActions>
      </Dialog>
    </CartContainer>
  );
}

export default Cart;
