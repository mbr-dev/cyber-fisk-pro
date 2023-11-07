import { useContext, useState } from "react";
import { CalendarDays, Mail, School, User } from "lucide-react";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { translateProfile } from "../../utils/Translate";
import { CyberContext } from "../../context/cyber";

import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import RoboPe from "../../assets/roboPe.png";
import RoboWD from "../../assets/RoboWD.png";
import Brazil from "../../assets/Brazil.svg";
import LogoFisk from "../../assets/logoFisk2.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";
import arrowBottom from "../../assets/arrowBottom.svg";

import { Container, Content, Main, Input, Header, AreaInput, HeaderDesktop, Select, SelectIdioma, SelectLi, SelectTitle, SelectUl, TopHeader, BottomHeader, Avatar, Div } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  const [isOpen, setIsOpen] = useState("");
  
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const handleSelectLanguage = (item) => {
    chooseLanguage(item)
  }
  
  return(
    <Container>
      <Header>
        <img src={bgHeaderImg} alt="" className="bgHeaderImg" />
        <TopHeader>
          <ButtonMenuHeader />
          {!isDesktop &&
            <>
              {selectLanguage === 0 ? <p>{translateProfile[0].title}</p> : selectLanguage === 1 ? <p>{translateProfile[1].title}</p> : <p>{translateProfile[2].title}</p>}
            </>
          }
          {!isDesktop && <ButtonCloseHeader />}
        </TopHeader>

        {!isDesktop && 
          <BottomHeader>
            <Avatar>
              <img src={RoboWD} alt="" />
              <p>Maria Santos</p>
            </Avatar>
            <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
          </BottomHeader>}
        
        {isDesktop &&
          <Avatar>
            <img src={RoboPe} className="roboPe" alt="" />
            <p>Maria Santos</p>
          </Avatar>}
      </Header>

      <Content>
        {isDesktop && 
          <HeaderDesktop>
            {selectLanguage === 0 ? <p>{translateProfile[0].title}</p> : selectLanguage === 1 ? <p>{translateProfile[1].title}</p> : <p>{translateProfile[2].title}</p>}
            <ButtonCloseHeader />
          </HeaderDesktop>
        }
        <Main>
          <AreaInput>
            {selectLanguage === 0 ? <label>{translateProfile[0].selectLanguage}</label> : selectLanguage === 1 ? <label>{translateProfile[1].selectLanguage}</label> : <label>{translateProfile[2].selectLanguage}</label>}
              
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
            {selectLanguage === 0 && <label>{translateProfile[0].name}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].name}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].name}</label>}

            <User size={isDesktop ? 24 : 16} strokeWidth={2.5} />
            <Input type="text" placeholder="Camila Eduarda Campos" readOnly />
          </AreaInput>

          <Div>
            <AreaInput>
              {selectLanguage === 0 && <label>{translateProfile[0].date}</label>}
              {selectLanguage === 1 && <label>{translateProfile[1].date}</label>}
              {selectLanguage === 2 && <label>{translateProfile[2].date}</label>}
              
              <CalendarDays size={isDesktop ? 24 : 16} strokeWidth={2.5} />
              <Input type="text" className="dataInput" placeholder="07/08/1995" readOnly />
            </AreaInput>

            <AreaInput>
              {selectLanguage === 0 && <label>{translateProfile[0].local}</label>}
              {selectLanguage === 1 && <label>{translateProfile[1].local}</label>}
              {selectLanguage === 2 && <label>{translateProfile[2].local}</label>}

              <School size={isDesktop ? 24 : 16} strokeWidth={2.5} />
              <Select readOnly className="selectState">
                <option value="portugues">São Paulo</option>
              </Select>
            </AreaInput>
          </Div>

          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].email}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].email}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].email}</label>}
            <Mail size={isDesktop ? 24 : 16} strokeWidth={2.5} />
            <Input type="email" placeholder="camilaeduarda@gmail.com" readOnly />
          </AreaInput>
        </Main>

        <FooterBtnHome 
          fs={isDesktop && "32px"}
          wl={isDesktop ? "48%" : "80%"}
          hasLS
          w={isDesktop && "450px"}
          h={isDesktop && "52px"}
        />
      </Content>
    </Container>
  )
}