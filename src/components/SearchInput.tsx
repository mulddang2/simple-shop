import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/styled-engine';
import { TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)`
  height: 3rem;
  width: 249px;
  background-color: rgb(209, 213, 219);
  border: none;
  outline: none;
  border-radius: 4px;
  border-width: 1px;
  border-color: #fff;
  .MuiInput-root {
    height: 100%;
  }
  .MuiInput-input {
    padding: 0 1rem;
    height: 100%;
    font-size: 1rem;
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

export default function SearchInput(props: TextFieldProps) {
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
