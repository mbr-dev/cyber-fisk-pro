import { Container } from "./styles";

export const ButtonBg = ({ title, disabledButton, onPress, greenBtn, type="button", mt, form, w, h, mb, fs }) => {  
  return (
    <Container 
      onClick={onPress}
      $greenBtn={greenBtn}
      type={type}
      form={form}
      style={{
        marginTop: mt,
        height: h,
        width: w,
        marginBottom: mb,
      }}
      disabled={disabledButton}
      >
      <p style={{
        fontSize: fs ? fs : "20px",
      }}>{title}</p>
    </Container>
  )
}