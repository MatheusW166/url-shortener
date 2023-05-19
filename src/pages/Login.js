import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import { login } from "../services/user.services.js";
import { saveToken } from "../storage/user.storage.js";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainStyled,
} from "../styled.js";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value?.trim();
    const password = form.password.value?.trim();

    if (!email || !password) return;

    try {
      const user = await login({ email, password });
      saveToken(user.token);
      setUser(user);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data.error ?? err.message);
    }
  }

  return (
    <>
      <Header highlited={0} />
      <MainStyled>
        <FormStyled onSubmit={handleLogin}>
          <InputStyled name="email" placeholder="Email" type="email" required />
          <InputStyled
            name="password"
            placeholder="Senha"
            type="password"
            required
          />
          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
