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
import Buddy from "../../assets/Buddy.png";
import Youtube from "../../assets/Youtube.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Facebook.png";

import { Notifications } from "../../components/Notifications";
import { Loading } from "../../components/Loading";
import { Mensagens } from "../../utils/Mensagens";

import { Container, Main, Header, Form, AreaInput, Input, SelectIdioma, SelectTitle, SelectLi, SelectUl, FooterBlue, AreaButton } from "./styles";
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

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isDesktopUltra = window.matchMedia("(min-width: 2560px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

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

        {isDesktop && <img src={Buddy} alt="" className="buddyImg" />}
        {isDesktop && 
          <FooterBlue>
            {
              selectLanguage === 0 ? <p>Para dicas e informações</p> : selectLanguage === 1 ?  <p>For tips and information</p> : <p>Para consejos e información</p>
            }
            
            <div>
              <img src={Youtube} alt="Youtube" />
              <img src={Instagram} alt="Instagram" />
              <img src={Facebook} alt="Facebook" />
            </div>
          </FooterBlue>
        }
      </Header>

      <Main>
        <Form onKeyDown={(e) => {e.keyCode === 13 ? handleSignIn() : null}}>
          {error ? 
            <Notifications description={msgError} event={clickAlert}/> : null
          }
          <AreaInput>
          {selectLanguage === 0 ? <label>{translateLogin[0].name}:</label> : selectLanguage === 1 ? <label>{translateLogin[1].name}:</label> : <label>{translateLogin[2].name}:</label>}
            <User size={isDesktop ? 24 : isTablet ? 20 :  16} strokeWidth={2.5} />
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
            <Lock size={isDesktop ? 24 : isTablet ? 20 :  16} strokeWidth={2.5} />
            {!viewPass ?
              <EyeOff size={isDesktop ? 24 : isTablet ? 20 :  16} strokeWidth={2.5} className="eye" onClick={() => {passView()}}/>
              :
              <Eye size={isDesktop ? 24 : isTablet ? 20 :  16} strokeWidth={2.5} className="eye" onClick={() => {passView()}}/>  
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

        <AreaButton>
          <LineSeparator wl={isDesktopUltra ? "85%" :  isDesktop ? "100%" : isTablet ? "500px" : "300px"} bg={defaultTheme["gray-200"]}  />
          <ButtonBg
            title={selectLanguage === 0 ? translateLogin[0].labelButton : selectLanguage === 1 ? translateLogin[1].labelButton : translateLogin[2].labelButton}
            form="myForm"
            greenBtn
            type="submit"
            w={isDesktop ? "450px" : isTablet ? "400px" : "250px"}
            h={isDesktop ? "52px" : isTablet ? "48px" : "36px"}
            mb={isDesktop ? "28px" : "12px"}
            mt={isDesktop ? "28px" : "12px"}
            fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
            onPress={handleSignIn}
          />
        </AreaButton>
      </Main>

      {!isDesktop && <Footer />}
    </Container>
  )
}