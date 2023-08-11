import { useState } from 'react';
import { styled } from 'styled-components';
import { IconButton } from '@mui/material';
import { StyledEngineProvider } from '@mui/styled-engine';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

function ThemeButton() {
  const [isActive, setIsActive] = useState(false);

  const StyledIconButton = styled(IconButton)``;



  const StyledWbSunnyOutlinedIcon = styled(WbSunnyOutlinedIcon)`
    color: #ffffff;
    transition: all 0.3s ease-out;
    transform: rotate(0deg);
    ${isActive ? 'transform: rotate(45deg)' : ''};
  `;

  const StyledNightlightOutlinedIcon = styled(NightlightOutlinedIcon)`
    color: #ffffff;
    transform: rotate(0deg);
    ${isActive ? 'transform: rotate(-45deg)' : ''};
  `;

  return (
    <StyledEngineProvider injectFirst>
      <StyledIconButton 
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {/* {isActive ? (
          <StyledWbSunnyOutlinedIcon />
        ) : ( */}
        <StyledNightlightOutlinedIcon />
        {/* )} */}
      </StyledIconButton>
    </StyledEngineProvider>
  );
}

export default ThemeButton;

// import { useState } from 'react';
// import { styled } from 'styled-components';
// import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
// import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

// function ThemeButton() {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <>
//       <button>
//         {isActive ? (
//           <NightlightOutlinedIcon
//             onClick={() => setIsActive(!isActive)}
//             style={{
//               color: '#fff',
//               transition: `all 3s  ease-in`,
//               transform: `rotate(${isActive ? -45 : 0}deg)`,
//             }}
//           />
//         ) : (
//           <WbSunnyOutlinedIcon
//             onClick={() => setIsActive(!isActive)}
//             style={{
//               color: '#fff',
//               transition: `all 3s  ease-in`,
//               transform: `rotate(${isActive ? 45 : 0}deg)`,
//             }}
//           />
//         )}
//       </button>
//       <button></button>
//     </>
//   );
// }

// export default ThemeButton;
