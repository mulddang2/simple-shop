import Button, { ButtonProps } from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/styled-engine';
import styled from 'styled-components';

export enum TextButtonTheme {
  DEFAULT,
  OUTLINED,
  DARK,
  BIG,
}

const StyledDefaultButton = styled(Button)`
  background-color: #661ae6;
  border: 1px solid;
  border-color: transparent;
  border-radius: 8px;
  color: #fff;
  height: 3rem;
  width: auto;
  padding: 0px 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: normal;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #5514b9;
    color: #fff;
    border-color: #5514b9;
  }
`;

const StyledOutLineButton = styled(Button)`
  background-color: transparent;
  border: 1px solid;
  border-color: #A6ADBB;
  border-radius: 8px;
  color: #A6ADBB;
  height: 3rem;
  width: auto;
  padding: 0px 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: normal;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #A6ADBB;
    color: #2A303C;
    border-color: #A6ADBB;
  }
`;
const StyledDarkButton = styled(Button)`
  background-color: #191d24;
  border: 1px solid;
  border-color: #191d24;
  border-radius: 8px;
  color: #a6adbb;
  height: 3rem;
  width: auto;
  padding: 0px 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 0.875rem;
  letter-spacing: normal;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #111318;
    color: #a6adbb;
    border-color: #111318;
  }
`;

const StyledBigButton = styled(Button)`
  background-color: #661ae6;
  border: 1px solid;
  border-color: #661AE6;
  border-radius: 8px;
  color: #fff;
  height: 4rem;
  width: 10rem;
  padding: 0px 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: normal;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #5514b9;
    color: #fff;
    border-color: #5514b9;
  }
`;


export type TextButtonProps = ButtonProps & {
  text: string;
  theme: TextButtonTheme;
};

function TextButton({ text, theme, ...others }: TextButtonProps) {
  let button;

  switch (theme) {
    case TextButtonTheme.DEFAULT:
      button = <StyledDefaultButton {...others}>{text}</StyledDefaultButton>;
      break;

    case TextButtonTheme.OUTLINED:
      button = <StyledOutLineButton {...others}>{text}</StyledOutLineButton>;
      break;

    case TextButtonTheme.DARK:
      button = <StyledDarkButton {...others}>{text}</StyledDarkButton>;
      break;
    case TextButtonTheme.BIG:
      button = <StyledBigButton {...others}>{text}</StyledBigButton>;
      break;
  }

  return <StyledEngineProvider injectFirst>{button}</StyledEngineProvider>;
}

export default TextButton;
