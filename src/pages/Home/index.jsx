import { useContext, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { HeaderTextImage } from "../../components/HeaderTextImage";
import { ModalPronunciation } from "../../components/ModalPronunciation";
import { ButtonPronunciation } from "../../components/ButtonPronunciation";
import Cookies from 'universal-cookie';
import { apiQAS } from "../../lib/api";

import { CyberContext } from "../../context/cyber";
import { translateHome } from "../../utils/Translate";

import Livros from "../../assets/bookImage.png";
import Cursor from "../../assets/iconeImage.png";
import Medalha from "../../assets/medalhaImage.png";
import Micro from "../../assets/microImage.png";
import Note from "../../assets/noteImage.png";
import Reporte from "../../assets/reporteImage.png";
import { ModalReward } from "../../components/ModalReward";

import { Container, Main, Card, Cards } from "./styles";

export const Home = () => {
  const { selectLanguage } = useContext(CyberContext);
  const images = [Livros, Cursor, Medalha, Reporte, Note, Micro];
  const [modal, setModal] = useState(false);
  const [valor, setValor] = useState(0);
  const [salvou, setSalvou] = useState();
  const navigate = useNavigate();

  function alterPage(index){
    console.log('==> ', index);
    if(index === 0){
      localStorage.setItem("lastAccess","Books");
      navigate("/Books");
    }else if(index === 1){
      const page = localStorage.getItem("lastAccess");
      navigate(`/${page}`);
    }
    else if(index === 2){
      localStorage.setItem("lastAccess","Ranking");
      navigate("/Ranking");
    }
  }

  const verificaPremio = async() => {
    const cookies = new Cookies();
    const raf = cookies.get("raf");
    await apiQAS.get(`/LogAcesso/AcessoConsecutivo?raf=${raf}`)
    .then(async(resp) =>{
      if(resp.data.erro === null){
        console.log('VALOR: ', typeof(resp.data.Valor), ' ::', resp.data.Valor )
        if(resp.data.Valor > 0){
          setValor(resp.data.Valor);
          //salva a quantidade de dollars ganhos
          await apiQAS.get(`/FiskDolars/Registrar?raf=${raf}&tipo=credito&descricao=acesso&valor=${resp.data.Valor}`)
          .then((res) =>{
            if(res.data.erro === null){
              setModal(true);
            }
          })
        }
      }
    })
  }

  const fecharModal = () => {
    console.log('FECHAR');
    setModal(false);
  }

  useEffect(()=>{
    const cookies = new Cookies();
    const token = cookies.get("token");
    if(!token){
      navigate("/Login");
    }else{
      verificaPremio();
    }
  },[])

  return(
    <Container>
      <Dialog.Root open={modal} onOpenChange={setModal}>
        <ModalReward funcao={fecharModal} valor={valor}/>
      </Dialog.Root>
      <HeaderTextImage hasAvatar hasLogo enabledClose={true}/>
      <Main>
        
        <Cards>
          {translateHome.map((text, index) => {            
            return (
              index !== 5 ?
              <Card key={index} onClick={() => {alterPage(index)}}>
                <img src={images[index]} alt="" />
                {selectLanguage === 0 && <p>{text.name[0]}</p>}
                {selectLanguage === 1 && <p>{text.name[1]}</p>}
                {selectLanguage === 2 && <p>{text.name[2]}</p>}
              </Card>
              :
              <Dialog.Root>
                <Dialog.Trigger style={{border: 'none'}}>
                  <Card key={index}>
                    <img src={images[index]} alt="" />
                    {selectLanguage === 0 && <p>{text.name[0]}</p>}
                    {selectLanguage === 1 && <p>{text.name[1]}</p>}
                    {selectLanguage === 2 && <p>{text.name[2]}</p>}
                  </Card>
                </Dialog.Trigger>
                <ModalPronunciation />
              </Dialog.Root>
            )
          })}
        </Cards>
      </Main>

      {/* <Dialog.Root>
        <Dialog.Trigger>
          <ButtonPronunciation />
        </Dialog.Trigger>

        <ModalPronunciation />
      </Dialog.Root> */}
      <Footer />
    </Container>
  )
}