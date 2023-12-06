import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullH } from "../../components/AreaFooterFullH";

import { Container, Div, DivInside, Main } from "./styles";

export const ReportStudio = () => {
  const navigate = useNavigate();

  const handleGoToRSL = () => {
    navigate("/ReportStudioL");
  }

  return (
    <Container>
      <HeaderText title="Report Studio" />

      <Main>
        <Div>
          <DivInside onClick={handleGoToRSL}>
            <span>1</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside onClick={handleGoToRSL}>
            <span>2</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside onClick={handleGoToRSL}>
            <span>3</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside onClick={handleGoToRSL}>
            <span>4</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>5</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>6</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>7</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>8</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>9</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>10</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>
      </Main>

      <AreaFooterFullH />
    </Container>
  )
}