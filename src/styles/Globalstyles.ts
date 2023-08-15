import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// base setting
* {
  margin: 0;
  outline: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

html {
  min-width: 320px;
  -webkit-tap-highlight-color: transparent

}
:root, [data-theme] {
  background-color: hsla(var(--b1) / var(--tw-bg--opacity, 1))
}
body {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

}

/* Remove excess padding and border in Firefox 4+ */
&::-moz-focus-inner {
    border: 0;
    padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
li,
ol {
  list-style: none;
}

// variable
*,:before,:after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / .5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-bg-opacity: 1;
}

// theme
@media (prefers-color-scheme: dark) {
  :root {
      color-scheme:dark;
      --pf: 262.35 80.315% 40.157%;
      --sf: 315.75 70.196% 40%;
      --af: 174.69 70.335% 32.784%;
      --in: 198 93% 60%;
      --su: 158 64% 52%;
      --wa: 43 96% 56%;
      --er: 0 91% 71%;
      --inc: 198 100% 12%;
      --suc: 158 100% 10%;
      --wac: 43 100% 11%;
      --erc: 0 100% 14%;
      --rounded-box: 1rem;
      --rounded-btn: .5rem;
      --rounded-badge: 1.9rem;
      --animation-btn: .25s;
      --animation-input: .2s;
      --btn-text-case: uppercase;
      --btn-focus-scale: .95;
      --border-btn: 1px;
      --tab-border: 1px;
      --tab-radius: .5rem;
      --p: 262.35 80.315% 50.196%;
      --pc: 0 0% 100%;
      --s: 315.75 70.196% 50%;
      --sc: 0 0% 100%;
      --a: 174.69 70.335% 40.98%;
      --ac: 0 0% 100%;
      --n: 218.18 18.033% 11.961%;
      --nf: 222.86 17.073% 8.0392%;
      --nc: 220 13.376% 69.216%;
      --b1: 220 17.647% 20%;
      --b2: 220 17.241% 17.059%;
      --b3: 218.57 17.949% 15.294%;
      --bc: 220 13.376% 69.216%
  }
}

[data-theme=light] {
  color-scheme: light;
  --pf: 258.89 94.378% 40.941%;
  --sf: 314 100% 37.647%;
  --af: 174 60% 40.784%;
  --nf: 219 14.085% 22.275%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 258.89 94.378% 51.176%;
  --pc: 0 0% 100%;
  --s: 314 100% 47.059%;
  --sc: 0 0% 100%;
  --a: 174 60% 50.98%;
  --ac: 174.71 43.59% 15.294%;
  --n: 219 14.085% 27.843%;
  --nc: 0 0% 100%;
  --b1: 0 0% 100%;
  --b2: 0 0% 94.902%;
  --b3: 180 1.9608% 90%;
  --bc: 215 27.907% 16.863%
}

[data-theme=dark] {
  color-scheme: dark;
  --pf: 262.35 80.315% 40.157%;
  --sf: 315.75 70.196% 40%;
  --af: 174.69 70.335% 32.784%;
  --in: 198 93% 60%;
  --su: 158 64% 52%;
  --wa: 43 96% 56%;
  --er: 0 91% 71%;
  --inc: 198 100% 12%;
  --suc: 158 100% 10%;
  --wac: 43 100% 11%;
  --erc: 0 100% 14%;
  --rounded-box: 1rem;
  --rounded-btn: .5rem;
  --rounded-badge: 1.9rem;
  --animation-btn: .25s;
  --animation-input: .2s;
  --btn-text-case: uppercase;
  --btn-focus-scale: .95;
  --border-btn: 1px;
  --tab-border: 1px;
  --tab-radius: .5rem;
  --p: 262.35 80.315% 50.196%;
  --pc: 0 0% 100%;
  --s: 315.75 70.196% 50%;
  --sc: 0 0% 100%;
  --a: 174.69 70.335% 40.98%;
  --ac: 0 0% 100%;
  --n: 218.18 18.033% 11.961%;
  --nf: 222.86 17.073% 8.0392%;
  --nc: 220 13.376% 69.216%;
  --b1: 220 17.647% 20%;
  --b2: 220 17.241% 17.059%;
  --b3: 218.57 17.949% 15.294%;
  --bc: 220 13.376% 69.216%
}


`;

export default GlobalStyle;
