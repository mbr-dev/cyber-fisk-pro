import { useContext } from "react";

import { LessonContext } from "../../context/lesson";
import { defaultTheme } from "../../themes/defaultTheme";

import { HeaderStepLesson } from "../HeaderStepLesson";
import { HeaderStepLessonEnd } from "../HeaderStepLessonEnd";
import { HeaderStepLessonStart } from "../HeaderStepLessonStart";

import iconStart from "./images/iconStart.png";
import iconFinish from "./images/iconFinish.png";

import { HeaderLessonContainer, HeaderLessonContent, HeaderLessonIcon, BarStep } from "./styles";

export function HeaderLesson({ numStart, numEnd }) {
  const { rodadaGeral } = useContext(LessonContext);

  return(
    <HeaderLessonContainer>
      <HeaderLessonContent>
        <HeaderLessonIcon>
          <img src={iconStart} alt="iconStart" />
          <p>{numStart}</p>
        </HeaderLessonIcon>

        <BarStep>
          <HeaderStepLessonStart color={rodadaGeral > 0 ? defaultTheme["blue-100"] : defaultTheme["yellow-100"]} />

          <HeaderStepLesson 
            color={rodadaGeral === 1 ? defaultTheme["yellow-100"] : rodadaGeral < 1 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 2 ? defaultTheme["yellow-100"] : rodadaGeral < 2 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 3 ? defaultTheme["yellow-100"] : rodadaGeral < 3 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 4 ? defaultTheme["yellow-100"] : rodadaGeral < 4 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 5 ? defaultTheme["yellow-100"] : rodadaGeral < 5 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 6 ? defaultTheme["yellow-100"] : rodadaGeral < 6 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 7 ? defaultTheme["yellow-100"] : rodadaGeral < 7 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />
          <HeaderStepLesson 
            color={rodadaGeral === 8 ? defaultTheme["yellow-100"] : rodadaGeral < 8 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]}
          />

          <HeaderStepLessonEnd 
            color={rodadaGeral === 9 ? defaultTheme["yellow-100"] : rodadaGeral < 9 ? defaultTheme["gray-200"] : defaultTheme["blue-100"]} 
          />
        </BarStep>

        <HeaderLessonIcon>
          <img src={iconFinish} alt="iconStart" />
          <p>{numEnd}</p>
        </HeaderLessonIcon>
      </HeaderLessonContent>
    </HeaderLessonContainer>
  )
}