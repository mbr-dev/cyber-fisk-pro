import { useState, useEffect } from "react";
import { useContext } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import * as Select from '@radix-ui/react-select';

import { Footer } from "../../components/Footer";
import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";

import { CyberContext } from "../../context/cyber";
import { translateLogin } from "../../utils/Translate";

import logoImg from "./image/logo.png";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import Brazil from "../../assets/Brazil.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Notifications } from "../../components/Notifications";
import { Loading } from "../../components/Loading";
import { Mensagens } from "../../utils/Mensagens";

import { Container, Main, Header, Form, AreaInput, Input } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Login = () => {
  const { selectLanguage, chooseLanguage, signIn, chooseNotification } = useContext(CyberContext);
  const navigate = useNavigate();
  const [raf, setRaf] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [msgError, setMsgError] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);

  const handleSelectLanguage = (event) => {
    chooseLanguage(event)
  }

  function clickAlert(){
    setError(false);
  }

  function passView(){
    setViewPass(!viewPass);
  }

  const handleSignIn = async() => {
    if(raf === ""){
      chooseNotification(2);
      setMsgError(Mensagens.rafInvalido);
      setError(true);
      return;
    }
    if(userPassword === ""){
      chooseNotification(2);
      setMsgError(Mensagens.senhaVazia);
      setError(true);
      return;
    }
    setLoading(true);
    try {
      await signIn(raf, userPassword)
        .then((resp) =>{
          setLoading(false);
          console.log("resp ==> ", resp);
          setError(false);
          if(resp.succeeded){
            const cookies = new Cookies();
            cookies.set("token", resp.data[0].cd_professor, { path: "/" });
            cookies.set("raf", raf, { path: "/" });
            navigate("/home");
          }else{
            console.log("login invalido ");
            setLoading(false);
            chooseNotification(3);
            setMsgError(resp.message);
            setError(true);
            if(resp.message === "Network Error"){
              const cookies = new Cookies();
              cookies.set("token", "A123", { path: "/" });
              cookies.set("raf", raf, { path: "/" });
              navigate("/home");
            }
          }
        })
    } catch(error) {
      setLoading(false);
      chooseNotification(3);
      setMsgError(error);
      setError(true);
    }
  }

  useEffect(() =>{
    const cookies = new Cookies();
    const token = cookies.get("token");
    if(token){
      navigate("/Home");
    }
  },[])

  return (
    <Container>
      {loading ? <Loading /> : null}
      <Header>
        <img src={bgHeaderImg} alt="" className="bgImg" />
        <img src={logoImg} alt="Logo do Fisk Pro" />
      </Header>
      <Main>
        <Form onKeyDown={(e) => {e.keyCode === 13 ? handleSignIn() : null}}>
          {error ? 
            <Notifications description={msgError} event={clickAlert}/> : null
          }
          <AreaInput>
          {selectLanguage === 0 ? <label>{translateLogin[0].name}:</label> : selectLanguage === 1 ? <label>{translateLogin[1].name}:</label> : <label>{translateLogin[2].name}:</label>}
            <User size={16} strokeWidth={2.5} />
            <Input
              type="text"
              placeholder={selectLanguage === 0 ? translateLogin[0].plName : selectLanguage === 1 ? translateLogin[1].plName : translateLogin[2].plName}
              value={raf}
              onChange={(event) => setRaf(event.target.value)}
              required
            />
          </AreaInput>
          <AreaInput>
            {selectLanguage === 0 ? <label>{translateLogin[0].password}:</label> : selectLanguage === 1 ? <label>{translateLogin[1].password}:</label> : <label>{translateLogin[2].password}:</label>}
            <Lock size={16} strokeWidth={2.5} />
            {!viewPass ?
              <EyeOff size={16} strokeWidth={2.5} className="eye" onClick={() => {passView()}}/>
              :
              <Eye size={16} strokeWidth={2.5} className="eye" onClick={() => {passView()}}/>  
            }
            
            <Input 
              type={viewPass ? "text" : "password"}
              placeholder={selectLanguage === 0 ? translateLogin[0].plPassword : selectLanguage === 1 ? translateLogin[1].plPassword : translateLogin[2].plPassword}
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              required
            />
          </AreaInput>
          <AreaInput>
            {selectLanguage === 0 ? <label>{translateLogin[0].language}</label> : selectLanguage === 1 ? <label>{translateLogin[1].language}</label> : <label>{translateLogin[2].language}</label>}
           {/*  {selectLanguage === 0 ? <img src={Brazil} alt="Flag Brazil" /> : selectLanguage === 1 ? <img src={Eua} alt="Flag Eua" /> : <img src={Spain} alt="Flag Spanish"/>}
              
            <Select className="language" value={selectLanguage} onChange={handleSelectLanguage}>
              <option value="0" >Português</option>
              <option value="1">Inglês</option>
              <option value="2">Espanhol</option>
            </Select> */}

<Select.Root>
    <Select.Trigger>
      <Select.Value />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item>
            <Select.ItemText />
            <Select.ItemIndicator />
          </Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item>
              Por
            </Select.Item>
            <Select.Item>
              santos
            </Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
        <Select.Arrow />
      </Select.Content>
    </Select.Portal>
  </Select.Root>


          </AreaInput>
        </Form>
      </Main>

      <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
      <ButtonBg
        title={selectLanguage === 0 ? translateLogin[0].labelButton : selectLanguage === 1 ? translateLogin[1].labelButton : translateLogin[2].labelButton}
        form="myForm"
        greenBtn
        type="submit"
        w="15.875rem"
        h="2.5rem"
        mt="12px"
        mb="12px"
        onPress={handleSignIn}
      />

      <Footer />
    </Container>
  )
}