import { createGlobalStyle, styled } from "styled-components";

export const defaultTheme = {
  "white-100": "#fff",
  "pink-100": "#fff8f2",
  "pink-300": "#ffebd9",
  "pink-500": "#e66767",
  "black-500": "#4B4B4B",
  "red-500": "#720915",
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
  }

  body {
    background-color: ${defaultTheme["pink-100"]};
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
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
