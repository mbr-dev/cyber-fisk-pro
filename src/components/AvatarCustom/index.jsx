import antenaImg from "./images/Antena/Antena_1.png";
import cabecaImg from "./images/Cabeca/Cabeca_1.png";
import faceImg from "./images/Face/Expressao_2.png";
import oculosImg from "./images/Oculos/Oculos_Azul.png";
import headsetImg from "./images/Headset/Antena_3.png";
import bracosImg from "./images/Bracos/Bracos_3.png";
import troncoImg from "./images/Tronco/Tronco_Branco_modelo_2_Laranja.png";
import pernasImg from "./images/Pernas/Pernas_Branco_1_Azul.png";

import { Container, Bracos, Cabeca, Face, Pernas, Tronco , Antena, Headset, Oculos } from "./styles";

export const AvatarCustom = () => {
  return (
    <Container>
      <Antena>
        <img src={antenaImg} alt="" />
      </Antena>

      <Cabeca>
        <img src={cabecaImg} alt="" />
      </Cabeca>

      <Face>
        <img src={faceImg} alt="" />
      </Face>

      <Oculos>
        <img src={oculosImg} alt="" />
      </Oculos>

      <Headset>
        <img src={headsetImg} alt="" />
      </Headset>

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