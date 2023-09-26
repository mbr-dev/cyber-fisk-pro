import React from "react";
import {
  Container,
  Info,
  ContainerLimiter,
  ContainerCenter,
  Logo,
  OkButton,
} from "./style";
import QRLogo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerLimiter>
        <Logo src={QRLogo}></Logo>
        <ContainerCenter>
          <Info>QR Code inválido.</Info>
          <OkButton onClick={() => navigate("/qr-code")}>OK</OkButton>
        </ContainerCenter>
      </ContainerLimiter>
    </Container>
  );
}

export default NotFound;
