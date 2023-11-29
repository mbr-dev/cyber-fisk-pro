import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

import { ModalAC } from "./components/ModalAC";
import { HeaderText } from "../../components/HeaderText";
import { AvatarCustomMetadeIcon } from "../../components/AvatarCustomMetadeIcon";

import PrintImg from "../../assets/print.png";

import { Container, Main, Avatar, AvatarArea, AvatarInfo, Print, XP, Stage, Details, XPLeft, XPRight, XPDiv, XPInside, SLeft, SRight, DDiv, ViewDetails, DivBar, Bar, BarColor, Div, AreaFooter, ButtonHome } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const ReportInfo = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [progressL, setProgressL] = useState(20);
  const [progressR, setProgressR] = useState(10);
  const [progressW, setProgressW] = useState(85);
  const [progressS, setProgressS] = useState(80);

  const navigate = useNavigate();

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

  const handleReportLesson = () => {
    navigate("/ReportLesson");
  }

  const handleReportStudio = () => {
    navigate("/ReportStudio");
  }

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container>
      <HeaderText title="Report" />

      <Main>
        <Div>
          <AvatarArea>
            <AvatarInfo>
              <Avatar>
                <AvatarCustomMetadeIcon />
              </Avatar>
              <p>Carlos Alberto</p>
            </AvatarInfo>
            <Print>
              <img src={PrintImg} alt="" />
              <p>Print Report</p>
            </Print>
          </AvatarArea>

          <XP>
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
          </XP>

          <Stage>
            <SLeft>
              <h2>Stage progress:</h2>

              <Pie data={data} />
            </SLeft>

            <SRight>
              <span>80%</span>
              <p>of lessons completed</p>
            </SRight>
          </Stage>
        </Div>

        <Details>
          <DDiv>
            <DivBar onClick={handleReportLesson}>
              <Bar>
                <BarColor style={{
                  height: `${progressL}%`
                }}>
                  {progressL >= 20 && <span>{progressL}%</span>}
                </BarColor>
              </Bar>
              <p>view details</p>
            </DivBar>
            <ViewDetails onClick={handleReportStudio}>
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
      </Main>

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}