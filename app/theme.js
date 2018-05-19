import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize'

const theme = {
  color: {
    pink: '#c75294',
    blue: '#182657',
    dark: '#121F40',

    yellow: '#D59B2D',
    brown: '#8D541E',
    white: '#EEE',
    contrast: 'rgba(255, 255, 255, 0.05)',
    shimmer: 'rgba(213, 155, 45, 0.3)',

  },
  font: {
    heading: "'Capsuula', Helvetica, sans-serif",
    content: "'Comfortaa', cursive",
  }
};

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${styledNormalize}

  html {
    font-size: 16px;
    height: 100%;
  }
  body, #root {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: ${theme.color.blue};
    color: ${theme.color.white};
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 1rem 0;
  }
`;
/* eslint-enable no-unused-expressions */

export default theme;
