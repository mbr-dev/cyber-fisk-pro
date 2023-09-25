import { useContext } from "react";
import { CalendarDays, Mail, School, User } from "lucide-react";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import { profileTranslate } from "../../utils/Translate/profileTranslate";
import { CyberContext } from "../../context/cyber"

import Brazil from "../../assets/Brazil.svg";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";

import { Container, Main, Form, Input, AreaInput, Select } from "./styles";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  function handleSelectLanguage(e) {
    e.preventDefault()
    chooseLanguage(e)
  }
  
  return(
    <Container>
      {selectLanguage === 0 &&
        <TopMenuHeader hasAvatar hasLogo title="Perfil" />}
      {selectLanguage === 1 &&
        <TopMenuHeader hasAvatar hasLogo title="Profile" />}
      {selectLanguage === 2 &&
        <TopMenuHeader hasAvatar hasLogo title="Perfil" />}

      <Main>
        <Form>
          <AreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].selectLanguage}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].selectLanguage}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].selectLanguage}</label>}
            
            {selectLanguage === 0 && <img src={Brazil} alt="Flag Brazil" />}
            {selectLanguage === 1 && <img src={Eua} alt="Flag Eua" />}
            {selectLanguage === 2 && <img src={Spain} alt="Flag Espanha" />}
              
            <Select className="language" value={selectLanguage} onChange={handleSelectLanguage}>
              <option value="0" >Português</option>
              <option value="1">Inglês</option>
              <option value="2">Espanhol</option>
            </Select>
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].name}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].name}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].name}</label>}

            <User size={16} strokeWidth={2.5} />
            <Input type="text" placeholder="Camila Eduarda Campos" readOnly />
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].date}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].date}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].date}</label>}
            
            <CalendarDays size={16} strokeWidth={2.5} />
            <Input type="text" placeholder="07/08/1995" readOnly />
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].local}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].local}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].local}</label>}

            <School size={16} strokeWidth={2.5} />
            <Select readOnly className="selectState">
              <option value="portugues">São Paulo</option>
              <option value="portugues">Rio Janeiro</option>
            </Select>
          </AreaInput>

          <AreaInput>
            {selectLanguage === 0 && <label>{profileTranslate[0].email}</label>}
            {selectLanguage === 1 && <label>{profileTranslate[1].email}</label>}
            {selectLanguage === 2 && <label>{profileTranslate[2].email}</label>}
            <Mail size={16} strokeWidth={2.5} />
            <Input type="email" placeholder="camilaeduarda@gmail.com" readOnly />
          </AreaInput>
        </Form>
      </Main>

      <AreaButtonBottom title="Home" />
    </Container>
  )
}