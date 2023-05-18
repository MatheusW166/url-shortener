import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    #root {
        min-height: 100vh;
        background: #fafafa;
        color: #2e2e2e;
        font-family: "Lexend Deca", sans-serif;
    }
`;

export default GlobalStyles;
