import ImgLoadGif from "./images/Loading_Cyber_Fisk_Pro_Gif.gif"

import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <img src={ImgLoadGif} alt="" />
    </LoadingContainer>
  )
}