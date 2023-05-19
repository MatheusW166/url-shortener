import { Link } from "react-router-dom";
import styled from "styled-components";
import SvgShort from "./SvgShort.js";
import { useContext } from "react";
import { UserContext } from "../context/user.context.js";
import { removeToken } from "../storage/user.storage.js";

function getHello(user) {
  return user ? <p>Seja bem vindo(a), {user.name}!</p> : <></>;
}

export default function Header({ highlited }) {
  const { user, setUser } = useContext(UserContext);

  function logOut() {
    setUser(null);
    removeToken();
  }

  return (
    <HeaderStyled isAuth={user !== null} highlited={highlited}>
      {getHello(user)}
      <Link to="/">
        <LogoStyled>
          <h1>Shortly</h1>
          <SvgShort />
        </LogoStyled>
      </Link>
      <nav>
        <Link to="/login">Entrar</Link>
        <Link to="/register">Cadastre-se</Link>
        <Link to="/home">Home</Link>
        <Link to="/">Ranking</Link>
        <Link to="/login" onClick={logOut}>
          Sair
        </Link>
      </nav>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  font-size: 14px;

  p {
    color: #5d9040;
  }

  nav {
    display: flex;
    gap: 24px;
    color: #9c9c9c;

    a:nth-of-type(5) {
      text-decoration: underline;
    }

    ${({ highlited }) => `
        a:nth-of-type(${highlited + 1}) {
            color: #5d9040;
        }
    `}

    ${({ isAuth }) => {
      const authNav = `
        a:not(:nth-of-type(n+3)) {
          display: none;
        }
      `;

      const notAuthNav = `
        a:nth-of-type(n+3) {
          display: none;
        }
      `;

      return isAuth ? authNav : notAuthNav;
    }}
  }
`;

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h1 {
    font-size: 64px;
    font-weight: 200;
  }

  position: absolute;
  left: 50%;
  top: 72px;
  transform: translateX(-50%);
`;
