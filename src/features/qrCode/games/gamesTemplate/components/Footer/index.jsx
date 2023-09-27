import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  ContainerButtons,
  FooterButton,
  FooterButtonImg
} from "./style";
import QRIcon from "../../../../assets/icons/Icon_QR.png";
import RefreshIcon from "../../../../assets/icons/Icon_Repeat.png";
import RankingIcon from "../../../../assets/icons/Icon ranking.png";

export const GamesFooter = (props) => {
  const navigate = useNavigate();

  return (
    <Footer>
      <ContainerButtons>
        <FooterButton onClick={() => navigate("/qr-code/reader")}>
          <FooterButtonImg src={QRIcon} />
        </FooterButton>
        <FooterButton onClick={() => location.reload()}>
          <FooterButtonImg src={RefreshIcon} />
        </FooterButton>
        <FooterButton onClick={() => props.setShowScore(true)}>
          <FooterButtonImg src={RankingIcon} />
        </FooterButton>
      </ContainerButtons>
    </Footer>
  );
};
