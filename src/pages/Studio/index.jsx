import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState, useRef } from "react"; 
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";

import { Modal } from "./components/Modal";
import { TitleLesson } from "../../components/titleLesson";
import { HeaderText } from "../../components/HeaderText";

import { CyberContext } from "../../context/cyber";

import devIcon from "./image/Dev.svg";
import gitHubIcon from "./image/GitHub.svg";
import twitterIcon from "./image/Twitter.svg";
import linkedInIcon from "./image/LinkedIn.svg";
import ruidoIcon from "../../assets/ruido2.svg";
import dribbbleIcon from "./image/Dribbble.svg";
import microRedIcon from "./image/microRed.png";
import microRed2Icon from "./image/microRed2.png";
import instagramIcon from "./image/Instagram.svg";

import eua from "../../assets/Eua.svg";
import keyIcon from "../../assets/key.svg";
import micro1Icon from "../../assets/micro2.png";
import microIcon from "../../assets/micro1.png";
import volumeIcon from "../../assets/btnAudio.svg";
import australia from "../../assets/Australia.png";
import audioPauseIcon from "../../assets/AudioPause.png";

import audio0 from "./audio/audio0.mp3";
import audio2 from "./audio/audio1.mp3";
import audio1 from "./audio/audio2.mp3";

import { Container, Main, Info, User, SocialMedia, UserInfo, UserImg, From, Text, ButtonArea, ButtonRec, Right, Left, Hide } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Studio = () => {
  const { selectLanguage } = useContext(CyberContext);
  const dialogues = [audio0, audio1, audio2];

  const [voicesBase64, setVoicesBase64] = useState([]);
  const [tempVoice, setTempVoice] = useState([]);
  const [dialogueWithVoice, setDialogueWithVoice] = useState([]);
  const [data, setData] = useState([]);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [listenAudio, setListenAudio] = useState(false);
  const [dwvIndex, setDwvIndex] = useState(0);
  const [isPlayDialogue, setIsPlayDialogue] = useState(false);
  const [blockButton, setBlockButton] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const recorderControls = useAudioRecorder();
  const audioRef = useRef(new Audio());

  const fetchDialogue = () => {
    const dialogueLength = dialogues.length;

    let tempDialogue = [];
    for (let a = 0; a < dialogueLength; a++) {
      tempDialogue.push(dialogues[a]);
    }
    setData(tempDialogue);
  }

  const addAudioElement = (blob) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      setVoicesBase64(state => [...state, base64]); //convertido base64
    }
    
    reader.readAsDataURL(blob)
    setTempVoice(state => [...state, URL.createObjectURL(blob)]);
  };

  const handlePlayDialogue = () => {
      setIsPlayDialogue(true);
      setBlockButton(true);

      const audio = new Audio(data[dialogueIndex]);
      audio.play();

      let count = dialogueIndex;
      count++;
      setDialogueIndex(count);

      audio.addEventListener("ended", () => {
        recorderControls.startRecording();
        setIsPlayDialogue(false);
        setBlockButton(false);
      });
  }

  const handlePlayDialogueWithVoice = () => {
    setListenAudio(true);
  };

  const handleJoinAudios = () => {
    const firstArray = data;
    const secondArray = tempVoice;

    const newArray = [];

    firstArray.forEach((item, index) => {
      const newItem = [item, secondArray[index]];
      newArray.push(newItem);
    });

    const joinArray = newArray.flat();

    setDialogueWithVoice(joinArray);
    setShowButton(true);
  }

  const handleStopRecordeVoice = () => {
    recorderControls.stopRecording();
  }

  useEffect(() => {
    fetchDialogue();
  }, []);

  useEffect(() => {
    if (recorderControls.isRecording) {
      setBlockButton(true);
    } else {
      setBlockButton(false);
    }
  }, [recorderControls.isRecording]);

  useEffect(() => {
    if (data.length > 0) {
      if (tempVoice.length === data.length) {
        handleJoinAudios();
      }
    }
  }, [data, tempVoice]);

  useEffect(() => {
    const playNextAudio = () => {
      if (dwvIndex < dialogueWithVoice.length) {
        const audioSrc = dialogueWithVoice[dwvIndex];
        audioRef.current.src = audioSrc;
        audioRef.current.play();
      }
    };

    const handleAudioEnd = () => {
      setDwvIndex(state => state + 1);
      //playNextAudio();

      if (dwvIndex === dialogueWithVoice.length - 1) {
        setListenAudio(false);
      }
    };

    if (listenAudio) {
      audioRef.current.addEventListener("ended", handleAudioEnd);

      playNextAudio();

      return () => {
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, [listenAudio, dwvIndex, dialogueWithVoice])

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
            <button 
              onClick={handlePlayDialogue}
              disabled={recorderControls.isRecording || showButton}
              style={{
                borderColor: isPlayDialogue && defaultTheme["gray-700"],
              }}
            >
              <img src={volumeIcon} alt="" />
            </button>

            {recorderControls.isRecording ?
              <button onClick={handleStopRecordeVoice} className="hasBorder">
                <img src={micro1Icon} alt="" className="microImg" />
              </button>
              :
              <button disabled={blockButton || showButton}>
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
                <button disabled={blockButton || showButton}>
                  <img src={keyIcon} alt="" />
                </button>
              </Dialog.Trigger>

              <Modal />
            </Dialog.Root>
          </ButtonArea>
          {showButton &&
            <ButtonRec onClick={handlePlayDialogueWithVoice}>
              <img src={listenAudio ? microRed2Icon : microRedIcon} alt="" />
              <img src={ruidoIcon} alt="ruido" className="ruido" />
            </ButtonRec>
          }
        </Left>
      </Main>
    </Container>
  )
}