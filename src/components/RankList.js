import { styled } from "styled-components";

export default function RankList({ rank }) {
  return (
    <RankListStyled>
      {rank?.map((r, idx) => {
        return (
          <li key={r.id}>{`${idx + 1}. ${r.name} - ${r.linksCount} links - ${
            r.visitCount
          } visualizações`}</li>
        );
      })}
    </RankListStyled>
  );
}

const RankListStyled = styled.ul`
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 24px;
  padding: 24px 32px;
  width: 100%;
  margin-top: 56px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    font-size: 18px;
    font-weight: 500;
  }
`;
