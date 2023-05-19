import { Link } from "react-router-dom";
import { styled } from "styled-components";
import SvgShort from "./SvgShort.js";

export default function Header({ highlited, userName }) {
  console.log("header");
  return (
    <HeaderStyled highlited={highlited}>
      {<p>{userName}</p>}
      <Link to="/">
        <LogoStyled>
          <h1>Shortly</h1>
          <SvgShort />
        </LogoStyled>
      </Link>
      <nav>
        <Link to="/login">Entrar</Link>
        <Link to="/register">Cadastre-se</Link>
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

    ${({ highlited }) => `
        a:nth-of-type(${highlited + 1}) {
            color: #5d9040;
        }
    `}
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
