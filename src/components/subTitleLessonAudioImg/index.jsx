import { SubtitleLessonAudio } from "../subtitleLessonAudio";

import img from "./images/img.png";
import { SubtitleLessonAudioImgContent } from "./style";

export function SubtitleLessonAudioImg (props) {

  function handleClick() {
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