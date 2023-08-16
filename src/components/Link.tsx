import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type LinkProps = MuiLinkProps & {
  text: string;
  href: string;
};

const StyledLink = styled(MuiLink)`
  display: inline-block;
  color: #fff;
  font-size: 14px;
  padding: 0 12px;
  height: 32px;
  line-height: 32px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #a6adbb33;
    border-radius: var(--rounded-btn, 0.5rem);
  }
`;

function Link({ text, href, ...others }: LinkProps) {
  const navigate = useNavigate();

  return (
    <StyledEngineProvider injectFirst>
      <StyledLink
        onClick={() => {
          navigate(href);
        }}
        {...others}
      >
        {text}
      </StyledLink>
    </StyledEngineProvider>
  );
}

export default Link;
