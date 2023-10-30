import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { ModalAC } from "./components/ModalAC";
import { ModalRL } from "./components/ModalRL";
import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";
import { HeaderTextImage } from "../../components/HeaderTextImage";

import Robo from "../../assets/avatarRobo.png";
import PrintImg from "../../assets/print.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, Print, XP, Stage, Details, XPLeft, XPRight, XPDiv, XPInside, SLeft, SRight, DDiv, ViewDetails, DivBar, Bar, BarColor } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Report = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [progressL, setProgressL] = useState(60);
  const [progressR, setProgressR] = useState(10);
  const [progressW, setProgressW] = useState(45);
  const [progressS, setProgressS] = useState(80);

  const data = {
    labels: [],
    datasets: [
      {
        label: "Completed",
        data: [80, 20],
        backgroundColor: [
          defaultTheme["green-050"],
          defaultTheme["gray-200"],
        ],
        borderColor: [
          defaultTheme["green-300"],
          "transparent",
        ],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <Container>
      <HeaderTextImage title="Report" />
      
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
            <XPRight>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <p>Access</p>
                </Dialog.Trigger>

                <ModalAC />
              </Dialog.Root>
            </XPRight>
          </XPDiv>
          <LineSeparator w="18.5rem" bg={defaultTheme["gray-200"]} mt="0" mb="0" />
        </XP>

        <Stage>
          <SLeft>
            <h2>Stage progress:</h2>

            <Pie data={data} />
          </SLeft>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <SRight>
                <span>80%</span>
                <p>of lessons completed</p>
              </SRight>
            </Dialog.Trigger>

            <ModalRL />
          </Dialog.Root>
        </Stage>

        <Details>
          <DDiv>
            <DivBar>
              <Bar>
                <BarColor style={{
                  height: `${progressL}%`
                }}>
                  {progressL >= 20 && <span>{progressL}%</span>}
                </BarColor>
              </Bar>
              <p>view details</p>
            </DivBar>
            <ViewDetails>
              <h2>Listening</h2>

              <ul>
                <li>{progressL}% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00 spent on this skill</li>
              </ul>
            </ViewDetails>
          </DDiv>
          <DDiv>
            <DivBar>
              <Bar>
                <BarColor style={{
                  height: `${progressR}%`
                }}>
                  {progressR >= 20 && <span>{progressR}%</span>}
                </BarColor>
              </Bar>
              <p>view details</p>
            </DivBar>
            <ViewDetails>
              <h2>Reading</h2>

              <ul>
                <li>{progressR}% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00 spent on this skill</li>
              </ul>
            </ViewDetails>
          </DDiv>
          <DDiv>
            <DivBar>
              <Bar>
                <BarColor style={{
                  height: `${progressW}%`
                }}>
                  {progressW >= 20 && <span>{progressW}%</span>}
                </BarColor>
              </Bar>
              <p>view details</p>
            </DivBar>
            <ViewDetails>
              <h2>Writing</h2>

              <ul>
                <li>{progressW}% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00 spent on this skill</li>
              </ul>
            </ViewDetails>
          </DDiv>
          <DDiv>
            <DivBar>
              <Bar>
                <BarColor style={{
                  height: `${progressS}%`
                }}>
                  {progressS >= 20 && <span>{progressS}%</span>}
                </BarColor>
              </Bar>
              <p>view details</p>
            </DivBar>
            <ViewDetails>
              <h2>Speaking</h2>

              <ul>
                <li>{progressS}% success rate</li>
                <li>100% of activities completed</li>
                <li>21 correct answers out of 30</li>
                <li>00:00 spent on this skill</li>
              </ul>
            </ViewDetails>
          </DDiv>
        </Details>

        <ButtonBg title="Home" w="15.875rem" h="2.5rem" />
      </Main>
    </Container>
  )
}