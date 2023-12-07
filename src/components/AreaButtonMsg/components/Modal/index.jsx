import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { LineSeparator } from "../../../LineSeparator";

import xImg from "../../../../assets/xImg.png";
import arrowBottom from "../../../../pages/Report/img/arrowBottom.png";

import { Content, Overlay, Close, Enter, Main, Header, Div, DivRow, Input, DivInside, Select, SelectLi, SelectTitle, SelectUl, DivCheck, Right, Left } from "./styles";
import { defaultTheme } from "../../../../themes/defaultTheme";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Left>
            <DivRow>
              <DivInside>
                <Div>
                  <p>Start Date</p>
                  <Input type="date" />
                </Div>
                <Div>
                  <p>Finish Date</p>
                  <Input type="date" />
                </Div>
              </DivInside>
              <LineSeparator wl="100%" bg={defaultTheme["gray-200"]} />
            </DivRow>

            <DivRow>
              <Div>
                <p>Group</p>
                <Select
                  onClick={() => setIsOpen(!isOpen)}
                  style={{
                    backgroundColor: isOpen ? defaultTheme["gray-200"] : "",
                  }}
                >
                  <SelectTitle>
                    <p>Select group</p>
                    <img src={arrowBottom} alt="" />
                  </SelectTitle>
                  {isOpen && 
                    <SelectUl>
                      <SelectLi>1</SelectLi>
                    </SelectUl>
                  }
                </Select>
              </Div>
              <LineSeparator wl="100%" bg={defaultTheme["gray-200"]} />
            </DivRow>
          </Left>

          <Right>
            <DivRow>
              <Div>
                <p>User</p>
                <Input type="text" className="inputTxt" />
              </Div>
              <LineSeparator wl="100%" bg={defaultTheme["gray-200"]} />
            </DivRow>

            <DivRow>
              <DivCheck>
                <input type="checkbox" />
                <p>View messages from teachers</p>
              </DivCheck>
              <DivCheck>
                <input type="checkbox" />
                <p>View teachers’ messages to groups</p>
              </DivCheck>
              <DivCheck>
                <input type="checkbox" />
                <p>View your groups’ messages</p>
              </DivCheck>
            </DivRow>
          </Right>
        </Main>
        <Enter>Filter</Enter>
      </Content>
    </Dialog.Portal>
  )
}