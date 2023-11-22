import { useContext } from "react";
import { Volume2, Headphones } from "lucide-react";

import { LessonContext } from "../../context/lesson";

import { Container, Button } from "./style";

export const SubTitleLessonAudio = (props) => {
  const { newStatusPlay, playAudio } = useContext(LessonContext);
  const { countC, setCountC } = props;

  const handleClick = () => {
    if (playAudio || props.stopAudio) return;

    let tempClick = countC;
    tempClick++;
    
    if (setCountC) {
      setCountC(tempClick);
    }

    const audio = new Audio(props.audio);

    audio.play();
    newStatusPlay(true);

    audio.addEventListener("ended", () => {
      newStatusPlay(false);
    });
  }

  return (
    <Container>
      {playAudio ?
        <Button onClick={handleClick} disabled={props.disabledButton}>
          <Headphones size={props.size ? props.size : "36"} strokeWidth={2.5} />
        </Button>
        :
        <Button onClick={handleClick} disabled={props.disabledButton}>
          <Volume2 size={props.size ? props.size : "36"} strokeWidth={2.5} />
        </Button>
      }
    </Container>
  )
}