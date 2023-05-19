import ResetStyles from "./styles/reset.styles.js";
import GlobalStyles from "./styles/global.styles.js";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./routes.js";
import styled from "styled-components";
import UserProvider from "./context/user.context.js";

function App() {
  return (
    <UserProvider>
      <ResetStyles />
      <GlobalStyles />
      <AppContainerStyled>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </AppContainerStyled>
    </UserProvider>
  );
}

const AppContainerStyled = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default App;
