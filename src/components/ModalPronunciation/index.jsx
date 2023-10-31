import { useState, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Volume2 } from "lucide-react";
import { useSpeechSynthesis } from "react-speech-kit";

import BrazilImg from "../../assets/Brazil.svg";
import EUAImg from "../../assets/Eua.svg";
import SpainImg from "../../assets/Spain.svg";

import { defaultTheme } from "../../themes/defaultTheme";
import { Content, Close, Overlay, Main, Header, Form, SelectLanguage, ButtonHear, ButtonFlag } from "./styles";

/* 
  lang: 'en-US' 'Microsoft David - English (United States)'
  lang: 'en-US' 'Microsoft Mark - English (United States)'
  lang: 'en-US' 'Microsoft Zira - English (United States)'
  lang: 'en-US' 'Google US English'
  lang: 'en-GB' 'Google UK English Female'
  lang: 'en-GB' 'Google UK English Male'

  lang: 'pt-BR' 'Microsoft Daniel - Portuguese (Brazil)'
  lang: 'pt-BR' 'Microsoft Maria - Portuguese (Brazil)'
  lang: 'pt-BR' 'Google português do Brasil'
  lang: 'pt-BR'
  lang: 'pt-BR'

  lang: 'es-ES' 'Google español'
  lang: 'es-US' 'Google español de Estados Unidos'
*/

export const ModalPronunciation = () => {
  const languageToVoice = {
    "pt-BR": "Microsoft Maria - Portuguese (Brazil)",
    "en-US": "Google UK English Female",
    "es": "Google español",
  };

  const { speak, voices } = useSpeechSynthesis();
  const [valueTxt, setValueTxt] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("pt-BR");

  const handleGetText = useCallback(() => {
    if (selectLanguage) {
      const mappedVoice = voices.find((voice) => voice.name === languageToVoice[selectLanguage]);

      if (mappedVoice) {
        speak({ text: valueTxt, voice: mappedVoice });
      }
    }
  }, [speak, voices, selectLanguage, valueTxt])

  const handleLanguageChange = (language) => {
    setSelectLanguage(language);
  };

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
            <ButtonHear form="myForm" onClick={handleGetText}>
              <Volume2 size={18} color="white" strokeWidth={3} />
            </ButtonHear>

            <ButtonFlag 
              onClick={() => handleLanguageChange("pt-BR")}
              style={{
                borderColor: selectLanguage === "pt-BR" ? defaultTheme["red-200"] : ""
              }}
            >
              <img src={BrazilImg} alt="" />
            </ButtonFlag>

            <ButtonFlag 
              onClick={() => handleLanguageChange("es")}
              style={{
                borderColor: selectLanguage === "es" ? defaultTheme["red-200"] : ""
              }}
            >
              <img src={SpainImg} alt="" />
            </ButtonFlag>

            <ButtonFlag 
              onClick={() => handleLanguageChange("en-US")}
              style={{
                borderColor: selectLanguage === "en-US" ? defaultTheme["red-200"] : ""
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

            <button 
              title="Play"
              hasIcon 
              onPress={handleGetText}
            ></button>
          </Form>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}