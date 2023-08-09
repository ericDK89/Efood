import { createGlobalStyle, styled } from "styled-components";

export const defaultTheme = {
  "white-100": "#fff",
  "pink-100": "#fff8f2",
  "pink-300": "#ffebd9",
  "pink-500": "#e66767",
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${defaultTheme["pink-100"]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;
