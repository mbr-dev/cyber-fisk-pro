import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";

import { Container, Div, DivInside, Main, AreaFooter, ButtonHome } from "./styles";

export const ReportLesson = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  }

  return (
    <Container>
      <HeaderText title="Reports" />

      <Main>
        <Div>
          <DivInside>
            <span>1</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>2</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
            <span>3</span>
            <p>Lesson</p>
          </DivInside>
          <p>100%</p>
        </Div>

        <Div>
          <DivInside>
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

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}