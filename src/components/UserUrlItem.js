import { Copy, Trash, CheckCircle } from "@phosphor-icons/react";
import styled from "styled-components";

export default function UserUrlItem({
  url,
  shortUrl,
  visitCount,
  onClickUrl,
  isCopied,
}) {
  return (
    <UserUrlItemStyled>
      <div onClick={() => onClickUrl(shortUrl)}>
        <p>{url}</p>
        <p>{shortUrl}</p>
        <p>Quantidade de visitantes: {visitCount}</p>
        <CopyButtonStyled isCopied={isCopied}>
          <CheckCircle weight="fill" size={24} />
          <Copy weight="fill" size={24} />
        </CopyButtonStyled>
      </div>
      <div>
        <Trash weight="fill" size={24} color="#EA4F4F" />
      </div>
    </UserUrlItemStyled>
  );
}

const UserUrlItemStyled = styled.li`
  height: 60px;
  display: flex;
  width: 100%;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 12px;
  overflow: hidden;
  font-size: 14px;
  cursor: pointer;

  p:first-child {
    width: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

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
    overflow: hidden;

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

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity ease 0.3s;

    ${({ isCopied }) => `
      &:nth-of-type(${isCopied ? 1 : 2}){
        opacity: 1;
      }
    `}
  }

  &:hover {
    opacity: 1;
  }

  color: #80cc74;
`;
