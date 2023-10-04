import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { CyberContext } from "../../../../context/cyber";
import { translateStudio } from "../../../../utils/Translate";

import { Content, Overlay, Close, CloseEnter, Main, Header } from "./styles";

export const Modal = () => {
  const { selectLanguage } = useContext(CyberContext);

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={18} color="white" strokeWidth={3} />
        </Close>
        <Header>
          <p>{selectLanguage === 0 ? translateStudio[0].modalTitle : selectLanguage === 1 ? translateStudio[1].modalTitle : translateStudio[2].modalTitle}</p>
        </Header>

        <Main>
          <p>How are you?</p>
          <span>Fine, Thanks./ I’m ok. / Pretty Good.</span>

          <p>What’s your name?</p>
          <span>my name is mike ross.</span>

          <p>Are you from Brazil?</p>
          <span>no, i am not.</span>

          <p>Do you live in Australia?</p>
          <span>yes, i do.</span>
        </Main>

        <CloseEnter>
          OK
        </CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}