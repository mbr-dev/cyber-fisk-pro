import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import PlusImg from "./images/plusR.png";
import ArrowImg from "./images/arrowBottom.png";

import { Container, Main, Div, AreaButton, Button, Text, Select, SelectLi, SelectTitle, SelectUl } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Compose = () => {
  const [isOpen, setIsOpen] = useState(null);

  const navigate = useNavigate();

  const handleOpenSelect = (item) => {
    setIsOpen(modal => modal == item ? null : item);
  }

  const handleCancel = () => {
    navigate("/Messages");
  }

  return (
    <Container>
      <HeaderText title="Compose" />

      <Main>
        <Div>
          <Select
            onClick={() => handleOpenSelect("teacher")}
            style={{
              backgroundColor: isOpen === "teacher" ? defaultTheme["gray-200"] : "",
            }}
          >
            <SelectTitle>
              <p>Choose a teacher</p>
              <img src={ArrowImg} alt="" />
            </SelectTitle>
            {isOpen === "teacher" && 
              <SelectUl>
                <SelectLi>João</SelectLi>
                <SelectLi>Pedro</SelectLi>
              </SelectUl>
            }
          </Select>

          <Select
            onClick={() => handleOpenSelect("student")}
            style={{
              backgroundColor: isOpen === "student" ? defaultTheme["gray-200"] : "",
            }}
          >
            <SelectTitle>
              <p>Choose a student</p>
              <img src={ArrowImg} alt="" />
            </SelectTitle>
            {isOpen === "student" && 
              <SelectUl>
                <SelectLi>Maria</SelectLi>
                <SelectLi>Santos</SelectLi>
              </SelectUl>
            }
          </Select>
        </Div>

        <Text>
          <label>
            <img src={PlusImg} alt="" />
            <input type="file" />
          </label>
          <textarea placeholder="Enter Text" />
        </Text>
      </Main>

      <AreaButton>
        <Button>
          <p>Send</p>
        </Button>

        <Button onClick={handleCancel} $variant="red">
          <p>Cancel</p>
        </Button>
      </AreaButton>
    </Container>
  )
}