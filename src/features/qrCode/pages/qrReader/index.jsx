import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QrReader } from "react-qr-reader";
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
  Label,
  Form,
  InputCode,
  InputButton,
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta.png";
import LogoImg from "../../assets/images/Logo.png";

function QRReader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [permission, setPermission] = useState("show");
  const inputRef = useRef(null);
  const [code, setCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const language = 0;

  const traduction = {
    instruction: [
      "Posicione o QR Code no frame e aguarde a leitura automática.",
      "Position the QR Code on the frame and wait automatic read.",
      "Posicione lo QR Code no framito e aguarde la leitura automatica.",
    ],
    typeCode: ["Digite o código", "Type code", "Digite lo codiguito"],
    permissionWarning: [
      "Sem permissão para acessar a câmera.",
      "No camera permission.",
      "Sem permissione para acessar la camera.",
    ],
  };

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

  const handleSubmit = () => {
    navigate(`${location.pathname.replace("/reader", "")}/${code.trim()}`);
  };

  return (
    <Container>
      <Header onClick={() => setIsFocused(false)}>
        <BackButton
          onClick={() =>
            isFocused ? setIsFocused(false) : navigate("/qr-code")
          }
        >
          <BackImage src={BackIcon} />
        </BackButton>
        <Logo src={LogoImg} />
      </Header>
      <ContentLimiter>
        {!isFocused && (
          <ContainerCenter>
            <>
              <Info>{traduction?.instruction[language]}</Info>
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
                          console.log(error);
                        }
                      }}
                      scanDelay={1000}
                      containerStyle={{ height: 300 }}
                      videoContainerStyle={{ height: 300 }}
                      videoStyle={{ objectFit: "cover" }}
                    />
                  ) : (
                    <Permission>
                      {traduction?.permissionWarning[language]}
                    </Permission>
                  )}
                </ContainerQRReader>
              </ContainerQRBorder>
            </>
          </ContainerCenter>
        )}
        <Footer
          $isFocused={isFocused}
          onClick={() => inputRef?.current && inputRef.current.focus()}
        >
          <Sticker $isFocused={isFocused} />
          {isFocused && <Label>Digite o codigo</Label>}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              // handleSubmit();
            }}
          >
            <InputCode
              variant="outlined"
              placeholder={traduction?.typeCode[language]}
              inputProps={{ maxLength: 12 }}
              value={code}
              onChange={(e) => {
                const value = e.target.value.replace("/", "").toUpperCase();
                setCode(value);
              }}
              inputRef={inputRef}
              onFocus={() => setIsFocused(true)}
              //disabled
            />
          </Form>
          {isFocused && (
            <InputButton onClick={handleSubmit}>Confirmar</InputButton>
          )}
        </Footer>
      </ContentLimiter>
    </Container>
  );
}

export default QRReader;
