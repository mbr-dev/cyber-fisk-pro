import { AlignJustify } from "lucide-react";
import { useNavigate } from "react-router-dom";

import menuImg from "../../assets/menuImg.png";

import { Container } from "./styles";

export function ButtonMenuHeader() {
  const navigate = useNavigate();

  const menu = () => {
    navigate("/Menu");
  }

  return (
    <Container onClick={() =>{menu()}}>
      <img src={menuImg} alt="" />
    </Container>
  )
}