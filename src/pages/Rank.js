import { Trophy } from "@phosphor-icons/react";
import Header from "../components/Header.js";
import { MainStyled } from "../styled.js";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getRank } from "../services/url.services.js";
import RankList from "../components/RankList.js";

export default function Rank() {
  const [rank, setRank] = useState();

  useEffect(() => {
    getRank().then(setRank).catch(console.log);
  }, []);

  return (
    <>
      <Header highlited={3} />
      <MainStyled>
        <RankTitleStyled>
          <Trophy size={48} color="#ffd233" weight="fill" />
          <h2>Ranking</h2>
        </RankTitleStyled>
        <RankList rank={rank} />
      </MainStyled>
    </>
  );
}

const RankTitleStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  gap: 10px;
`;
