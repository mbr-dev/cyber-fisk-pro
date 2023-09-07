import { useContext } from "react";
import { Volume2 } from "lucide-react";

import Button from "@mui/material/Button";
import { LessonContext } from "../../context/lesson";

import { SubtitleLessonAudioContainer, SubtitleLessonAudioButton } from "./style";

export function SubtitleLessonAudio(props) {
  const { newStatusPlay, playAudio } = useContext(LessonContext);

  function handleClick() {
    if (playAudio) {
      return;
    }

    const audio = new Audio(props.audio);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener('ended', () => {
      newStatusPlay(false);
    });
  }

  return (
    <SubtitleLessonAudioContainer>
      <SubtitleLessonAudioButton onClick={() => handleClick()}>
        <Volume2 size={32} strokeWidth={2.5} />
      </SubtitleLessonAudioButton>
    </SubtitleLessonAudioContainer>
  )
}