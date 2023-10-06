import { useContext } from "react";
import { User, Lock } from "lucide-react";

import { Footer } from "../../components/Footer";
import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";

import { CyberContext } from "../../context/cyber";
import { translateLogin } from "../../utils/Translate";

import logoImg from "./image/logo.png";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import Brazil from "../../assets/Brazil.svg";

import { Container, Main, Header, Select, Form, AreaInput, Input } from "./styles";

export const Login = () => {
  const { selectLanguage, chooseLanguage } = useContext(CyberContext);

  function handleSelectLanguage(event) {
    event.preventDefault();
    chooseLanguage(event)
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo do Fisk Pro" />
      </Header>
      <Main>
        <Form id="myForm">
          <AreaInput>
          {selectLanguage === 0 ? <label>{translateLogin[0].name}:</label> : selectLanguage === 1 ? <label>{translateLogin[1].name}:</label> : <label>{translateLogin[2].name}:</label>}
            <User size={16} strokeWidth={2.5} />
            <Input
              type="text"
              placeholder={selectLanguage === 0 ? translateLogin[0].plName : selectLanguage === 1 ? translateLogin[1].plName : translateLogin[2].plName}
              required
            />
          </AreaInput>
          <AreaInput>
            {selectLanguage === 0 ? <label>{translateLogin[0].password}:</label> : selectLanguage === 1 ? <label>{translateLogin[1].password}:</label> : <label>{translateLogin[2].password}:</label>}
            <Lock size={16} strokeWidth={2.5} />
            <Input 
              type="password"
              placeholder={selectLanguage === 0 ? translateLogin[0].plPassword : selectLanguage === 1 ? translateLogin[1].plPassword : translateLogin[2].plPassword}
              required
            />
          </AreaInput>
          <AreaInput>
            {selectLanguage === 0 ? <label>{translateLogin[0].language}</label> : selectLanguage === 1 ? <label>{translateLogin[1].language}</label> : <label>{translateLogin[2].language}</label>}
            {selectLanguage === 0 ? <img src={Brazil} alt="Flag Brazil" /> : selectLanguage === 1 ? <img src={Eua} alt="Flag Eua" /> : <img src={Spain} alt=""/>}
              
            <Select className="language" value={selectLanguage} onChange={handleSelectLanguage}>
              <option value="0" >Português</option>
              <option value="1">Inglês</option>
              <option value="2">Espanhol</option>
            </Select>
          </AreaInput>
        </Form>
        <LineSeparator w="18rem" />
          <ButtonBg
            title={selectLanguage === 0 ? translateLogin[0].labelButton : selectLanguage === 1 ? translateLogin[1].labelButton : translateLogin[2].labelButton}
            form="myForm"
            greenBtn
            type="submit"
            w="15.875rem"
            h="2.5rem"
          />
      </Main>
      <Footer />
    </Container>
  )
}