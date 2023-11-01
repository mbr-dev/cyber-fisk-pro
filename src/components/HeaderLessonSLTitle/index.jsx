import { useContext } from "react";

import { HeaderStepLesson } from "../HeaderStepLesson";
import { HeaderStepLessonEnd } from "../HeaderStepLessonEnd";
import { HeaderStepLessonStart } from "../HeaderStepLessonStart";

import { LessonContext } from "../../context/lesson";

import iconStart from "./images/iconStart.png";
import iconFinish from "./images/iconFinish.png";
import iconSuper from "./images/iconSuper.png";
import iconTrophy from "./images/iconTrophy.png";
import bgHeader from "../../assets/bgHeaderText.png";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Icons, BarStep } from "./styles";

export function HeaderLessonSLTitle({ numStart, numEnd, superTaskEnd, superTaskStart, trophyEnd, title }) {
  const { statusColor } = useContext(LessonContext);

  return(
    <Container>
      <Main>
      <img src={bgHeader} alt="" className="bgImg" />
        <Icons>
          {superTaskStart ?
            <img src={iconSuper} alt="iconStart" style={{ marginTop: "-0.75rem"}} />
            :
            <img src={iconStart} alt="iconStart" />
          }
          <p>{numStart}</p>
        </Icons>

        <h2>{title}</h2>

        <Icons>
          {superTaskEnd ?
            <img src={iconSuper} alt="iconStart" style={{ marginTop: "-0.75rem"}} /> :
            trophyEnd ? 
            <img src={iconTrophy} alt="iconStart" style={{ marginTop: "0.25rem"}} /> :
            <img src={iconFinish} alt="iconStart" />
          }
           <p>{numEnd}</p>
        </Icons>
      </Main>
    </Container>
  )
}