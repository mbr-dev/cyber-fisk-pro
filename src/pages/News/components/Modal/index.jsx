import * as Dialog from "@radix-ui/react-dialog";

import { LineSeparator } from "../../../../components/LineSeparator";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, Enter, Main, Header, Div, DivRow, Input, DivInside, DivCheck } from "./styles";
import { defaultTheme } from "../../../../themes/defaultTheme";

export const Modal = ({ rule }) => {

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Close>
          <img src={xImg} alt="x" />
        </Close>
        <Header>
          <p>Select Filter</p>
        </Header>

        <Main>
          <DivRow>
            {(rule === "Aluno" || rule === "Professor" || rule === "Admin") &&
              <DivInside>
                <Div>
                  <p>Start Date</p>
                  <Input type="date" placeholder="00/00/0000" />
                </Div>
                <Div>
                  <p>Finish Date</p>
                  <Input type="date" placeholder="00/00/0000" />
                </Div>
              </DivInside>
            }
            <LineSeparator wl="100%" bg={defaultTheme["gray-200"]} />
          </DivRow>

          <DivRow>
            {(rule === "Professor" || rule === "Admin") &&
              <DivCheck>
                <input type="checkbox" />
                <p>Only from teachers</p>
              </DivCheck>
            }
            {rule === "Admin" &&
              <DivCheck>
                <input type="checkbox" />
                <p>Only from coordinators</p>
              </DivCheck>
            }
          </DivRow>
          <Enter>Filter</Enter>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}