import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import Fade from "react-reveal/Fade";
import {
  Container,
  ContentLimiter,
  Header,
  BackButton,
  BackImage,
  Logo,
  Info,
  ContainerCenter,
  ContainerQRBorder,
  ContainerQRReader,
  Permission,
  Footer,
  Sticker,
  Form,
  InputCode,
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta.png";
import LogoImg from "../../assets/images/Logo.png";

function QRReader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [permission, setPermission] = useState("show");
  const [code, setCode] = useState("");

  // navigator.permissions
  //   .query({ name: "camera" })
  //   .then((permissionObj) => {
  //     console.log("perm", permissionObj);
  //     setPermission(permissionObj.state);
  //   })
  //   .catch((error) => {
  //     console.log("err", error);
  //     setPermission("denied");
  //   });

  const askCameraPermission = async () =>
    await navigator.mediaDevices.getUserMedia({ video: true });

  //let localstream2;
  askCameraPermission()
    .then((response) => {
      console.log("res", response);
      setPermission("allowed");
    })
    // .then(() => {
    //   localstream2?.getTracks().forEach((track) => {
    //     track.stop();
    //   });
    // })
    .catch((error) => {
      console.log("err", error);
      setPermission("denied");
    });

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <BackImage src={BackIcon} />
        </BackButton>
        <Logo src={LogoImg} />
      </Header>
      <ContentLimiter>
        <ContainerCenter>
          <Info>
            Posicione o QR Code no frame e aguarde a leitura automática.
          </Info>
          <ContainerQRBorder>
            <ContainerQRReader>
              {permission !== "denied" ? (
                <QrReader
                  constraints={{ facingMode: "environment" }}
                  onResult={(result, error) => {
                    if (!!result) {
                      console.log("res", result);
                    }

                    if (!!error) {
                      ("");
                      console.info(error);
                    }
                  }}
                  scanDelay={1000}
                  containerStyle={{ height: 300 }}
                  videoContainerStyle={{ height: 300 }}
                  videoStyle={{ objectFit: "cover" }}
                />
              ) : (
                <Permission>Sem permissão para acessar a câmera.</Permission>
              )}
            </ContainerQRReader>
          </ContainerQRBorder>
        </ContainerCenter>
        <Footer>
          <Sticker />
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(
                `${location.pathname.replace("/reader", "")}/${code.trim()}`
              );
            }}
          >
            <InputCode
              variant="outlined"
              placeholder="Digite o código"
              inputProps={{ maxLength: 12 }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              //disabled
            />
          </Form>
        </Footer>
      </ContentLimiter>
    </Container>
  );
}

export default QRReader;
