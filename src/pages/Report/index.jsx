import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { TopMenuHeader } from "../../components/TopMenuHeader";

import Robo from "../../assets/avatarRobo.png";
import PrintImg from "../../assets/print.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, Print, XP, Stage, Details, XPLeft, XPRight, XPDiv, XPInside, SLeft, SRight, DDiv } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Report = () => {
  return (
    <Container>
      <TopMenuHeader />
      
      <div>
        <AvatarArea>
          <AvatarInfo>
            <Avatar>
              <img src={Robo} alt="" />
            </Avatar>
            <p>Carlos Alberto</p>
          </AvatarInfo>
          <Print>
            <img src={PrintImg} alt="" />
            <p>Print Report</p>
          </Print>
        </AvatarArea>
      </div>

      <Main>
        <XP>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
          <XPDiv>
            <XPLeft>
              <XPInside>
                <span>XP:</span>
                <p>XXX</p>
              </XPInside>
              <XPInside>
                <span>FISK DOLLARS:</span>
                <p>XXX</p>
              </XPInside>
            </XPLeft>
            <XPRight><p>Access</p></XPRight>
          </XPDiv>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
        </XP>
        <Stage>
          <SLeft>
            <h2>Stage progress:</h2>

            <div></div>
          </SLeft>
          <SRight>
            <span>80%</span>
            <p>of lessons completed</p>
          </SRight>
        </Stage>
        <Details>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
          <DDiv>
            <div></div>
            <div>
              <h2>Listening</h2>

              <ul>
                <li>70% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00</li>
              </ul>
            </div>
          </DDiv>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
          <DDiv>
            <div></div>
            <div>
              <h2>Listening</h2>

              <ul>
                <li>70% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00</li>
              </ul>
            </div>
          </DDiv>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
        </Details>

        <ButtonBg title="Home" w="15.875rem" h="2.5rem" />
      </Main>
    </Container>
  )
}