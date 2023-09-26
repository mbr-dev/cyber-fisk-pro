import React from "react";
import { Container, Info, ContainerCenter, Logo } from "./style";
import QRLogo from "../../assets/images/ImgQRCodeFisk.png";

function Load() {
  return (
    <Container>
      <ContainerCenter>
        <Logo src={QRLogo}></Logo>
        <Info>LOADING...</Info>
      </ContainerCenter>
    </Container>
  );
}

export default Load;
