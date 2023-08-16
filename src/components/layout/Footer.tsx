import { styled } from "styled-components";
import visa from "../../assets/visa.svg";
import master from "../../assets/Master.svg";
import amex from "../../assets/Amex.svg";
import paypal from "../../assets/Paypal.svg";
import dinersclub from "../../assets/DinersClub.svg";
import discover from "../../assets/Discover.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Tooltip } from "@mui/material";

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

    > a > svg {
      fill: rgb(166, 173, 187);
    }
  }
`;

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
          <img src={visa} />
        </li>
        <li>
          <img src={master} />
        </li>
        <li>
          <img src={amex} />
        </li>
        <li>
          <img src={paypal} />
        </li>
        <li>
          <img src={dinersclub} />
        </li>
        <li>
          <img src={discover} />
        </li>
      </ul>
      <div className="sns">
        <Tooltip title="facebook" placement="top">
          <a href="https://www.facebook.com/0base" target="_blank">
            <FacebookIcon />
          </a>
        </Tooltip>
        <Tooltip title="instagram" placement="top">
          <a href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </a>
        </Tooltip>
        <Tooltip title="github" placement="top">
          <a href="https://github.com/mulddang2" target="_blank">
            <GitHubIcon />
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
