import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine';
import { TextField, TextFieldProps } from '@mui/material';

export default function SearchInput(props: TextFieldProps) {
  const StyledTextField = styled(TextField)`
    height: 48px;
    width: 249px;
    background-color: rgb(209, 213, 219);
    border: none;
    outline: none;
    border-radius: 4px;
    .MuiInput-root {
      height: 100%;
    }
    .MuiInput-input {
      margin: 0 16px;
      height: 100%;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: rgb(31, 41, 55);
      font-family: 'Noto Sans KR', sans-serif;

      &::placeholder {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
      }
    }
  `;

  return (
    <StyledEngineProvider injectFirst>
      <StyledTextField
        {...props}
        variant="standard"
        placeholder="검색"
        InputProps={{
          disableUnderline: true,
        }}
      />
    </StyledEngineProvider>
  );
}
