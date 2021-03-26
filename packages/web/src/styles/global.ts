import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #4d426d;
    --purple-light: #5c4f82;
    --orange: #efa985;
    --cyan: #3cc6b7;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: var(--purple);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
  }

   h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const AppContainer = styled.div`
  flex: 1;
`;
