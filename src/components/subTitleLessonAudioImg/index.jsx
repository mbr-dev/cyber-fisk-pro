import { useContext } from "react";
import { Volume2, Headphones } from "lucide-react";

import { LessonContext } from "../../context/lesson";
import { URL_FISKPRO } from "../../config/infos";

import img from "./images/img.png";

import { Button, Container } from "./style";

export const SubTitleLessonAudioImg = (props) => {
  const { newStatusPlay, playAudio, numSelLesson } = useContext(LessonContext);

  const handleClick = () => {
    if (playAudio) return;

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
          <Headphones size={props.size ? props.size : '36'} strokeWidth={2.5} />
        </Button>
        :
        <Button onClick={handleClick}>
          <Volume2 size={props.size ? props.size : '36'} strokeWidth={2.5} />
        </Button>
      }

      <img src={`${URL_FISKPRO}images/essentials1/lesson${numSelLesson}/${props.img}.jpg`} className="img2" alt="" />
    </Container>
  )
}