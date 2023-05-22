import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MainStyled,
} from "../styled.js";
import { register } from "../services/user.services.js";

export default function Register() {
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value?.trim();
    const email = form.email.value?.trim();
    const password = form.password.value?.trim();
    const confirmPassword = form["confirm-password"].value?.trim();

    if (password !== confirmPassword) {
      alert("passwords are not equal");
      return;
    }

    try {
      await register({ email, password, confirmPassword, name });
      navigate("/login");
    } catch (err) {
      alert(err.response?.data.error ?? err.message);
    }
  }

  return (
    <>
      <Header highlited={1} />
      <MainStyled>
        <FormStyled onSubmit={handleRegister}>
          <InputStyled name="name" placeholder="Nome" type="text" required />
          <InputStyled name="email" placeholder="Email" type="email" required />
          <InputStyled
            name="password"
            placeholder="Senha"
            type="password"
            required
          />
          <InputStyled
            name="confirm-password"
            placeholder="Confirmar senha"
            type="password"
            required
          />
          <ButtonStyled type="submit">Criar conta</ButtonStyled>
        </FormStyled>
      </MainStyled>
    </>
  );
}
