import Header from "../components/Header.js";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainStyled,
} from "../styled.js";

export default function Register() {
  return (
    <>
      <Header highlited={1} />
      <MainStyled>
        <FormStyled>
          <InputStyled placeholder="Nome" />
          <InputStyled placeholder="Email" />
          <InputStyled placeholder="Senha" />
          <InputStyled placeholder="Confirmar senha" />
          <ButtonStyled type="submit">Criar conta</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
