import { useContext, useEffect, useState } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Modal } from "./components/Modal";
import { TitleLesson } from "../../components/titleLesson";
import { HeaderText } from "../../components/HeaderText";

import { CyberContext } from "../../context/cyber";

import devIcon from "./image/Dev.svg";
import keyIcon from "../../assets/key.svg";
import gitHubIcon from "./image/GitHub.svg";
import twitterIcon from "./image/Twitter.svg";
import microIcon from "../../assets/micro1.png";
import micro1Icon from "../../assets/micro2.png";
import audioPauseIcon from "../../assets/AudioPause.png";
import linkedInIcon from "./image/LinkedIn.svg";
import ruidoIcon from "../../assets/ruido2.svg";
import dribbbleIcon from "./image/Dribbble.svg";
import microRedIcon from "./image/microRed.png";
import microRed2Icon from "./image/microRed2.png";
import instagramIcon from "./image/Instagram.svg";
import volumeIcon from "../../assets/btnAudio.svg";
import australia from "../../assets/Australia.png";
import eua from "../../assets/Eua.svg";

import { Container, Main, Info, User, SocialMedia, UserInfo, UserImg, From, Text, ButtonArea, ButtonRec, Right, Left, Hide } from "./styles";

export const Studio = () => {
  const { selectLanguage } = useContext(CyberContext);

  const [recordedBlob, setRecordedBlob] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  const [listenAudio, setListenAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [blockAudio, setBlockAudio] = useState(false);

  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      
      console.log("Base64 :", base64String);
    };

    reader.readAsDataURL(blob);

    setRecordedBlob(blob);

    const audio = new Audio(URL.createObjectURL(blob));
    setAudioElement(audio);

  };

  const handlePlayAudio = () => {
    if (recordedBlob && audioElement) {
      audioElement.play();
      setListenAudio(true);
      setBlockAudio(true);

      audioElement.addEventListener("ended", () => {
        setListenAudio(false);
        setBlockAudio(false);
      });
    }
  };

  useEffect(() => {
    if (recorderControls.isRecording) {
      setBlockAudio(true);
    } else {
      setBlockAudio(false);
    }
  }, [recorderControls.isRecording])

  return (
    <Container>
      <HeaderText title={selectLanguage === 0 ? "Estudio" : selectLanguage === 1 ? "Studio" : "Estudio"} />
      <TitleLesson title={selectLanguage === 0 ? "Olha esse perfil da internet." : selectLanguage === 1 ? "Look at this internet profile." : "Mira este perfil de internet."} />

      <Main>
        <Right>
          <Info>
            <User>
              <UserImg>
                <div></div>
                <img src="https://github.com/guanabara.png" alt="" />
              </UserImg>
              <span>Mike Ross</span>
            </User>
            <UserInfo>
              <From>
                <img src={eua} alt="" />
                <div>
                  <p>{selectLanguage === 0 ? "De" : selectLanguage === 1 ? "From" : "De"}</p>
                  <span>The USA</span>
                </div>
              </From>
              <From>
                <img src={australia} alt="" />
                <div>
                  <p>{selectLanguage === 0 ? "Mora na" : selectLanguage === 1 ? "Lives in" : "Vive en"}</p>
                  <span>Australia</span>
                </div>
              </From>
            </UserInfo>
            <SocialMedia>
              <img src={twitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={dribbbleIcon} alt="" />
              <img src={linkedInIcon} alt="" />
              <img src={gitHubIcon} alt="" />
              <img src={devIcon} alt="" />
            </SocialMedia>
          </Info>
          <Text>
            <p>{selectLanguage === 0 ? "Você é" : selectLanguage === 1 ? "You are" : "Eres"} Mike Ross.</p>
            <span>{selectLanguage === 0 ? "Fale com Anne e responda suas perguntas." : selectLanguage === 1 ? "Talk to Anne and answer her questions." : "Habla con Anne y responde sus preguntas."}</span>
            <span>{selectLanguage === 0 ? "Use as informações acima. Preparar?" : selectLanguage === 1 ? "Use the information above. Ready?" : "Utilice la información anterior. ¿Listo?"}</span>
          </Text>
        </Right>

        <Left>
          <ButtonArea>
            {isPlaying ?
              <button className="hasBorder">
                <img src={audioPauseIcon} alt="" />
              </button>
              :
              <button disabled={blockAudio}>
                <img src={volumeIcon} alt="" />
              </button>
            }
            
            {recorderControls.isRecording ?
              <button onClick={recorderControls.stopRecording} className="hasBorder">
                <img src={micro1Icon} alt="" className="microImg" />
              </button>
              :
              <button onClick={recorderControls.startRecording} disabled={blockAudio}>
                <img src={microIcon} alt="" />
              </button>
            }
            <Hide>
              <AudioRecorder 
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls}
              />
            </Hide>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button disabled={blockAudio}>
                  <img src={keyIcon} alt="" />
                </button>
              </Dialog.Trigger>

              <Modal />
            </Dialog.Root>
          </ButtonArea>
          {listenAudio ?
            <ButtonRec className="hasBorder">
              <img src={microRed2Icon} alt="" />
              <img src={ruidoIcon} className="ruido" alt="" />
            </ButtonRec>
            :
            <ButtonRec onClick={handlePlayAudio}>
              <img src={microRedIcon} alt="" />
              <img src={ruidoIcon} className="ruido" alt="" />
            </ButtonRec>
          }
        </Left>
      </Main>
    </Container>
  )
}