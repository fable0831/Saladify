import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    :root {
        ${reset};
        --font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: var(--font-family);
        line-height: normal;
    }
    html {
        scroll-behavior: smooth;
        height: 100%;
        overflow-x: hidden;
        font-size: 16px;
    }
`;

export default GlobalStyle;
