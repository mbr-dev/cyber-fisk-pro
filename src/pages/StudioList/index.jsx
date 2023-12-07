import { useNavigate } from "react-router-dom";

import { HeaderText } from "../../components/HeaderText";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";

import { Container, DivInside, Main } from "./styles";

export const StudioList = () => {
  const navigate = useNavigate();

  const handleGoStudio = () => {
    navigate("/Studio");
  }

  return (
    <Container>
      <HeaderText title="Studio" />

      <Main>
        <DivInside onClick={handleGoStudio}>
          <span>1</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>2</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>3</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>4</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>5</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>6</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>7</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>8</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>9</span>
          <p>Lesson</p>
        </DivInside>

        <DivInside>
          <span>10</span>
          <p>Lesson</p>
        </DivInside>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}