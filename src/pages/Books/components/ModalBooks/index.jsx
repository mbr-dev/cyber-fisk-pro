import * as Dialog from "@radix-ui/react-dialog";

import xImg from "../../../../assets/xImg.png";
import bookImg from "../../images/capa53.jpg";

import { Content, Close, Overlay, Button, Main } from "./styles";

export const ModalBooks = ({ onPress }) => {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Main>
          <Close>
            <img src={xImg} alt="X" />
          </Close>

          <img src={bookImg} alt="Book" />

          <Button onClick={onPress}><p>Essentials</p></Button>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}