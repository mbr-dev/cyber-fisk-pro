import { useContext } from "react";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";

import { Container, Bracos, Cabeca, Face, Tronco , Antena, Oculos } from "./styles";

export const AvatarCustomMetadeIcon = () => {
  const { acessorios, cabeca, face, bracos, tronco } = useContext(CyberContext);

  return (
    <Container>
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
    </Container>
  )
}