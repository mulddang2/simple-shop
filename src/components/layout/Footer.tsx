import { styled } from 'styled-components';
import { ReactComponent as Visa } from '../../assets/images/visa.svg';
import { ReactComponent as Master } from '../../assets/images/Master.svg';
import { ReactComponent as Amex } from '../../assets/images/Amex.svg';
import { ReactComponent as Paypal } from '../../assets/images/Paypal.svg';
import { ReactComponent as DinersClub } from '../../assets/images/DinersClub.svg';
import { ReactComponent as Discover } from '../../assets/images/Discover.svg';
import { ReactComponent as Facebook } from '../../assets/images/Facebook.svg';
import { ReactComponent as Instagram } from '../../assets/images/Instagram.svg';
import { ReactComponent as GitHub } from '../../assets/images/GitHub.svg';

import { Tooltip } from '@mui/material';

const StyledFooter = styled.footer`
  background-color: rgb(36, 41, 51);
  color: rgb(166, 173, 187);
  text-align: center;
  place-items: center;
  padding: 2.5rem;
  display: grid;
  width: 100%;
  grid-auto-flow: row dense;
  row-gap: 2.5rem;
  font-size: 0.875rem;
  column-gap: 1rem;
  line-height: 1.25rem;

  > * {
    gap: 0.5rem;
  }
  ul {
    display: flex;
    justify-content: center;
  }
  .sns {
    display: grid;
    column-gap: 16px;
    grid-auto-flow: column;
  }
`;

const SnsStyle = {
  fill: 'rgb(166, 173, 187)',
};

function Footer() {
  return (
    <StyledFooter>
      <div>
        <a href="http://zero-base.co.kr/" target="_blank">
          제로베이스
        </a>
      </div>
      <ul>
        <li>
          <Visa />
        </li>
        <li>
          <Master />
        </li>
        <li>
          <Amex />
        </li>
        <li>
          <Paypal />
        </li>
        <li>
          <DinersClub />
        </li>
        <li>
          <Discover />
        </li>
      </ul>
      <div className="sns">
        <Tooltip title="facebook" placement="top">
          <a href="https://www.facebook.com/0base" target="_blank">
            <Facebook {...SnsStyle} />
          </a>
        </Tooltip>
        <Tooltip title="instagram" placement="top">
          <a href="https://www.instagram.com/" target="_blank">
            <Instagram {...SnsStyle} />
          </a>
        </Tooltip>
        <Tooltip title="github" placement="top">
          <a href="https://github.com/mulddang2" target="_blank">
            <GitHub {...SnsStyle} />
          </a>
        </Tooltip>
      </div>
      <div>
        <p>Copyright © 2022 Zero Base</p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
