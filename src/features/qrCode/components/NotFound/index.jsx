import React from "react";
import {
  Container,
  Info,
  ContainerLimiter,
  ContainerCenter,
  Logo,
  OkButton
} from "./style";
import QRLogo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

export const NotFound = (props) => {
  const navigate = useNavigate();
  const idi = 0;

  const traduction = {
    infoError: [
      "Erro ao acessar QR Code.",
      "Error on access QR Code.",
      "Erro ao acessar el QR Code."
    ],
    infoInvalid: ["QR Code inválido.", "Invalid QR Code.", "QR Code invalido."],
    tryAgain: ["Tentar novamente", "Try again", "Tentar nuevamente"]
  };

  return (
    <Container>
      <ContainerLimiter>
        <Logo src={QRLogo}></Logo>
        <ContainerCenter>
          <Info>
            {props?.hasError === "Erro"
              ? traduction.infoError[idi]
              : traduction.infoInvalid[idi]}
          </Info>
          <OkButton
            onClick={() => {
              props?.hasError === "Erro"
                ? window.location.reload()
                : navigate("/qr-code");
            }}
            $hasError={props.hasError === "Erro"}
          >
            {props?.hasError === "Erro" ? traduction.tryAgain[idi] : "OK"}
          </OkButton>
        </ContainerCenter>
      </ContainerLimiter>
    </Container>
  );
};
