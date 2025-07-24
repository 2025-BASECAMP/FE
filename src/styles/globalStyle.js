import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  /* === Pretendard Font === */
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-500';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  :root {
    /* color */
    --color-black: #000000;
    --color-gray-700: #262626;
    --color-gray-600: #424242;
    --color-gray-500: #696969;
    --color-gray-400: #a5a5a5;
    --color-gray-300: #d9d9d9;
    --color-gray-200: #eaeaea;
    --color-gray-100: #f6f6f6;
    --color-white: #ffffff;

    --color-main-blue: #0059FF;
    --color-kakao-yellow: #FEE500;
    --color-naver-green: #03C75A;

    --size-max-width: 420px;
    --size-min-width: 393px;
    --size-navbar: 9vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    min-width: var(--size-min-width);
    height: 100dvh;
    background-color: #ffffff;
    font-family: 'Pretendard-Regular', sans-serif;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: var(--size-max-width);
    height: 100dvh;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    background-color: var(--color-white);
  }

  #portal {
    height: 100dvh;
    position: absolute;
    z-index: 1;
    overflow: hidden;
  }

  h1, h2, span, div {
    user-select: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    border: none;
    background: none;
  }

  .layoutContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100dvh;
  }

  .mainContent {
    flex: 1;
    width: 100%;
    overflow: hidden;
  }

  .content {
    width: 100%;
    height: calc(100dvh - var(--size-navbar));
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--color-white);
  }

`;

export default GlobalStyle;
