import * as Dialog from "@radix-ui/react-dialog";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, CloseEnter, Main, Header, Separator, Text } from "./styles";

export const ModalAC = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <img src={xImg} alt="X" />
        </Close>
        <Header>
          <p>Access</p>
        </Header>
        <Main>
          <Text>
            <p>Last Access: <span>05/03/2023</span></p>
            <p>Session time: <span>(Time spent in the last activity/lesson that the student did)</span></p>
          </Text>
          <Separator>
            <h2>Lesson 3</h2>
          </Separator>
          <Text>
            <p>Task 1: <span style={{ marginLeft: "2rem"}}>00:00</span></p>
            <p>Task 2: <span style={{ marginLeft: "2rem"}}>00:00</span></p>
            <p>Super Task: <span>00:00</span></p>
          </Text>
        </Main>
        <CloseEnter>OK</CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}