import styled from "styled-components";
import Header from "../components/Header.js";
import { ButtonStyled, InputStyled, MainStyled } from "../styled.js";
import { getOpenUrl } from "../utils/url.utils.js";
import UserUrlItem from "../components/UserUrlItem.js";
import { useEffect, useState } from "react";
import { getMe } from "../services/user.services.js";
import { shorten } from "../services/url.services.js";

export default function Home() {
  const [urls, setUrls] = useState();
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    getMe()
      .then((me) => setUrls(me.shortenedUrls))
      .catch(console.log);
  }, []);

  async function handleUrlClick(shortUrl) {
    const copiedUrl = getOpenUrl(shortUrl);
    await navigator.clipboard.writeText(copiedUrl);
    setCopiedText(copiedUrl);
  }

  async function handleUrlSubmit(event) {
    event.preventDefault();
    const input = event.target.url;
    const url = input.value?.trim();

    if (!url) return;

    try {
      await shorten({ url });
      const me = await getMe();
      setUrls(me.shortenedUrls);
      input.value = "";
    } catch (err) {
      alert(err.response?.data.error ?? err.message);
    }
  }

  return (
    <>
      <Header highlited={2} />
      <MainStyled>
        <ShortenFormStyled onSubmit={handleUrlSubmit}>
          <InputStyled
            name="url"
            placeholder="Links que cabem no bolso"
            type="url"
            required
          />
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
                isCopied={copiedText?.includes(url.shortUrl)}
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
