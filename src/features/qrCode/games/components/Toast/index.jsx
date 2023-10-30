import React from "react";
import IconSad from "../../../assets/icons/Icon_sad.png";
import IconHappy from "../../../assets/icons/Icon_Happy.png";

import { ToastContainer, ToastText, ToastIcon } from "./style";

export const Toast = (props) => {
  return (
    <ToastContainer $show={props.infoToast.show} $error={props.infoToast.error}>
      <ToastText>{props.infoToast.error ? "Try Again!" : "Good!"}</ToastText>
      <ToastIcon src={props.infoToast.error ? IconSad : IconHappy} />
    </ToastContainer>
  );
};
