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
          <img src={`${URL_FISKPRO}/images/avatar/Acessorios/${acessorios.chapeu}.png`} alt="Acessórios" />
        </Antena>
      }

      <Cabeca>
        <img src={`${URL_FISKPRO}/images/avatar/Cabecas/${cabeca}.png`} alt="Cabeça" />
      </Cabeca>

      <Face>
        <img src={`${URL_FISKPRO}/images/avatar/Expressao_Robot/${face}.png`} alt="Expressão facial" />
      </Face>

      {acessorios.oculos !== null &&
        <Oculos>
          <img src={`${URL_FISKPRO}/images/avatar/Acessorios/${acessorios.oculos}.png`} alt="Oculos" />
        </Oculos>
      }

      <Bracos>
        <img src={`${URL_FISKPRO}/images/avatar/Bracos/${bracos}.png`} alt="Braços" />
      </Bracos>

      <Tronco>
        <img src={`${URL_FISKPRO}/images/avatar/Tronco/${tronco}.png`} alt="Tronco" />
      </Tronco>

      <Pernas>
        <img src={`${URL_FISKPRO}/images/avatar/Pernas/${pernas}.png`} alt="Pernas" />
      </Pernas>

      {pets !== null &&
        <Pet>
          <img src={`${URL_FISKPRO}/images/avatar/pets/${pets}.png`} alt="Pernas" />
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