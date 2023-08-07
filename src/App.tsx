import './App.css';
import Link from './components/Link';
import SearchInput from './components/SearchInput';
import TextButton from './components/TextButton';
import { styled } from 'styled-components';

function App() {
  return (
    <>
      <StyledDiv>
        <TextButton text="구매하기" />
      </StyledDiv>
      <StyledDiv>
        <SearchInput />
      </StyledDiv>
      <StyledDiv>
        <Link />
      </StyledDiv>
    </>
  );
}

export default App;

const StyledDiv = styled.div`
  margin-top: 30px;
`;
