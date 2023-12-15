import Cookies from "universal-cookie";
import { useContext, useState, useEffect } from "react";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";

import { Container, Bracos, Cabeca, Face, Tronco , Antena, Oculos, Name } from "./styles";

export const AvatarCustomMetadeWG = ({ hasName }) => {
  const { acessorios, cabeca, face, bracos, tronco, pernas, pets, hasSword, hasBag } = useContext(CyberContext);
  const [name, setName] = useState("");

  useEffect(()=>{
    const cookies = new Cookies();
    const raf = cookies.get("raf");
    if(raf){
      setName(raf);
    }
  }, []);

  return (
    <Container>
      {acessorios.chapeu !== null &&
        <Antena>
          <img src={`${URL_FISKPRO}/images/avatar/acessorios/${acessorios.chapeu}.png`} alt="" />
        </Antena>
      }

      <Cabeca>
        <img src={`${URL_FISKPRO}/images/avatar/cabecas/${cabeca}.png`} alt="" />
      </Cabeca>

      <Face>
        <img src={`${URL_FISKPRO}/images/avatar/face/${face}.png`} alt="Expressão facial" />
      </Face>

      {acessorios.oculos !== null &&
        <Oculos>
          <img src={`${URL_FISKPRO}/images/avatar/acessorios/${acessorios.oculos}.png`} alt="" />
        </Oculos>
      }

      <Bracos>
        {hasSword ? 
          <img src={`${URL_FISKPRO}/images/avatar/bracos_espada/${bracos}.png`} alt="" />
          :
          <img src={`${URL_FISKPRO}/images/avatar/bracos/${bracos}.png`} alt="" />
        }
      </Bracos>

      <Tronco>
        {hasBag ? 
          <img src={`${URL_FISKPRO}/images/avatar/tronco_mochila/${tronco}.png`} alt="" />
          :  
          <img src={`${URL_FISKPRO}/images/avatar/tronco/${tronco}.png`} alt="" />
        }
      </Tronco>

      {hasName &&
        <Name>
          <p>{name}</p>
        </Name>
      }
    </Container>
  )
}