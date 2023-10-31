import { useContext, useState } from "react";
import { CalendarDays, Mail, School, User } from "lucide-react";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { HeaderTextImage } from "../../components/HeaderTextImage";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { translateProfile } from "../../utils/Translate";
import { CyberContext } from "../../context/cyber";

import Brazil from "../../assets/Brazil.svg";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import arrowBottom from "../../assets/arrowBottom.svg";

import { Container, Content, Main, Input, AreaInput, HeaderDesktop, Select, SelectIdioma, SelectLi, SelectTitle, SelectUl } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  const [isOpen, setIsOpen] = useState("");
  
  const isDesktop = window.matchMedia("(min-width: 1280px)").matches;

  const handleSelectLanguage = (item) => {
    chooseLanguage(item)
  }
  
  return(
    <Container>
      <HeaderTextImage hasAvatar hasLogo title={
        selectLanguage === 0 ? translateProfile[0].title : selectLanguage === 1 ? translateProfile[1].title : translateProfile[2].title
      } />

      <Content>
        {isDesktop && 
          <HeaderDesktop>
            <p>Profile</p>
            <ButtonCloseHeader />
          </HeaderDesktop>
        }
        <Main>
          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].selectLanguage}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].selectLanguage}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].selectLanguage}</label>}
              
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

            <User size={16} strokeWidth={2.5} />
            <Input type="text" placeholder="Camila Eduarda Campos" readOnly />
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].date}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].date}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].date}</label>}
            
            <CalendarDays size={16} strokeWidth={2.5} />
            <Input type="text" placeholder="07/08/1995" readOnly />
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].local}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].local}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].local}</label>}

            <School size={16} strokeWidth={2.5} />
            <Select readOnly className="selectState">
              <option value="portugues">São Paulo</option>
              <option value="portugues">Rio Janeiro</option>
            </Select>
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].email}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].email}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].email}</label>}
            <Mail size={16} strokeWidth={2.5} />
            <Input type="email" placeholder="camilaeduarda@gmail.com" readOnly />
          </AreaInput>
        </Main>

        <FooterBtnHome hasLS />
      </Content>
    </Container>
  )
}