import { useState } from 'react';
import { styled } from 'styled-components';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

function ThemeButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button>
        {isActive ? (
          <NightlightOutlinedIcon
            onClick={() => setIsActive(!isActive)}
            style={{
              color: '#fff',
              
            }}
          />
        ) : (
          <WbSunnyOutlinedIcon
            onClick={() => setIsActive(!isActive)}
            style={{ color: '#fff', translate: `transform .5s`,
              transform: `rotate(${isActive ? -45 : -100}deg)` }}
          />
        )}
      </button>
      <button></button>
    </>
  );
}

export default ThemeButton;
