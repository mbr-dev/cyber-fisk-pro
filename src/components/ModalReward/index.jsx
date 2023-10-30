import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import BgMoney from "./images/fundo.png";
import Money from "./images/fiskDollar.png";
import Robo from "../../assets/avatarRobo.png";

import { Content, Close, Overlay, Main, Avatar, Position, Receive, Boost, Reward, MiniAvatar } from "./styles";

export const ModalReward = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={18} color="white" strokeWidth={3} />
        </Close>
        
        <Main>
          <Avatar>
            <img src={BgMoney} alt="" className="bgMoney" />
            <img src={Robo} alt="" className="avatarImg" />
          </Avatar>
          <Position>
            <p>1° Login</p>
          </Position>
          <Reward>
            <Receive>
              <img src={Money} alt="" />
              <p>Your received: <span>$20</span></p>
            </Receive>
            <Boost>
              <MiniAvatar>
                <img src={Robo} alt="" />
              </MiniAvatar>
              <p>Boost your avatar</p>
            </Boost>
          </Reward>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}