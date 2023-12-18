import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import { Container, Div, DivInside, Main, MainInside } from "./styles";

export const ReportStudio = () => {
  const navigate = useNavigate();

  const handleGoToRSL = () => {
    navigate("/ReportStudioL");
  }

  const reportLength = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  return (
    <Container>
      <HeaderText title="Report Studio" />

      <Main>
        <MainInside>
          {reportLength.map((item, index) => {
            return (
              <Div key={index}>
                <DivInside onClick={handleGoToRSL}>
                  <p>{index+1}</p>
                  <span>Lesson</span>
                </DivInside>
                <p>100%</p>
              </Div>
            )
          })}
        </MainInside>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}