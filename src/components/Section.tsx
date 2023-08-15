import { styled } from 'styled-components';
import Card from './Card';
import { API } from '../utils/api';
import { Product } from '../types/Product';
import { useEffect, useState } from 'react';

export type SectionProps = {
  title: string;
  url: string;
};

// TODO: margin-left, maring-right 변경하기
const StyledSection = styled.section`
  width: 100%;
  /* margin-left: 271.5px;
margin-right: 271.5px; */
  max-width: 1360px;
  /* margin-top: 2.5rem; */
  padding: 48px 8px 32px;

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
  }
`;

function Section({ title, url }: SectionProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      setProducts(await API.get(url));
    })();
  });

  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>
        {products.map((product: Product, index: number) => {
          return <Card key={index} {...product} />;
        })}
      </div>
    </StyledSection>
  );
}

export default Section;
