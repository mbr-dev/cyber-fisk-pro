import { useContext } from "react";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";

import { Container, Bracos, Cabeca, Face, Tronco , Antena, Oculos } from "./styles";

export const AvatarCustomMetadeIcon = () => {
  const { acessorios, cabeca, face, bracos, tronco, pernas, pets, hasSword, hasBag } = useContext(CyberContext);

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
        <img src={`${URL_FISKPRO}/images/avatar/face/${face}.png`} alt="" />
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
    </Container>
  )
}