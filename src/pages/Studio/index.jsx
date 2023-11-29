import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";

import { Modal } from "./components/Modal";
import { TitleLesson } from "../../components/titleLesson";
import { HeaderText } from "../../components/HeaderText";

import { CyberContext } from "../../context/cyber";

import devIcon from "./image/Dev.svg";
import keyIcon from "../../assets/key.svg";
import gitHubIcon from "./image/GitHub.svg";
import twitterIcon from "./image/Twitter.svg";
import microIcon from "../../assets/micro.svg";
import linkedInIcon from "./image/LinkedIn.svg";
import ruidoIcon from "../../assets/ruido2.svg";
import dribbbleIcon from "./image/Dribbble.svg";
import micro2Icon from "../../assets/micro1.svg";
import instagramIcon from "./image/Instagram.svg";
import volumeIcon from "../../assets/btnAudio.svg";
import australia from "../../assets/Australia.png";
import eua from "../../assets/Eua.svg";

import { Container, Main, Info, User, SocialMedia, UserInfo, UserImg, From, Text, ButtonArea, ButtonRec, Right, Left } from "./styles";

export const Studio = () => {
  const { selectLanguage } = useContext(CyberContext);

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
            <button>
              <img src={volumeIcon} alt="" />
            </button>
            <button>
              <img src={microIcon} alt="" />
            </button>

            <Dialog.Root>
              <Dialog.Trigger>
                <button>
                  <img src={keyIcon} alt="" />
                </button>
              </Dialog.Trigger>

              <Modal />
            </Dialog.Root>
          </ButtonArea>

          <ButtonRec>
            <img src={micro2Icon} alt="" />
            <img src={ruidoIcon} className="ruido" alt="" />
          </ButtonRec>
        </Left>
      </Main>
    </Container>
  )
}