import React, { useEffect, useState } from "react";
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

import LogoImg from "../../assets/images/Logo.png";
import TurnOffIcon from "../../assets/icons/Icon_logoff.png";
import InfoImg from "../../assets/images/CardLerQR.png";
import SendImg from "../../assets/icons/Icon_enviar.png";
import { useMobileOrientation } from "react-device-detect";

export const QRCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [code, setCode] = useState("");
  const [isPortrait, setIsPortrait] = useState(false);

  const language = 0;

  const traduction = {
    typeCode: ["Digite o código", "Type code", "Digite lo codiguito"],
  };

  const handleResize = () => {
    setIsPortrait(window.innerWidth < window.innerHeight);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = () => {
    navigate(`${location.pathname.replace("/reader", "")}/${code.trim()}`);
  };

  const back = () => {
    localStorage.setItem("lastAccess", "LessonSelection");
    navigate("/LessonSelection");
  };

  return (
    <Container $isPortrait={isPortrait}>
      <RedBox>
        <Header>
          <Logo src={LogoImg} />
          <Back
            onClick={() => {
              back();
            }}
          >
            <BackIcon src={TurnOffIcon} />
          </Back>
        </Header>
        <ContentLimiter>
          <QRContainer
            variant="contained"
            onClick={() => navigate(`${location?.pathname}/reader`)}
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
            inputProps={{ maxLength: 13 }}
            value={code}
            onChange={(e) => {
              if (e.target.value.length > 13) return;
              const value = e.target.value.replace("/", "").toUpperCase();
              setCode(value);
            }}
          />
          <InputButton onClick={handleSubmit}>
            <ImageInputButton src={SendImg} />
          </InputButton>
        </ContainerInput>
      </WhiteBox>
    </Container>
  );
};
