import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export const ButtonBg = ({ title, hasIcon, disabledButton, onPress, greenBtn, type="button", mt, form, w, h }) => {  
  return (
    <Container 
      onClick={onPress}
      $greenBtn={greenBtn}
      type={type}
      form={form}
      style={{
        marginTop: mt,
        height: h,
        width: w
      }}
      disabled={disabledButton}
      >
      <p>{title}</p>
    </Container>
  )
}