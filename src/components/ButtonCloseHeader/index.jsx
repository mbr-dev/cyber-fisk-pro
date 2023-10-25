import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function ButtonCloseHeader(props) {
  const navigate = useNavigate();
  
  const alterPage = () => {
    navigate(-1);
  }

  return (
    <Container onClick={() => {alterPage()}}>
      <X size={18} strokeWidth={3} />
    </Container>
  )
}