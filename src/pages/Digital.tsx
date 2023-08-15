import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Product } from '../types/Product';
import { API } from '../utils/api';
import Card from '../components/Card';

const DigitalContainer = styled.div`
  background-color: rgb(42, 48, 60);

  > div {
    max-width: 1360px;
    margin: 0 auto;
    padding: 1.25rem 0.5rem 2rem 0.5rem;

    > h2 {
      color: #a6adbb;
      font-size: 2.25rem;
      margin-bottom: 2rem;
      font-weight: 700;
      text-align: center;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-bottom: 5rem;
    }
  }
`;

function Digital() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await API.get('/products/category/electronics'));
    })();
  });

  return (
    <DigitalContainer>
      <div>
        <h2>디지털</h2>
        <div>
          {products.map((product: Product, index: number) => {
            return <Card key={index} {...product} />;
          })}
        </div>
      </div>
    </DigitalContainer>
  );
}

export default Digital;
