import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { API } from '../utils/api';
import { Product } from '../types/Product';
import Card from '../components/Card';


const AccessoryContainer = styled.div`
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

function Accessory() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await API.get('/products/category/jewelery'));
    })();
  });

  return (
    <AccessoryContainer>
      <div>
        <h2>액세서리</h2>
        <div>
          {products.map((product: Product, index: number) => {
            return <Card key={index} {...product} />
          } )}
        </div>
      </div>
    </AccessoryContainer>
  );
}

export default Accessory;
