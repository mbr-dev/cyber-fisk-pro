import { useContext, useState } from "react";

import { AvatarCustom } from "../../components/AvatarCustom";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { AreaFooterMiddleH } from "../../components/AreaFooterMiddleH";
import { AvatarCustomMetade } from "../../components/AvatarCustomMetade";

import { CyberContext } from "../../context/cyber";

import data from "./images/data.png";
import escola from "./images/escola.png";
import mail from "./images/mail.png";
import userImg from "../../assets/user.png";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import Brazil from "../../assets/Brazil.svg";
import LogoFisk from "../../assets/logoFisk2.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";
import arrowBottom from "../../assets/arrowBottom.svg";

import { Container, Content, Main, Input, Header, AreaInput, HeaderDesktop, SelectIdioma, SelectLi, SelectTitle, SelectUl, TopHeader, BottomHeader, Div, DivBtnCH, AvatarPe } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  const [isOpen, setIsOpen] = useState("");
  
  const handleSelectLanguage = (item) => {
    chooseLanguage(item)
  }
  
  return(
    <Container>
      <Header>
        <img src={bgHeaderImg} alt="" className="bgHeaderImg" />
        <TopHeader>
          <ButtonMenuHeader />
          <p>{selectLanguage === 0 ? "Perfil" : selectLanguage === 1 ? "Profile" : "Perfil"}</p>
          <DivBtnCH>
            <ButtonCloseHeader />
          </DivBtnCH>
        </TopHeader>

        <BottomHeader>
          <AvatarCustomMetade hasName />
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        </BottomHeader>
        
        <AvatarPe>
          <AvatarCustom hasName />
        </AvatarPe>
      </Header>

      <Content>
        <HeaderDesktop>
          <p>{selectLanguage === 0 ? <p>Perfil</p> : selectLanguage === 1 ? <p>Profile</p> : <p>Perfil</p>}</p>
          <ButtonCloseHeader />
        </HeaderDesktop>

        <Main>
          <AreaInput>
            <label>{selectLanguage === 0 ? "Escolha o idioma" : selectLanguage === 1 ? "Choose Language" : "Elige lengua"}:</label>
              
            <SelectIdioma
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: isOpen ? defaultTheme["red-200"] : "",
              }}
            >
              <SelectTitle style={{
                borderColor: isOpen && defaultTheme["gray-700"],
              }}>
                {selectLanguage === 0 ? <img src={Brazil} alt="" /> : selectLanguage === 1 ? <img src={Eua} alt="" /> : <img src={Spain} alt="" />}
                {selectLanguage === 0 ? <p>Português</p> : selectLanguage === 1 ? <p>English</p> : <p>Spanish</p>}
                <img src={arrowBottom} alt="" />
              </SelectTitle>
              {isOpen && 
                <SelectUl>
                  <SelectLi onClick={() => handleSelectLanguage(0)}>Português</SelectLi>
                  <SelectLi onClick={() => handleSelectLanguage(1)}>English</SelectLi>
                  <SelectLi onClick={() => handleSelectLanguage(2)}>Spanish</SelectLi>
                </SelectUl>
              }
            </SelectIdioma>
          </AreaInput>

          <AreaInput>
            <label>{selectLanguage === 0 ? "Nome" : selectLanguage === 1 ? "Name" : "Nombre"}:</label>
            <Input>
              <img src={userImg} alt="icon user" />
              <p>Camila Eduarda Campos</p>
            </Input>
          </AreaInput>

          <Div>
            <AreaInput>
              <label>{selectLanguage === 0 ? "Data de nascimento" : selectLanguage === 1 ? "Date of birth" : "Fecha de nacimiento"}:</label>
              <Input>
                <img src={data} alt="icon data" />
                <p>07/08/1995</p>
              </Input>
            </AreaInput>

            <AreaInput>
              <label>{selectLanguage === 0 ? "Unidade" : selectLanguage === 1 ? "Local" : "Local"}:</label>
              <Input >
                <img src={escola} alt="icon school" />  
                <p>São Paulo</p>
              </Input>
            </AreaInput>
          </Div>

          <AreaInput>
            <label>{selectLanguage === 0 ? "E-mail" : selectLanguage === 1 ? "E-mail" : "E-mail"}:</label>
            <Input>
              <img src={mail} alt="icon e-mail" />
              <p>camila@email.com</p>
            </Input>
          </AreaInput>
        </Main>

        <AreaFooterMiddleH />
      </Content>
    </Container>
  )
}