import * as Dialog from "@radix-ui/react-dialog";

import { LineSeparator } from "../../../../components/LineSeparator";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, CloseEnter, Main, Header, MainInside } from "./styles";
import { defaultTheme } from "../../../../themes/defaultTheme";

export const ModalReveal = ({ onPress }) => {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <img src={xImg} alt="x" />
        </Close>
        <Header>
          <p>Reveal lyrics</p>
        </Header>

        <Main>
         <LineSeparator wl={isDesktop ? "500px" : "250px"} bg={defaultTheme["green-400"]} />
          <MainInside>
            <p>Buy</p>
            <p>Letters</p>
            <p>For</p>
            <p style={{color: defaultTheme["blue-300"]}}>5 Dollars.</p>
          </MainInside>
         <LineSeparator wl={isDesktop ? "500px" : "250px"} bg={defaultTheme["green-400"]} />
        </Main>

        <CloseEnter onClick={onPress}>
          OK
        </CloseEnter>
      </Content>
    </Dialog.Portal>
  )
}