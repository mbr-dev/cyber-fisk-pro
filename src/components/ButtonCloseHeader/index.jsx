import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function ButtonCloseHeader() {
  const navigate = useNavigate();
  
  function alterPage(){
    console.log('TESTE');
    const page = localStorage.getItem("lastAccess");
    navigate(`/${page}`);
  }

  return (
    <Container onClick={() => {alterPage()}}>
      <X size={18} strokeWidth={2.5} />
    </Container>
  )
}