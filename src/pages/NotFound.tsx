import { styled } from 'styled-components';
import TextButton, { TextButtonTheme } from '../components/TextButton';
import { useNavigate } from 'react-router-dom';

const SectionContainer = styled.section`
  min-height: calc(100vh - 4.5rem - 296px);
  padding-top: 4.5rem;
  background-color: rgb(42, 48, 60);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 128px;
  margin-top: 112px;
  line-height: 1;
  color: #a6adbb;
`;

const NotFoundParagraph = styled.p`
  font-size: 30px;
  line-height: 2.25rem;
  margin-bottom: 40px;
  margin-top: 16px;
  color: #a6adbb;
`;

function NotFound() {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <Heading>404</Heading>
      <NotFoundParagraph>페이지를 찾을 수 없습니다.</NotFoundParagraph>
      <TextButton
        text={'메인으로'}
        theme={TextButtonTheme.BIG}
        onClick={() => {
          navigate('/');
        }}
      />
    </SectionContainer>
  );
}

export default NotFound;
