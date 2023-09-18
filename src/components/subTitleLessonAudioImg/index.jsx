import { SubtitleLessonAudio } from "../subTitleLessonAudio";

import img from "./images/img.png";

import { SubtitleLessonAudioImgContent } from "./style";

export const SubtitleLessonAudioImg = (props) => {

  const handleClick = () => {
    const audio = new Audio(props.audio);
    audio.play();
  }

  return (
    <SubtitleLessonAudioImgContent>
      <SubtitleLessonAudio onClick={() => handleClick()} />
      <img src={img} className='img2' alt='image' />
    </SubtitleLessonAudioImgContent>
  )
}