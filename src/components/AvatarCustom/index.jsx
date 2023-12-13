import Cookies from "universal-cookie";
import { useEffect, useState, useContext } from "react";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";

import { Container, Bracos, Cabeca, Face, Pernas, Tronco , Antena, Oculos, Name, Pet } from "./styles";

export const AvatarCustom = ({ hasName, avatar }) => {
  const { acessorios, cabeca, face, bracos, tronco, pernas, pets } = useContext(CyberContext);
  const [name, setName] = useState("");

  useEffect(()=>{
    const cookies = new Cookies();
    const raf = cookies.get("raf");
    if(raf){
      setName(raf);
    }
  }, []);

  return (
    <Container style={{
      marginTop: avatar && "0px",
      position: "absolute"
    }}>
      {acessorios.chapeu !== null &&
        <Antena>
          <img src={`${URL_FISKPRO}/images/avatar/acessorios/${acessorios.chapeu}.png`} alt="" />
        </Antena>
      }

      <Cabeca>
        <img src={`${URL_FISKPRO}/images/avatar/Cabecas/${cabeca}.png`} alt="" />
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
        <img src={`${URL_FISKPRO}/images/avatar/bracos/${bracos}.png`} alt="" />
      </Bracos>

      <Tronco>
        <img src={`${URL_FISKPRO}/images/avatar/tronco/${tronco}.png`} alt="" />
      </Tronco>

      <Pernas>
        <img src={`${URL_FISKPRO}/images/avatar/pernas/${pernas}.png`} alt="" />
      </Pernas>

      {pets !== null &&
        <Pet>
          <img src={`${URL_FISKPRO}/images/avatar/pets/${pets}.png`} alt="" />
        </Pet>
      }

      {hasName &&
        <Name>
          <span>{name}</span>
        </Name>
      }
    </Container>
  )
}