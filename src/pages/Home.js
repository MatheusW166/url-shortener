import { styled } from "styled-components";
import Header from "../components/Header.js";
import { ButtonStyled, InputStyled, MainStyled } from "../styled.js";
import { getOpenUrl } from "../utils/url.utils.js";
import UserUrlItem from "../components/UserUrlItem.js";
import { useState } from "react";

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
  const [copiedText, setCopiedText] = useState("");

  async function handleUrlClick(shortUrl) {
    const copiedUrl = getOpenUrl(shortUrl);
    await navigator.clipboard.writeText(copiedUrl);
    setCopiedText(copiedUrl);
  }

  return (
    <>
      <Header />
      <MainStyled>
        <ShortenFormStyled>
          <InputStyled placeholder="Links que cabem no bolso" />
          <ButtonStyled>Encurtar link</ButtonStyled>
        </ShortenFormStyled>
        <UserUrlsListStyled>
          {urls?.map((url) => {
            return (
              <UserUrlItem
                key={url.id}
                shortUrl={url.shortUrl}
                url={url.url}
                visitCount={url.visitCount}
                onClickUrl={handleUrlClick}
                foiCopiado={copiedText?.includes(url.shortUrl)}
              />
            );
          })}
        </UserUrlsListStyled>
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

const UserUrlsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
  width: 100%;
`;
