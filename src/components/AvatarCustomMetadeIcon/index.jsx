import antenaImg from "./images/Antena/Antena_1.png";
import cabecaImg from "./images/Cabeca/Cabeca_1.png";
import faceImg from "./images/Face/Expressao_4.png";
import oculosImg from "./images/Oculos/1_oculos_netro.png";
import bracosImg from "./images/Bracos/Bracos_3.png";
import troncoImg from "./images/Tronco/Tronco_Branco_modelo_2_Laranja.png";

import { Container, Bracos, Cabeca, Face, Tronco , Antena, Oculos } from "./styles";

export const AvatarCustomMetadeIcon = () => {
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

      <Bracos>
        <img src={bracosImg} alt="" />
      </Bracos>

      <Tronco>
        <img src={troncoImg} alt="" />
      </Tronco>
    </Container>
  )
}