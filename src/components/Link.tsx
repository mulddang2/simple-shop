import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';

type LinkProps = MuiLinkProps & {
  text: string;
};

function Link({ text, ...others }: LinkProps) {
  const StyledLink = styled(MuiLink)`
    display: inline-block;
    color: #374151;
    font-size: 14px;
    padding: 0 12px;
    height: 32px;
    line-height: 32px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      background-color: #1f293733;
      border-radius: var(--rounded-btn, 0.5rem);
    }
  `;

  return (
    <StyledEngineProvider injectFirst>
      <StyledLink {...others}>{text}</StyledLink>
    </StyledEngineProvider>
  );
}

export default Link;
