import styled from 'styled-components';

type SideMenuProps = {
  id?: number;
  category: string;
  href?: string;
};

const StyledSideMenu = styled.div`
  width: 20rem;
  padding: 1rem;
  background-color: rgb(42, 48, 60);
  z-index: 10;
  max-height: 100vh;
  height: 100vh;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledLinkList = styled.a`
  display: flex;
  padding: 12px 16px;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  &:hover {
    border-radius: var(--rounded-btn, 0.5rem);
    background-color: rgba(166, 173, 187, 0.1);
    cursor: pointer;
  }
`;

function SideMenu({ category }: SideMenuProps) {
  return (
    <StyledSideMenu>
      <ul>
        <li>
          <StyledLinkList>{category}</StyledLinkList>
          <StyledLinkList>{category}</StyledLinkList>
          <StyledLinkList>{category}</StyledLinkList>
        </li>
      </ul>
    </StyledSideMenu>
  );
}

export default SideMenu;
