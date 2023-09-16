import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  RedBox,
  ContentLimiter,
  Header,
  Logo,
  Back,
  BackIcon,
  QRContainer,
  ImageQRInfo,
  WhiteBox,
  ContainerInput,
  InputCode,
  InputButton,
  ImageInputButton,
} from "./style";

import LogoImg from "./assets/images/Logo.png";
import TurnOffIcon from "./assets/icons/Icon_logoff.png";
import InfoImg from "./assets/images/CardLerQR.png";
import SendImg from "./assets/icons/Icon_enviar.png";

function QRCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState("");

  const language = 0;

  const traduction = {
    typeCode: ["Digite o código", "Type code", "Digite lo codiguito"],
  };
  return (
    <Container>
      <RedBox>
        <Header>
          <Logo src={LogoImg} />
          <Back>
            <BackIcon src={TurnOffIcon} />
          </Back>
        </Header>
        <ContentLimiter>
          <QRContainer
            variant="contained"
            onClick={() => {
              console.log("aquii", location);
              navigate(`${location?.pathname}/reader`);
            }}
          >
            <ImageQRInfo src={InfoImg} />
          </QRContainer>
        </ContentLimiter>
      </RedBox>
      <WhiteBox>
        <ContainerInput>
          <InputCode
            variant="outlined"
            placeholder={traduction?.typeCode[language]}
            inputProps={{ maxLength: 12 }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <InputButton onClick={() => console.log("code", code)}>
            <ImageInputButton src={SendImg} />
          </InputButton>
        </ContainerInput>
      </WhiteBox>
    </Container>
  );
}

export default QRCode;
