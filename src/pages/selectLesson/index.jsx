import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";
import { ButtonRed } from "../../components/ButtonRed";

import { ButtonLesson, SelectLessonContainer, SelectLessonHeader, SelectLessonMain, SelectLessonArea } from "./styles";

export function SelectLesson() {

  return (
    <SelectLessonContainer>
      <SelectLessonHeader>
        <ButtonMenuHeader />
        <p>Essentials 1</p>
        <ButtonCloseHeader />
      </SelectLessonHeader>

      <SelectLessonMain>
        <SelectLessonArea>
          <ButtonLesson>
            <p>1</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>2</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>3</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>4</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>5</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>6</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>7</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>8</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>9</p>
            <span>Activity</span>
          </ButtonLesson>

          <ButtonLesson>
            <p>10</p>
            <span>Activity</span>
          </ButtonLesson>
        </SelectLessonArea>
      </SelectLessonMain>

      <AreaButtonBottom>
        <ButtonRed title="Home" />
      </AreaButtonBottom>
    </SelectLessonContainer>
  )
}
