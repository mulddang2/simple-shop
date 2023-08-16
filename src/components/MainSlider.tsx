import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { styled } from 'styled-components';
import TextButton, { TextButtonTheme } from '../components/TextButton';
import { useNavigate } from 'react-router-dom';
import ImgShopFashion from '../assets/img_shop_fashion.jpeg';
import ImgShopDigital from '../assets/img_shop_digital.jpeg';
import ImgShopGrocery from '../assets/img_shop_grocery.jpeg';

const CarouselContainer = styled.section`
  .carousel-slider:before {
    content: '';
    display: block;
    left: 0;
    top: 0;
    /* padding-top: 4rem; */
    height: 100%;
    background-color: #0000001a;
    display: flex;
    justify-content: center;
  }
`;

const DescContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 700px;
`;

const StyledDesc = styled.div`
  position: absolute;
  padding: 0 2.5rem;
  max-width: 1280px;
  width: 100%;
  text-align: left;
  bottom: 33.3333%;
  left: auto;
  h2 {
    font-size: 2.25rem;
    color: #fff;
    font-weight: 700;
  }
  p {
    color: #fff;
    margin: 0.5rem 0 1.25rem 0;
    font-size: 1rem;
  }
`;

function MainSlider() {
  const navigate = useNavigate();

  return (
    <CarouselContainer>
      <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        <DescContainer>
          <StyledDesc>
            <h2>물빠진 청바지!</h2>
            <p>이제 막 도착한 패션 청바지를 구경해 보세요.</p>
            <TextButton
              onClick={() => {
                navigate('/fashion');
              }}
              text="바로가기 →"
              theme={TextButtonTheme.DARK}
            />
          </StyledDesc>
          <img src={ImgShopFashion} alt="" />
        </DescContainer>
        <DescContainer>
          <StyledDesc>
            <h2>신속한 업무처리!</h2>
            <p>다양한 디지털 상품을 둘러보세요.</p>
            <TextButton
              onClick={() => {
                navigate('/digital');
              }}
              text="바로가기 →"
              theme={TextButtonTheme.DARK}
            />
          </StyledDesc>
          <img src={ImgShopDigital} alt="" />
        </DescContainer>

        <DescContainer>
          <StyledDesc>
            <h2>신선한 식품!</h2>
            <p>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</p>
            <TextButton
              onClick={() => {
                navigate('/grocery');
              }}
              text="바로가기 →"
              theme={TextButtonTheme.DARK}
            />
          </StyledDesc>
          <img src={ImgShopGrocery} alt="" />
        </DescContainer>
      </Carousel>
    </CarouselContainer>
  );
}

export default MainSlider;
