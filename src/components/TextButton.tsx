import Button, { ButtonProps } from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';

enum TextButtonTheme {
  CONTAINED,
  OUTLINED,
}

type TextButtonProps = ButtonProps & {
  text: string;
  theme?: TextButtonTheme;
};

function TextButton({ text, theme, ...others }: TextButtonProps) {
  if (theme === undefined) {
    theme = TextButtonTheme.CONTAINED;
  }

  const StyledButton = styled(Button)`
    background-color: ${theme === TextButtonTheme.CONTAINED
      ? '#570df8'
      : 'transparent'};
    border: 1px solid;
    border-color: ${theme === TextButtonTheme.CONTAINED
      ? 'transparent'
      : 'rgb(166,173,187)'};
    border-radius: 8px;
    color: ${theme === TextButtonTheme.CONTAINED ? '#ffffff' : '#A6ADBB'};
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

export { TextButton, TextButtonTheme };
