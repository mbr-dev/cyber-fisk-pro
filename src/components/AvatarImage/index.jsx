import Woman from "./Images/AvatarRobo.png";

import { Container, Name, Photo } from "./styles";

export const AvatarImage = ({ userName }) => {
  return(
    <Container>
      <Photo>
        <img src={Woman} alt="Avatar usuário" />
      </Photo>
      <Name>
        <p>{userName}</p>
      </Name>
    </Container>
  )
}