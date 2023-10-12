import { useContext } from "react";
import { Volume2, Headphones } from "lucide-react";

import { LessonContext } from "../../context/lesson";

import { Container, Button } from "./style";

export const SubTitleLessonAudio = (props) => {
  const { newStatusPlay, playAudio } = useContext(LessonContext);

  const handleClick = () => {
    if (playAudio) return;

    const audio = new Audio(props.audio);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener('ended', () => {
      newStatusPlay(false);
    });
  }

  return (
    <Container>
      {playAudio ?
        <Button onClick={handleClick}>
          <Headphones size={props.size ? props.size : '36'} strokeWidth={2.5} />
        </Button>
        :
        <Button onClick={handleClick}>
          <Volume2 size={props.size ? props.size : '36'} strokeWidth={2.5} />
        </Button>
      }
    </Container>
  )
}