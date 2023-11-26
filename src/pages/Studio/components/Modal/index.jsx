import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { CyberContext } from "../../../../context/cyber";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, CloseEnter, Main, Header } from "./styles";

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
          <div>
            <p>How are you?</p>
            <span>Fine, Thanks./ I’m ok. / Pretty Good.</span>
            <p>What’s your name?</p>
            <span>my name is mike ross.</span>
          </div>
          <div>
            <p>Are you from Brazil?</p>
            <span>no, i am not.</span>
            <p>Do you live in Australia?</p>
            <span>yes, i do.</span>
          </div>
        </Main>

        <CloseEnter>
          OK
        </CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}