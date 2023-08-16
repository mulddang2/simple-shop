import { useState } from 'react';
import { styled } from 'styled-components';
import { IconButton } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

const StyledIconButton = styled(IconButton)``;

const StyledWbSunnyOutlinedIcon = styled(WbSunnyOutlinedIcon)`
  margin-right: 1rem;
  color: #ffffff;
  transition: all 0.3s ease-out;
  transform: rotate(0deg);
`;

const StyledNightlightOutlinedIcon = styled(NightlightOutlinedIcon)`
  color: #ffffff;
  transform: rotate(0deg);
`;

function ThemeButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledEngineProvider injectFirst>
      <StyledIconButton
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {isActive ? (
          <StyledNightlightOutlinedIcon />
        ) : (
          <StyledWbSunnyOutlinedIcon />
        )}
      </StyledIconButton>
    </StyledEngineProvider>
  );
}

export default ThemeButton;
