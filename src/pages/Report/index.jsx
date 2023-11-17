import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { HeaderText } from "../../components/HeaderText";

import Robo from "../../assets/avatarRobo.png";
import arrowBottom from "./img/arrowBottom.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, XP, AreaSelect, Select, SelectLi, SelectTitle, SelectUl, AvatarInfo2, Avatar2 } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const handleRI = () => {
    navigate("/ReportInfo");
  }

  return (
    <Container>
      <HeaderText title="Report" />

      <Main>
        <AvatarArea>
          {isDesktop ?
            <AvatarInfo2>
              <Avatar2>
                <img src={Robo} alt="" />
              </Avatar2>
              <p>Carlos Alberto</p>
            </AvatarInfo2>
            :
            <AvatarInfo>
              <Avatar>
                <img src={Robo} alt="" />
              </Avatar>
              <p>Carlos Alberto</p>
            </AvatarInfo>}
        </AvatarArea>

        <XP>
          <p className="compose">Compose</p>
        </XP>

        <AreaSelect>
          <Select
            onClick={() => setIsOpen(!isOpen)}
            style={{
              backgroundColor: isOpen ? defaultTheme["gray-200"] : "",
            }}
          >
            <SelectTitle>
              <p>Books</p>
              <img src={arrowBottom} alt="" />
            </SelectTitle>
            {isOpen && 
              <SelectUl>
                <SelectLi onClick={handleRI}>1</SelectLi>
              </SelectUl>
            }
          </Select>
        </AreaSelect>

        <FooterBtnHome />
      </Main>
    </Container>
  )
}