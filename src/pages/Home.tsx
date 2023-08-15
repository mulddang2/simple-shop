import { styled } from 'styled-components';
import MainSlider from '../components/MainSlider';
import Section from '../components/Section';

const HomeContainer = styled.div`
  /* background-color: #fff; */
  display: flex;
  background-color: rgb(42, 48, 60);
  flex-direction: column;
  align-items: center;
  /* > section:first-of-type {
    margin-top: 2.5rem;
  } */
  > section:last-of-type {
    margin-bottom: 5rem;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <MainSlider />
      <Section title="패션" url="/products/category/men's clothing?limit=4" />
      <Section title="액세서리" url="/products/category/jewelery?limit=4" />
      <Section title="디지털" url="/products/category/electronics?limit=4" />
    </HomeContainer>
  );
}

export default Home;
