import React from "react";
import { Container, Info, ContainerCenter, Logo } from "./style";
import QRLogo from "../../assets/images/ImgQRCodeFisk.png";

export const Load = () => {
  return (
    <Container>
      <ContainerCenter>
        <Logo src={QRLogo}></Logo>
        <Info>LOADING...</Info>
      </ContainerCenter>
    </Container>
  );
};
