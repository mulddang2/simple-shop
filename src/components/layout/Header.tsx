import { styled } from 'styled-components';
import Link from '../Link';
import ThemeButton from '../ThemeButton';
import SearchInput from '../SearchInput';
import CartButton from '../CartButton';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  height: 4.5rem;
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  position: fixed;
  background-color: #191d24;
  padding: var(--navbar-padding, 0.5rem);
  min-height: 4.5rem;
  margin: auto;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
    0 4px 6px -4px var(--tw-shadow-color);

  .header-container {
    display: flex;
    width: 100%;
    max-width: 1360px;
    align-items: center;
    margin: auto;
  }
  h1 {
    margin: 0 8px;
    font-size: 18px;
    color: #fff;
    > a {
      cursor: pointer;
    }
  }
  .header-left {
    display: flex;
    align-items: center;
    flex: 1 1 0%;
    margin-left: 8px;
  }
  .header-right {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    input {
      height: 3rem;
    }
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <StyledHeader>
        <div className="header-container">
          <h1>
            <a
              onClick={() => {
                navigate('/');
              }}
            >
              React Shop
            </a>
          </h1>
          <div className="header-left">
            <Link text="패션" href="/fashion" />
            <Link text="액세서리" href="/accessory" />
            <Link text="디지털" href="/digital" />
          </div>
          <div className="header-right">
            <ThemeButton />
            <SearchInput />
            <CartButton
              onClick={() => {
                navigate('/cart');
              }}
            />
          </div>
        </div>
      </StyledHeader>
    </HeaderContainer>
  );
}

export default Header;
