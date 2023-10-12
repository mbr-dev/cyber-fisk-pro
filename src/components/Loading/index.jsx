import ImgLoadGif from "./images/Loading_Cyber_Fisk_Pro_Gif.gif"

import { Container } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <img src={ImgLoadGif} alt="" />
    </Container>
  )
}