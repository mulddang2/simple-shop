import Button, { ButtonProps } from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';

type TextButtonProps = ButtonProps & {
  text: string;
};

function TextButton({ text, ...others }: TextButtonProps) {
  const StyledButton = styled(Button)`
    background-color: #570df8;
    border: 0;
    border-radius: 8px;
    color: #ffffff;
    height: 48px;
    width: auto;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: normal;

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: #4406cb;
    }
  `;
  return (
    <StyledEngineProvider injectFirst>
      <StyledButton {...others}>{text}</StyledButton>
    </StyledEngineProvider>
  );
}

export default TextButton;
