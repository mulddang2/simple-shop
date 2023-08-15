import { styled } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { clearItem, selectCartItems } from '../store/cart/CartSlice';
import CartCard from '../components/CartCard';
import TextButton, { TextButtonTheme } from '../components/TextButton';
import { useEffect, useState } from 'react';
import { Product } from '../types/Product';
import { API } from '../utils/api';

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
          {products.map((product: Product, index: number) => {
            return <CartCard key={index} product={product} />;
          })}
        </div>
        <div>
          <p>총 : ${totalPrice}</p>
          <TextButton
            text="구매하기"
            theme={TextButtonTheme.DEFAULT}
            onClick={() => {
              dispatch(clearItem());
            }}
          />
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;
