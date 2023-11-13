import { useContext } from "react";

import { HeaderStepLessonEnd } from "./components/HeaderStepLessonEnd";
import { HeaderStepLessonStart } from "./components/HeaderStepLessonStart";

import { LessonContext } from "../../context/lesson";

import iconStart from "./images/iconStart.png";
import iconFinish from "./images/iconFinish.png";
import iconSuper from "./images/iconSuper.png";
import iconTrophy from "./images/iconTrophy.png";
import bgHeader from "../../assets/bgHeaderText.png";

import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Icons, BarStep } from "./styles";

export const HeaderLessonSL2 = ({ numStart, numEnd, superTaskEnd, superTaskStart, trophyEnd }) => {
  const { rodadaGeral, statusColor } = useContext(LessonContext);

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

        <BarStep>
          <HeaderStepLessonStart
            color={statusColor[0] === 0 ? defaultTheme["gray-100"] : statusColor[0] === 1 ? defaultTheme["blue-500"] : defaultTheme["orange-100"]} 
          />

          <HeaderStepLessonEnd
            color={statusColor[1] === 0 ? defaultTheme["gray-100"] : statusColor[1] === 1 ? defaultTheme["blue-500"] : defaultTheme["orange-100"]}
          />
        </BarStep>

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