import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { LineSeparator } from "../../../../components/LineSeparator";

import xImg from "../../../../assets/xImg.png";
import arrowBottom from "../../../Report/img/arrowBottom.png";

import { Content, Overlay, Close, CloseEnter, Main, Header, Div, DivRow, Input, DivInside, Select, SelectLi, SelectTitle, SelectUl, DivCheck } from "./styles";
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
          <DivRow>
            <DivInside>
              <Div>
                <p>Start Date</p>
                <Input placeholder="00/00/0000" />
              </Div>
              <Div>
                <p>Finish Date</p>
                <Input placeholder="00/00/0000" />
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

          <DivRow>
            <Div>
              <p>User</p>
              <Input />
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
          <CloseEnter>Filter</CloseEnter>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}