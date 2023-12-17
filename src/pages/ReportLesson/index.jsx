import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import { Container, Div, DivInside, Main, MainInside } from "./styles";

export const ReportLesson = () => {

  const reportLength = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  return (
    <Container>
      <HeaderText title="Reports" />

      <Main>
        <MainInside>
          {reportLength.map((item, index) => {
            return (
              <Div key={index}>
                <DivInside>
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