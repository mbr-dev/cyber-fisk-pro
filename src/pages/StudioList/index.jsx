import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import { Container, DivInside, Main, AreaButtons } from "./styles";

export const StudioList = () => {
  const navigate = useNavigate();

  const handleGoStudio = () => {
    navigate("/Studio");
  }

  return (
    <Container>
      <HeaderText title="Studio" />

      <Main>
        <AreaButtons>
          <DivInside onClick={handleGoStudio}>
            <p>1</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>2</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>3</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>4</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>5</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>6</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>7</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>8</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>9</p>
            <span>Lesson</span>
          </DivInside>

          <DivInside>
            <p>10</p>
            <span>Lesson</span>
          </DivInside>
        </AreaButtons>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}