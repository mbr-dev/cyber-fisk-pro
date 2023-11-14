import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { HeaderText } from "../../components/HeaderText";

import Robo from "../../assets/avatarRobo.png";
import arrowBottom from "./img/arrowBottom.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, XP, AreaSelect, SelectIdioma, SelectLi, SelectTitle, SelectUl, AvatarInfo2, Avatar2 } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

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
          <LineSeparator wl={isDesktop ? "800px" : "18.5rem"} bg={defaultTheme["gray-200"]} mt="0" mb="0" />

          <p className="compose">Compose</p>

          <LineSeparator wl={isDesktop ? "800px" : "18.5rem"} bg={defaultTheme["gray-200"]} mt="0" mb="0" />
        </XP>

        <AreaSelect>
          <SelectIdioma
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
          </SelectIdioma>
        </AreaSelect>

        <FooterBtnHome 
          fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
          wl={isDesktop ? "48%" : "80%"}
          hasLS
          w={isDesktop ? "450px" : isTablet ? "400px" : ""}
          h={isDesktop ? "52px" : isTablet ? "48px" : ""}
        />
      </Main>
    </Container>
  )
}