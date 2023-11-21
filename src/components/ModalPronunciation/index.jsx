import { useState, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useSpeechSynthesis } from "react-speech-kit";

import SomImg from "./images/Som.png";
import PauseImg from "./images/Pause.png";
import EUAImg from "../../assets/Eua.svg";
import SpainImg from "../../assets/Spain.svg";
import BrazilImg from "../../assets/Brazil.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Content, Close, Overlay, Main, Header, Form, SelectLanguage, ButtonHear, ButtonFlag } from "./styles";


export const ModalPronunciation = () => {
  const { speak, voices, speaking, cancel } = useSpeechSynthesis();
  const [valueTxt, setValueTxt] = useState("");
  const [selectLanguage, setSelectLanguage] = useState(null);

  const handleGetText = () => {
    const voice = voices[selectLanguage] || null;
    speak({ text: valueTxt, voice });
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={18} color="white" strokeWidth={3} />
        </Close>
        <Header>
          <p>Pronunciation</p>
        </Header>
        
        <Main>
          <SelectLanguage >
            <ButtonFlag 
              onClick={() => setSelectLanguage(4)}
              style={{
                borderColor: selectLanguage === 4 ? defaultTheme["red-200"] : ""
              }}
            >
              <img src={BrazilImg} alt="" />
            </ButtonFlag>

            <ButtonFlag 
              onClick={() => setSelectLanguage(9)}
              style={{
                borderColor: selectLanguage === 9 ? defaultTheme["red-200"] : ""
              }}
            >
              <img src={SpainImg} alt="" />
            </ButtonFlag>

            <ButtonFlag 
              onClick={() => setSelectLanguage(7)}
              style={{
                borderColor: selectLanguage === 7 ? defaultTheme["red-200"] : ""
              }}
            >
              <img src={EUAImg} alt="" />
            </ButtonFlag>
          </SelectLanguage>

          <Form id="myForm">
            <textarea 
              placeholder={selectLanguage === "pt-BR" ?
                "Digite o texto..." : 
                selectLanguage === "en-US" ?  "Enter text..." : "Ingrese texto..."
              }
              value={valueTxt}
              onChange={(e) => setValueTxt(e.target.value)}
            />
            {speaking ?
              <ButtonHear form="myForm" onClick={cancel}>
                <img src={PauseImg} alt="" />
              </ButtonHear>
              :
              <ButtonHear form="myForm" onClick={handleGetText}>
                <img src={SomImg} alt="" />
              </ButtonHear>
            }
            
          </Form>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}