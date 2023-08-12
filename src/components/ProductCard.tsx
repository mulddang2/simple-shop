import { styled } from 'styled-components';
import { TextButton, TextButtonTheme } from './TextButton';
import { Product } from '../type/Product';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function ProductCard({ image, title, price, description, rating }: Product) {
  const ProductCardContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3.5rem;

    > figure {
      padding: 1rem;
      border-radius: 1rem;
      overflow: hidden;
      background-color: #fff;
      min-width: 320px;
      height: 18rem;

      > img {
        object-fit: contain;
        display: block;
        height: 100%;
        width: 100%;
        max-width: 100%;
        /* vertical-align: middle; */
      }
    }
  `;

  const ContentContainer = styled.div`
    padding: 2rem 3rem;
    color: rgb(166, 173, 187);
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    .flex {
      display: flex;
      align-items: center;
    }
    > h2 {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.25rem;
    }
    > p.description {
      font-size: 1rem;
    }
    > p.price {
      font-size: 1.875rem;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }
    .star-rating {
      font-size: 1rem;
      margin-top: 0.75rem;
      display: flex;
    }
    .rating-count {
      margin-left: 8px;
      font-size: 1rem;
      margin-top: 0.75rem;
    }
    > div.card-action {
      display: flex;
      column-gap: 12px;
    }
  `;

  const NewBadge = styled.span`
    display: inline-flex;
    border: 1px solid rgb(31, 178, 165);
    align-items: center;
    justify-content: center;
    width: fit-content;
    color: #fff;
    font-size: 0.875rem;
    background-color: rgb(31, 178, 165);
    padding: 0 0.563rem;
    height: 1.25rem;
    border-radius: 1.9rem;
    margin-left: 8px;
  `;

  return (
    <StyledEngineProvider injectFirst>
      <ProductCardContainer>
        <figure>
          <img src={image} />
        </figure>
        <ContentContainer>
          <h2>
            {title}
            <NewBadge>NEW</NewBadge>
          </h2>
          <p className="description">{description}</p>
          <div className= "flex">
            <div className="star-rating">
              <Rating
                value={rating.rate}
                readOnly
                icon={
                  <StarIcon
                    style={{ fill: 'rgb(250, 204, 21)'}}
                    fontSize="inherit"
                  />
                }
                emptyIcon={
                  <StarIcon
                    style={{ fill: 'rgb(250, 204, 21)', opacity: 0.55 }}
                    fontSize="inherit"
                  />
                }
              />
              
            </div>
            <div className="rating-count">{rating.rate} / {rating.count} 참여</div>
          </div>
          <p className="price">${price}</p>
          <div className="card-action">
            <TextButton text={'장바구니에 담기'} />
            <TextButton
              text={'장바구니로 이동'}
              theme={TextButtonTheme.OUTLINED}
            />
          </div>
        </ContentContainer>
      </ProductCardContainer>
    </StyledEngineProvider>
  );
}

export default ProductCard;
