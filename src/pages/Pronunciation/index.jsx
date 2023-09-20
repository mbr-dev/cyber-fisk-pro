import { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import BrazilImg from "../../assets/Brazil.svg";
import EUAImg from "../../assets/Eua.svg";
import SpainImg from "../../assets/Spain.svg";

import { PronunciationContainer, PronunciationMain, Form, SelectLanguage } from "./styles"
import { ButtonRed } from "../../components/ButtonRed";

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

export const Pronunciation = () => {
  const languageToVoice = {
    "pt-BR": "Microsoft Maria - Portuguese (Brazil)",
    "en-US": "Google UK English Female",
    "es": "Google español",
  };

  const { speak, voices } = useSpeechSynthesis();
  const [valueTxt, setValueTxt] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("pt-BR");

  const handleGetText = () => {
    if (selectLanguage) {
      const mappedVoice = voices.find((voice) => voice.name === languageToVoice[selectLanguage]);

      if (mappedVoice) {
        speak({ text: valueTxt, voice: mappedVoice });
      }
    }
  }

  const handleLanguageChange = (language) => {
    setSelectLanguage(language);
  };

  return (
    <PronunciationContainer>
      <TopMenuHeader hasLogo />

      <PronunciationMain>
        {selectLanguage === "pt-BR" ?
          <h2>Pronúncia</h2> : 
          selectLanguage === "en-US" ?  <h2>Pronunciation</h2> :  <h2>Pronunciación</h2>
        }

        <SelectLanguage>
          <button onClick={() => handleLanguageChange("pt-BR")}>
            <img src={BrazilImg} alt="" />
          </button>

          <button onClick={() => handleLanguageChange("en-US")}>
            <img src={EUAImg} alt="" />
          </button>

          <button onClick={() => handleLanguageChange("es")}>
            <img src={SpainImg} alt="" />
          </button>
        </SelectLanguage>

        <Form>
          <textarea 
            placeholder={selectLanguage === "pt-BR" ?
              "Digite a(s) palavras aqui" : 
              selectLanguage === "en-US" ?  "Enter the word(s) here" : "Introduzca aquí la(s) palabra(s)"
            }
            value={valueTxt}
            onChange={(e) => setValueTxt(e.target.value)}
          />

          <ButtonRed 
            title="Play"
            hasIcon 
            onPress={handleGetText}
          />
        </Form>
      </PronunciationMain>

      <AreaButtonBottom title="Home" />
    </PronunciationContainer>
  )
}