import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { Content, Overlay, Close, CloseEnter, Main, Header } from "./styles";

export const ModalRL = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={18} color="white" strokeWidth={3} />
        </Close>
        <Header>
          <p>Report Lesson</p>
        </Header>
        <Main>
          <p>Lesson 1: 80%</p>
          <p>Lesson 2: 80%</p>
          <p>Lesson 3: 80%</p>
          <p>Lesson 4: 80%</p>
          <p>Lesson 5: 80%</p>
          <p>Lesson 6: 80%</p>
          <p>Lesson 7: 80%</p>
          <p>Lesson 8: 80%</p>
          <p>Lesson 9: 80%</p>
          <p>Lesson 10: 80%</p>
        </Main>
        <CloseEnter>OK</CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}