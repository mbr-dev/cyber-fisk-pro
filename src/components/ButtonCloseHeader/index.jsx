import { useNavigate } from "react-router-dom";

import xImg from "../../assets/xImg.png";

import { Container } from "./styles";

export function ButtonCloseHeader() {
  const navigate = useNavigate();
  
  const alterPage = () => {
    navigate(-1);
  }

  return (
    <Container onClick={() => {alterPage()}}>
      <img src={xImg} alt="" />
    </Container>
  )
}