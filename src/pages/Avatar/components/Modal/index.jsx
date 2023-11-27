import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";

import { CyberContext } from "../../../../context/cyber";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, CloseNo, Main, Header, Button, Div } from "./styles";

export const Modal = () => {
  const { selectLanguage } = useContext(CyberContext);

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <img src={xImg} alt="x" />
        </Close>
        <Header>
          <p>{selectLanguage === 0 ? "Palavra chave" : selectLanguage === 1 ? "Answer Key" : "Clave de respuestas"}</p>
        </Header>

        <Main>
          <p>Wow, great choice.</p>
          <p>Do you want to buy it?</p>
        </Main>

        <Div>
          <Button>
            YES
          </Button>
          <CloseNo>
            NO
          </CloseNo>
        </Div>
      </Content>
    </Dialog.Portal>
  )
}