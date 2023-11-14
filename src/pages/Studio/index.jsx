import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";

import { Modal } from "./components/Modal";
import { TitleLesson } from "../../components/titleLesson";
import { HeaderText } from "../../components/HeaderText";

import { CyberContext } from "../../context/cyber";
import { translateStudio } from "../../utils/Translate";

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

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <Container>
      <HeaderText title={
        selectLanguage === 0 ? translateStudio[0].title : selectLanguage === 1 ? translateStudio[1].title : translateStudio[2].title
      } />
      <TitleLesson title={
          selectLanguage === 0 ? translateStudio[0].subTitle : selectLanguage === 1 ? translateStudio[1].subTitle : translateStudio[2].subTitle
        }
        mt={isDesktop && "20px"}
      />

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
                  <p>{selectLanguage === 0 ? translateStudio[0].from : selectLanguage === 1 ? translateStudio[1].from : translateStudio[2].from}</p>
                  <span>The USA</span>
                </div>
              </From>

              <From>
                <img src={australia} alt="" />
                <div>
                  <p>{selectLanguage === 0 ? translateStudio[0].live : selectLanguage === 1 ? translateStudio[1].live : translateStudio[2].live}</p>
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
            <p>{selectLanguage === 0 ? translateStudio[0].you : selectLanguage === 1 ? translateStudio[1].you : translateStudio[2].you} Mike Ross.</p>
            <span>{selectLanguage === 0 ? translateStudio[0].text : selectLanguage === 1 ? translateStudio[1].text : translateStudio[2].text}</span>
            <span>{selectLanguage === 0 ? translateStudio[0].text1 : selectLanguage === 1 ? translateStudio[1].text1 : translateStudio[2].text1}</span>
          </Text>
        </Right>

        <Left>
          <ButtonArea>{/* aumentar os botao */}
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