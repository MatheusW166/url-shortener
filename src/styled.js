import { styled } from "styled-components";

const MainStyled = styled.main`
  padding: 24px;
  margin-top: calc(72px + 102px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;

  button {
    margin-top: 48px;
  }
`;

const InputStyled = styled.input`
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  font-size: 16px;
  height: 60px;
  padding: 18px;
  width: min(600px, 100%);

  &::placeholder {
    color: #9c9c9c;
  }

  &:focus {
    border-color: rgba(120, 177, 89, 1);
  }
`;

const ButtonStyled = styled.button`
  background: #5d9040;
  height: 60px;
  width: min(100%, 180px);
  color: #fafafa;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
`;

export { MainStyled, ButtonStyled, FormStyled, InputStyled };
