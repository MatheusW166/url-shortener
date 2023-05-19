import Header from "../components/Header.js";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainStyled,
} from "../styled.js";

export default function Login() {
  return (
    <>
      <Header highlited={0} />
      <MainStyled>
        <FormStyled>
          <InputStyled placeholder="Email" />
          <InputStyled placeholder="Senha" />
          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
