import { Trash } from "@phosphor-icons/react";
import { styled } from "styled-components";
import { getOpenUrl } from "../utils/url.utils.js";
import { Copy } from "@phosphor-icons/react";

export default function UserUrlsList({ urls }) {
  async function copyToClipboard(shortUrl) {
    await navigator.clipboard.writeText(getOpenUrl(shortUrl));
  }

  return (
    <UserUrlsListStyled>
      {urls?.map((url) => {
        return (
          <UserUrlItem key={url.id}>
            <div onClick={() => copyToClipboard(url.shortUrl)}>
              <p>{url.url}</p>
              <p>{url.shortUrl}</p>
              <p>Quantidade de visitantes: {url.visitCount}</p>
              <CopyButtonStyled>
                <Copy weight="fill" size={24} />
              </CopyButtonStyled>
            </div>
            <div>
              <Trash weight="fill" size={24} color="#EA4F4F" />
            </div>
          </UserUrlItem>
        );
      })}
    </UserUrlsListStyled>
  );
}

const UserUrlsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
  width: 100%;
`;

const UserUrlItem = styled.li`
  height: 60px;
  display: flex;
  width: 100%;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:first-child {
    flex: 1;
    background: #80cc74;
    color: #fafafa;
    justify-content: space-between;
    padding: 24px;
    position: relative;

    &:hover {
      background: #abcfa5;
      button {
        transform: translateX(-50%) translateY(0);
      }
    }
  }

  div:last-child {
    padding: 24px;

    svg {
      transition: transform ease 0.2s;
    }

    &:hover svg {
      transform: scale(1.2);
    }
  }
`;

const CopyButtonStyled = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  transition: transform ease 0.2s;

  width: 40px;
  height: 40px;
  border-radius: 100%;

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(120, 177, 89, 0.8);
  background-color: #fafafa;

  &:hover {
    opacity: 1;
  }

  color: #80cc74;
`;
