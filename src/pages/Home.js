import { styled } from "styled-components";
import Header from "../components/Header.js";
import { ButtonStyled, InputStyled, MainStyled } from "../styled.js";
import UserUrlsList from "../components/UserUrlsList.js";

const urls = [
  {
    id: 18,
    shortUrl: "7Nai8XJAA3QX0EsqpfDpD",
    url: "https://google.com",
    visitCount: 0,
  },
  {
    id: 16,
    shortUrl: "EJr7ebSMAIme6jeq1e42R",
    url: "https://google.com",
    visitCount: 2,
  },
  {
    id: 15,
    shortUrl: "2WPmdwLBivLjrXYzDOnAN",
    url: "https://google.com",
    visitCount: 4,
  },
  {
    id: 17,
    shortUrl: "J2m8EFKL7GvfK11eaJuPq",
    url: "https://google.com",
    visitCount: 1,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <ShortenFormStyled>
          <InputStyled placeholder="Links que cabem no bolso" />
          <ButtonStyled>Encurtar link</ButtonStyled>
        </ShortenFormStyled>
        <UserUrlsList urls={urls} />
      </MainStyled>
    </>
  );
}

const ShortenFormStyled = styled.form`
  display: flex;
  width: 100%;
  gap: 24px;

  input {
    flex: 1;
  }
`;
