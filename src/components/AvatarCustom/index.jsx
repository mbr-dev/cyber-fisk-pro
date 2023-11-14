import { Container, Bracos, Cabeca, Face, Pernas, Tronco } from "./styles";

import cabecaImg from "./images/Cabeca/Cabeca_1.png";
import faceImg from "./images/Face/Expressao_7.png";
import bracosImg from "./images/Bracos/Bracos_2.png";
import troncoImg from "./images/Tronco/Tronco.png";
import pernasImg from "./images/Pernas/Pernas_2.png";

export const AvatarCustom = () => {
  return (
    <Container>
      <Cabeca>
        <img src={cabecaImg} alt="" />
      </Cabeca>

      <Face>
        <img src={faceImg} alt="" />
      </Face>

      <Bracos>
        <img src={bracosImg} alt="" />
      </Bracos>

      <Tronco>
        <img src={troncoImg} alt="" />
      </Tronco>

      <Pernas>
        <img src={pernasImg} alt="" />
      </Pernas>
    </Container>
  )
}