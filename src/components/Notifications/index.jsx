import { useContext } from "react";

import { CyberContext } from "../../context/cyber"

import FrameImg from "./images/Frame.svg";
import AttentionImg from "./images/Attention.svg";
import SuccessImg from "./images/Success.svg";
import InformationImg from "./images/Information.svg";

import { NotificationsContainer, NotificationsHeader, NotificationsContent, NotificationsMain } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Notifications = (props) => {
  const { notifications } = useContext(CyberContext);

  let colorStyles = {};

  switch (notifications) {
    case 0:
      colorStyles.backgroundColor = defaultTheme["green-300"];
      break;
    case 1:
      colorStyles.backgroundColor = defaultTheme["blue-200"];
      break;
    case 2:
      colorStyles.backgroundColor = defaultTheme["yellow-200"];
      break;
    case 3:
      colorStyles.backgroundColor = defaultTheme["red-200"];
      break;
    default:
      break;
  }

  return (
    <NotificationsContainer>
      <NotificationsContent>
        <NotificationsHeader 
          style={colorStyles} 
        >
          {notifications === 0 && <p>Sucesso</p>}
          {notifications === 1 && <p>Informação</p>}
          {notifications === 2 && <p>Atenção</p>}
          {notifications === 3 && <p>Error</p>}
        </NotificationsHeader>

        <NotificationsMain>
          {notifications === 0 && <img src={SuccessImg} alt="" />}
          {notifications === 1 && <img src={InformationImg} alt="" />}
          {notifications === 2 && <img src={AttentionImg} alt="" />}
          {notifications === 3 && <img src={FrameImg} alt="" />}

          <p>{props.description}</p>
        </NotificationsMain>
      </NotificationsContent>
      <button style={colorStyles} onClick={() => {props.event()}}>
        OK
      </button>
    </NotificationsContainer>
  )
}