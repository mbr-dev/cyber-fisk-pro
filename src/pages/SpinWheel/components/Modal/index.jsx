import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { LineSeparator } from "../../../../components/LineSeparator";

import { defaultTheme } from "../../../../themes/defaultTheme";
import { Content, Overlay, Close, CloseEnter, Main, Header, Text } from "./styles";

export const Modal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={18} color="white" strokeWidth={3} />
        </Close>
        <Header>
          <p>How to play</p>
        </Header>
        <Main>
          <Text>
            <h2>SPIN THE WHEEL</h2>
            <p>You will have the chance to spin</p>
            <p>the wheel 2x to get Fisk dollars.</p>
          </Text>
          <LineSeparator w="16rem" bg={defaultTheme["blue-400"]} />
          <Text>
            <p><strong>1 spin:</strong> You spin the wheel every</p>
            <p>time you complete an activity</p>
          </Text>
          <LineSeparator w="16rem" bg={defaultTheme["blue-400"]} />
          <Text>
          <p><strong>2 spin:</strong> You spin the wheel when</p>
            <p>you have in any TASK (Task 1, Task</p>
            <p>2 or Super Task) on the first try.</p>
          </Text>
        </Main>
        <CloseEnter>OK</CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}