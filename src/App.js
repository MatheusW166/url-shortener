import ResetStyles from "./styles/reset.styles.js";
import GlobalStyles from "./styles/global.styles.js";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes.js";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <AppContainerStyled>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </AppContainerStyled>
    </>
  );
}

const AppContainerStyled = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default App;
