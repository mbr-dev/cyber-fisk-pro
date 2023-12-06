import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullH } from "../../components/AreaFooterFullH";

import arrowBottom from "./img/arrowBottom.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, XP, AreaSelect, Select, SelectLi, SelectTitle, SelectUl, AvatarInfo2, Avatar2 } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";
import { AvatarCustomMetadeIcon } from "../../components/AvatarCustomMetadeIcon";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleRI = () => {
    navigate("/ReportInfo");
  }

  return (
    <Container>
      <HeaderText title="Report" />

      <Main>
        <AvatarArea>
          <AvatarInfo2>
            <Avatar2>
              <AvatarCustomMetadeIcon />
            </Avatar2>
            <p>Carlos Alberto</p>
          </AvatarInfo2>

          <AvatarInfo>
            <Avatar>
              <AvatarCustomMetadeIcon />
            </Avatar>
            <p>Carlos Alberto</p>
          </AvatarInfo>
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

        <AreaFooterFullH />
      </Main>
    </Container>
  )
}