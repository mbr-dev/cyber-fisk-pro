import { AlignJustify } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function ButtonMenuHeader() {
  const navigate = useNavigate();

  const menu = () => {
    navigate("/Menu");
  }

  return (
    <Container onClick={() =>{menu()}}>
      <AlignJustify size={18} strokeWidth={2.5} />
    </Container>
  )
}