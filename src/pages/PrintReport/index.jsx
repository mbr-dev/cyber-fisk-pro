import { useNavigate } from "react-router-dom";

import { LineSeparator } from "../../components/LineSeparator";

import logoFiskImg from "../../assets/logoFisk.png";

import { Container, Info, InfoLesson, Last, Lesson, Skills, Time, Xp, Img, Main, BottomFooter, Footer } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const PrintReport = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/ReportInfo");
  }

  const handlePrint = () => {
    window.print();
  }

  return (
    <Container>
      <Img>
        <img src={logoFiskImg} alt="" />
      </Img>
      <Main>
        <Info>
          <div>
            <p>Camila Eduarda</p>
            <span>Essential 1</span>
          </div>

          <div>
            <p>80%</p>
            <span>of lessons completed</span>
          </div>
        </Info>

        <Last>
          <div>
            <p style={{ marginBottom: "0.5rem"}}><strong>Last Access:</strong> 05/08/2023</p>
            <p><strong>Total time on platform:</strong> 01:04:45</p>
          </div>

          <div>
            <p style={{ marginBottom: "0.5rem"}}>Relatorio impresso em </p>
            <p style={{ textAlign: "center"}}><strong>05/10/2023</strong></p>
          </div>
        </Last>

        <LineSeparator wl="80%" bg={defaultTheme["gray-200"]} />

        <Lesson>
          <p>Lesson</p>
          <span>Completed on 10/09/2023</span>
        </Lesson>

        <InfoLesson>
          <Time>
            <p>Time spent</p>
            <span>Task 1: 00:12:00</span>
            <span>Task 2: 00:17:00</span>
            <span>Super Task: 00:00:00</span>
          </Time>
          <Skills>
            <p>Skills (Best score)</p>
            <span>Listening: 21 correct answers out of 30</span>
            <span>Reading: 24 correct answers out of 30</span>
            <span>Writing: 20 correct answers out of 30</span>
            <span>Speaking: 100% completo</span>
          </Skills>
        </InfoLesson>

        <Xp>
          <p>XP: 250</p>
          <p>Fisk Dollars: 180</p>
        </Xp>
      </Main>
      <Footer>
        <BottomFooter onClick={handleGoBack}>
          <p>cancel</p>
        </BottomFooter>
        <BottomFooter onClick={handlePrint} $green="green">
          <p>imprimir</p>
        </BottomFooter>
      </Footer>
    </Container>
  )
}