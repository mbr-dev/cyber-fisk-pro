import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { AvatarCustomMetadeWG } from "../AvatarCustomMetadeWG";
import { AvatarCustomMetadeIcon } from "../AvatarCustomMetadeIcon";

import BgMoneyImg from "./images/fundo.png";
import BgModalRewardImg from "./images/fundoModalReward.png";
import Money from "./images/fiskDollar.png";
import xImg from "../../assets/xImg.png";

import { Content, Close, Overlay, Main, Avatar, Position, Receive, Boost, Reward, MiniAvatar } from "./styles";

export const ModalReward = (props) => {
  const navigate = useNavigate();

  const handleUpdateAvatar = () => {
    navigate("/Rewards");
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <img src={BgModalRewardImg} alt="" className="bgModal" />
        <Close>
          <img src={xImg} alt="X" />
        </Close>
        
        <Main>
          <Avatar>
            <img src={BgMoneyImg} alt="" className="bgMoney" />
            <AvatarCustomMetadeWG />
          </Avatar>
          <Position>
            <p>1º Login</p>
          </Position>
          <Reward>
            <Receive>
              <img src={Money} alt="" />
              <p>Your received: <span>${props.valor}</span></p>
            </Receive>
            <Boost onClick={handleUpdateAvatar}>
              <MiniAvatar>
                <AvatarCustomMetadeIcon />
              </MiniAvatar>
              <p>Boost your avatar</p>
            </Boost>
          </Reward>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}