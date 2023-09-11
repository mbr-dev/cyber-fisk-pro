import { useContext } from "react";
import { Volume2 } from "lucide-react";

import { LessonContext } from "../../context/lesson";

import { SubtitleLessonAudioContainer, SubtitleLessonAudioButton } from "./style";

export const SubtitleLessonAudio = (props) => {
  const { newStatusPlay, playAudio } = useContext(LessonContext);

  const handleClick = () => {
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