import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";


import xImg from "../../../../assets/xImg.png";
import arrowBottom from "../../../../pages/Report/img/arrowBottom.png";

import { Content, Overlay, Close, Enter, Main, Header, Div, Input, DivInside, Select, SelectLi, SelectTitle, SelectUl, DivCheck, DivInside2, Top, DivCheckRow } from "./styles";
import { defaultTheme } from "../../../../themes/defaultTheme";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRule, setUserRule] = useState("Admin");

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
          <Top>
            <DivInside>
              <Div>
                <p>Start Date</p>
                <input type="date" className="inputDate" />
              </Div>
              <Div>
                <p>Finish Date</p>
                <input type="date" className="inputDate" />
              </Div>
            </DivInside>

            <DivInside2>
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
              <Div>
                <p>User</p>
                <Input type="text" className="inputTxt" />
              </Div>
            </DivInside2>
          </Top>
          
          {userRule === "Admin" &&
            <DivCheckRow>
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
            </DivCheckRow>
          }
          <Enter>Filter</Enter>
        </Main>
      </Content>
    </Dialog.Portal>
  )
}