import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { isMobile } from "react-device-detect";
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

export const QRReader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [permission, setPermission] = useState("show");
  const inputRef = useRef(null);
  const [code, setCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const language = 0;
  const [isPortrait, setIsPortrait] = useState(false);

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

  const askCameraPermission = async () =>
    await navigator.mediaDevices.getUserMedia({
      video: isMobile ? { facingMode: "environment" } : true,
    });

  askCameraPermission()
    .then((response) => {
      console.log("res", response);
      setPermission("allowed");
    })
    .catch((error) => {
      console.log("err", error);
      setPermission("denied");
    });

  const handleSubmit = (autoCode) => {
    navigate(
      `${location.pathname.replace("/reader", "")}/${
        autoCode ? autoCode.trim() : code.trim()
      }`
    );
  };

  console.log("per", permission);

  return (
    <Container $isPortrait={isPortrait}>
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
                <ContainerQRReader denied={permission}>
                  {permission !== "denied" ? (
                    <QrReader
                      constraints={{ facingMode: "environment" }}
                      onResult={(result, error) => {
                        if (result) {
                          console.log("res", result);
                          handleSubmit(result?.text);
                        }
                        if (error) {
                          console.log(error);
                        }
                      }}
                      scanDelay={1000}
                      containerStyle={{
                        height: 300,
                        width: "100%",
                        transform: isMobile ? "rotateY(0)" : "rotateY(180deg)",
                      }}
                      videoContainerStyle={{ height: 300, width: "100%" }}
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
              inputProps={{ maxLength: 13 }}
              value={code}
              onChange={(e) => {
                if (e.target.value.length > 13) return;
                const value = e.target.value.replace("/", "").toUpperCase();
                setCode(value);
              }}
              inputRef={inputRef}
              onFocus={() => setIsFocused(true)}
              //disabled
            />
          </Form>
          {isFocused && (
            <InputButton onClick={() => handleSubmit(null)}>
              Confirmar
            </InputButton>
          )}
        </Footer>
      </ContentLimiter>
    </Container>
  );
};
