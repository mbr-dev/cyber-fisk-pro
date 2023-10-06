import { SubTitleLessonAudio } from "../SubTitleLessonAudio";

import img from "./images/img.png";

import { Container } from "./style";

export const SubTitleLessonAudioImg = (props) => {

  const handleClick = () => {
    const audio = new Audio(props.audio);
    audio.play();
  }

  return (
    <Container>
      <SubTitleLessonAudio onClick={() => handleClick()} />
      <img src={img} className='img2' alt='image' />
    </Container>
  )
}