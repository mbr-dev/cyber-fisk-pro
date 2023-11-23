import { useContext } from "react";

import { LessonContext } from "../../context/lesson";

import AudioImg from "../../assets/Audio.png";
import AudioPauseImg from "../../assets/AudioPause.png";

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
        <Button disabled={props.disabledButton}>
          <img src={AudioPauseImg} alt="Ícone de pause audio" />
        </Button>
        :
        <Button onClick={handleClick} disabled={props.disabledButton}>
          <img src={AudioImg} alt="Ícone de som" />
        </Button>
      }
    </Container>
  )
}