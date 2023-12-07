import { useContext } from "react";

import { LessonContext } from "../../context/lesson";
import { URL_FISKPRO } from "../../config/infos";

import AudioImg from "../../assets/Audio.png"
import AudioPauseImg from "../../assets/AudioPause.png"

import { Button, Container } from "./style";

export const SubTitleLessonAudioImg = (props) => {
  const { newStatusPlay, playAudio, numSelLesson } = useContext(LessonContext);

  const handleClick = () => {
    if (playAudio || props.stopAudio) return;

    const audio = new Audio(props.audio);
    audio.play();
    newStatusPlay(true);

    audio.addEventListener('ended', () => {
      newStatusPlay(false);
    });
  }
  console.log(props.image)

  return (
    <Container>
      {playAudio ?
        <Button onClick={handleClick}>
          <img src={AudioPauseImg} alt="Audio ícon" />
        </Button>
        :
        <Button onClick={handleClick}>
          <img src={AudioImg} alt="Audio ícon" />
        </Button>
      }

      <img src={`${URL_FISKPRO}images/essentials1/lesson${numSelLesson}/${props.img}.jpg`} className="img2" alt="" />
    </Container>
  )
}