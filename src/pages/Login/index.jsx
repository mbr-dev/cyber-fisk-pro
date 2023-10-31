import { useState, useEffect } from "react";
import { useContext } from "react";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

import { Footer } from "../../components/Footer";
import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";

import { CyberContext } from "../../context/cyber";
import { translateLogin } from "../../utils/Translate";

import logoImg from "./image/logo.png";
import Eua from "../../assets/Eua.svg";
import Spain from "../../assets/Spain.svg";
import Brazil from "../../assets/Brazil.svg";
import arrowBottom from "../../assets/arrowBottom.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Notifications } from "../../components/Notifications";
import { Loading } from "../../components/Loading";
import { Mensagens } from "../../utils/Mensagens";

import { Container, Main, Header, Form, AreaInput, Input, SelectIdioma, SelectTitle, SelectLi, SelectUl } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";
import { apiQAS } from "../../lib/api";

export const Login = () => {
  const { selectLanguage, chooseLanguage, signIn, chooseNotification } = useContext(CyberContext);

  const navigate = useNavigate();

  const [raf, setRaf] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);

  const handleSelectLanguage = (item) => {
    chooseLanguage(item)
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
        .then(async(resp) =>{
          setLoading(false);
          console.log("resp ==> ", resp);
          setError(false);
          if(resp.succeeded){
            const cookies = new Cookies();
            cookies.set("token", resp.data[0].cd_professor, { path: '/' });
            cookies.set("raf", raf, { path: '/' });
            await salvarAcesso(raf);
            //navigate("/home");
          }else{
            console.log("login invalido ");
            setLoading(false);
            chooseNotification(3);
            setMsgError(resp.message);
            setError(true);
            if(resp.message === "Network Error"){
              const cookies = new Cookies();
              cookies.set("token", 'A123', { path: '/' });
              cookies.set("raf", raf, { path: '/' });
              await salvarAcesso(raf);
              //navigate("/home");
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

  const salvarAcesso = async(raf) => {
    try {
      await apiQAS.get(`/LogAcesso/Registrar?raf=${raf}&projeto=cyber_pro_web`)
      .then((resp) => {
        if(resp.data.erro === null){
          setLoading(false);
          setError(false);
          navigate(`/Home`);
        }else{
          setLoading(false);
          chooseNotification(3);
          setMsgError('Falha ao gravar o acesso do usuário!');
          setError(true);
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
    const raf = cookies.get("raf");
    if(token){
      salvarAcesso(raf);
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
        </Form>
        
      </Main>

      <LineSeparator w="80%" bg={defaultTheme["gray-200"]}  />
      <ButtonBg
        title={selectLanguage === 0 ? translateLogin[0].labelButton : selectLanguage === 1 ? translateLogin[1].labelButton : translateLogin[2].labelButton}
        form="myForm"
        greenBtn
        type="submit"
        w="15.875rem"
        h="2.5rem"
        mb="12px"
        mt="12px"
        onPress={handleSignIn}
      />
      <Footer />
    </Container>
  )
}