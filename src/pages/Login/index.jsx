import { useContext } from "react";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { Notifications } from "../../components/Notifications";

import { apiQAS } from "../../lib/api";
import { Mensagens } from "../../utils/Mensagens";
import { CyberContext } from "../../context/cyber";

import logoImg from "./image/logo.png";
import EuaImg from "../../assets/Eua.svg";
import Buddy from "../../assets/Buddy.png";
import SpainImg from "../../assets/Spain.svg";
import Youtube from "../../assets/Youtube.png";
import BrazilImg from "../../assets/Brazil.svg";
import UserImg from "./image/user.png";
import CadeadoImg from "./image/cadeado.png";
import HideImg from "./image/hide.png";
import ViewImg from "./image/view.png";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import arrowBottomImg from "../../assets/arrowBottom.svg";
import bgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, Header, Form, AreaInput, Input, SelectIdioma, SelectTitle, SelectLi, SelectUl, FooterBlue, AreaButton, Button, FooterArea, DivInput } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Login = () => {
  const { selectLanguage, chooseLanguage, signIn, chooseNotification } = useContext(CyberContext);

  const navigate = useNavigate();

  const [raf, setRaf] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [msgError, setMsgError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewPass, setViewPass] = useState(false);

  const handleSelectLanguage = (item) => {
    chooseLanguage(item)
  }

  function clickAlert () {
    setError(false);
  }

  function passView () {
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
            localStorage.setItem("cyberPro_raf", raf);
            localStorage.setItem("cyberPro_idioma", selectLanguage);
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
              localStorage.setItem("cyberPro_raf", raf);
              localStorage.setItem("cyberPro_idioma", selectLanguage);
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
        <img src={logoImg} alt="Logo do Fisk Pro" className="logoFisk" />
        <img src={Buddy} alt="" className="buddyImg" />
        
        <FooterBlue>
          <p>{selectLanguage === 0 ? "Para dicas e informações" : selectLanguage === 1 ? "For tips and information" : "Para consejos e información"}</p>
          
          <div>
            <a href="https://www.youtube.com/@fiskoficial" target="_blank"><img src={Youtube} alt="Youtube" /></a>
            <a href="https://www.instagram.com/fiskoficial/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.facebook.com/fiskcentrodeensino/" target="_blank"><img src={Facebook} alt="Facebook" /></a>
          </div>
        </FooterBlue>
      </Header>

      <Main>
        <Form id="myForm" onSubmit={handleSignIn}>
          {error ? 
            <Notifications description={msgError} event={clickAlert}/> : null
          }
          <AreaInput>
            <label>{selectLanguage === 0 ? "Usuário" : selectLanguage === 1 ? "User" : "Usuario"} RAF:</label>
            <DivInput>
              <img src={UserImg} alt="Icon user" className="userImg" />
              <Input
                type="text"
                placeholder="RAF"
                value={raf}
                onChange={(event) => setRaf(event.target.value)}
                required
                />
            </DivInput>
          </AreaInput>

          <AreaInput>
            <label>{selectLanguage === 0 ? "Senha" : selectLanguage === 1 ? "Password" : "Contraseña"}:</label>
            <DivInput>
              <img src={CadeadoImg} alt="Icon locker"  />
              {!viewPass ?
                <img src={HideImg} className="eyesImg" onClick={() => {passView()}}/>
                :
                <img src={ViewImg}  className="eyesImg" onClick={() => {passView()}}/>  
              }
              <Input 
                type={viewPass ? "text" : "password"}
                placeholder={selectLanguage === 0 ? "Senha" : selectLanguage === 1 ? "Password" : "Contraseña"}
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
                required
              />
            </DivInput>
          </AreaInput>

          <AreaInput>
            <label>{selectLanguage === 0 ? "Escolha o idioma" : selectLanguage === 1 ? "Choose language" : "Elige lengua"}:</label>
            <SelectIdioma onClick={() => setIsOpen(!isOpen)} style={{
              backgroundColor: isOpen ? defaultTheme["red-200"] : "",
            }}>
              <SelectTitle style={{
                borderColor: isOpen && defaultTheme["gray-700"],
              }}>
                <img src={selectLanguage === 0 ? BrazilImg : selectLanguage === 1 ? EuaImg : SpainImg} alt="" />
                <p>{selectLanguage === 0 ? "Português" : selectLanguage === 1 ? "English" : "Spanish"}</p>
                <img src={arrowBottomImg} alt="" />
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

        <AreaButton>
          <Button form="myForm" type="submit">
            <p>{selectLanguage === 0 ? "Entrar" : selectLanguage === 1 ? "Login" : "Acceso"}</p>
          </Button>
        </AreaButton>
      </Main>

      <FooterArea>
        <Footer />
      </FooterArea>
    </Container>
  )
}