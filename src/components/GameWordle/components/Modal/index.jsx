import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { defaultTheme } from "../../../../themes/defaultTheme";
import { Content, Overlay, Close, CloseEnter, Main, Header, Text, Info, Row, Letter, Letters, Line } from "./styles";

export const Modal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <X size={18} color="white" />
        </Close>
        <Header>
          <p>How to play</p>
        </Header>

        <Main>
          <Text>
            <p>Guess THE <strong>WORD</strong> in 6 tries.</p>
            <p>A valid 5-letter word should be 
            entered each time. </p>
            <p>The color of the letters will change 
            to show how close you are to
            the correct word.</p>
          </Text>
          <Info>
            <Row>
              <Line />
              <Letter>
                <Letters style={{
                  backgroundColor: defaultTheme["green-300"],
                  borderColor: defaultTheme["green-200"],
                  color: defaultTheme.white,
                }}>T</Letters>
                <Letters>O</Letters>
                <Letters>I</Letters>
                <Letters>E</Letters>
                <Letters>S</Letters>
              </Letter>
              <p>‘’T’’ is in the word and in the correct place.</p>
            </Row>
            <Row>
              <Line />
              <Letter>
                <Letters>T</Letters>
                <Letters>O</Letters>
                <Letters style={{
                  backgroundColor: defaultTheme["yellow-300"],
                  borderColor: defaultTheme["yellow-400"],
                  color: defaultTheme.white,
                }}>I</Letters>
                <Letters>E</Letters>
                <Letters>S</Letters>
              </Letter>
              <p>‘’I’’ is in the word but in the wrong place.</p>
            </Row>
            <Row>
              <Line />
              <Letter>
                <Letters>T</Letters>
                <Letters>O</Letters>
                <Letters>I</Letters>
                <Letters>E</Letters>
                <Letters style={{
                  backgroundColor: defaultTheme["gray-500"],
                  borderColor: defaultTheme["gray-700"],
                  color: defaultTheme.white,
                }}>S</Letters>
              </Letter>
              <p>‘’S’’ is not in the word in any place.</p>
            </Row>
          </Info>
        </Main>

        <CloseEnter>
          OK
        </CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}