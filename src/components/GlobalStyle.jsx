import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'HSGooltokki';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/HSGooltokki.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    font-family: 'HSGooltokki', sans-serif !important;
  }
  body {    
    min-height: 100vh;
    padding-top:150px;
  }
  header {
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:150px;
    z-index: 9999;
  }
  #container {
    width:100%;
    max-width:1460px;
    margin:0 auto;
    padding:100px 30px;
  }

  body.ani #wrap #container .homeWrap:before,
  body.ani #wrap #container .homeWrap:after {
    height:0;
    transition:all .5s ease .55s;
  }
  body.ani #wrap #container .homeWrap button {
    transform: translate(-50%,-50%) rotate(180deg) scale(0);
    transition: all .5s ease;
  }
  body.ani #wrap #container .homeWrap .line {
    width:0;
    left:auto;
    right:0;
    transition: all .45s ease .25s;
  }
`;

export default GlobalStyle;
