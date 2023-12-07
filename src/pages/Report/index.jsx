import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import arrowBottom from "./img/arrowBottom.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, XP, AreaSelect, Select, SelectLi, SelectTitle, SelectUl, AvatarInfo2, Avatar2 } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";
import { AvatarCustomMetadeIcon } from "../../components/AvatarCustomMetadeIcon";

export const Report = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("Aluno");

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
          {(status === "Aluno" || status === "Professor" || status === "Adm") &&
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
          }

          {status === "Adm" &&
            <Select
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: isOpen ? defaultTheme["gray-200"] : "",
              }}
            >
              <SelectTitle>
                <p>Teacher</p>
                <img src={arrowBottom} alt="" />
              </SelectTitle>
              {isOpen && 
                <SelectUl>
                  <SelectLi onClick={handleRI}>1</SelectLi>
                </SelectUl>
              }
            </Select>
          }
          {(status === "Professor" || status === "Adm") &&
            <Select
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: isOpen ? defaultTheme["gray-200"] : "",
              }}
            >
              <SelectTitle>
                <p>Group</p>
                <img src={arrowBottom} alt="" />
              </SelectTitle>
              {isOpen && 
                <SelectUl>
                  <SelectLi onClick={handleRI}>1</SelectLi>
                </SelectUl>
              }
            </Select>
          }
          {(status === "Professor" || status === "Adm") &&
            <Select
              onClick={() => setIsOpen(!isOpen)}
              style={{
                backgroundColor: isOpen ? defaultTheme["gray-200"] : "",
              }}
            >
              <SelectTitle>
                <p>Student</p>
                <img src={arrowBottom} alt="" />
              </SelectTitle>
              {isOpen && 
                <SelectUl>
                  <SelectLi onClick={handleRI}>1</SelectLi>
                </SelectUl>
              }
            </Select>
          }
        </AreaSelect>

        <AreaFooterFullBtn />
      </Main>
    </Container>
  )
}