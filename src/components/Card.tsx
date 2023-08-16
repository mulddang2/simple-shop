import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type CardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const StyledCard = styled.a`
  width: 318px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--rounded-box, 1rem);
  min-height: auto;
  cursor: pointer;

  > figure {
    border-radius: 1rem 1rem 0 0;
    margin: 0;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 316px;
    height: 20rem;
    overflow: hidden;
    > img {
      max-width: 50%;
      max-height: 50%;
    }
  }

  > div {
    padding: 2rem;
    line-height: 1.5rem;
    font-size: 1rem;
    background-color: rgb(55, 65, 81);
    display: flex;
    flex-direction: column;
    column-gap: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    flex: 1 1 auto;
    gap: 0.5rem;
    > p {
      align-items: center;
      color: rgb(166, 173, 187);
      text-align: left;
      font-weight: 600;
    }
    > .card-title {
      margin-bottom: 0.75rem;
      width: 252px;
    }
  }
`;

function Card({ id, title, price, image }: CardProps) {
  const navigate = useNavigate();

  return (
    <StyledCard
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <figure>
        <img src={image} />
      </figure>
      <div>
        <p className="card-title">{title}</p>
        <p>${price}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
