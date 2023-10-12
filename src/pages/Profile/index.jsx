import { useContext } from "react";
import { CalendarDays, Mail, School, User } from "lucide-react";

import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { TopMenuHeader } from "../../components/TopMenuHeader";

import { translateProfile } from "../../utils/Translate";
import { CyberContext } from "../../context/cyber";

import Brazil from "../../assets/Brazil.svg";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";

import { Container, Main, Form, Input, AreaInput, Select } from "./styles";

export const Profile = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  const handleSelectLanguage = (event) => {
    event.preventDefault();
    chooseLanguage(event)
  }
  
  return(
    <Container>
      <TopMenuHeader hasAvatar hasLogo title={
        selectLanguage === 0 ? translateProfile[0].title : selectLanguage === 1 ? translateProfile[1].title : translateProfile[2].title
      } />

      <Main>
        <Form>
          <AreaInput>
            {selectLanguage === 0 && <label>{translateProfile[0].selectLanguage}</label>}
            {selectLanguage === 1 && <label>{translateProfile[1].selectLanguage}</label>}
            {selectLanguage === 2 && <label>{translateProfile[2].selectLanguage}</label>}
            
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
          <LineSeparator w="100%" />
        </Form>
        <ButtonBg title="Home" w="15.875rem" h="2.5rem" />
      </Main>
    </Container>
  )
}