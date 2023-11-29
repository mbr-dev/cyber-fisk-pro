import Cookies from "universal-cookie";
import { useEffect, useState } from "react";

import antenaImg from "./images/Antena/Antena_1.png";
import cabecaImg from "./images/Cabeca/Cabeca_1.png";
import faceImg from "./images/Face/Expressao_4.png";
import oculosImg from "./images/Oculos/1_oculos_netro.png";
import bracosImg from "./images/Bracos/Bracos_4.png";
import troncoImg from "./images/Tronco/Tronco_Branco_modelo_2_Laranja.png";

import { Container, Bracos, Cabeca, Face, Tronco , Antena, Oculos, Name } from "./styles";

export const AvatarCustomMetadeWG = ({ hasName }) => {
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

      {hasName &&
        <Name>
          <p>{name}</p>
        </Name>
      }
    </Container>
  )
}