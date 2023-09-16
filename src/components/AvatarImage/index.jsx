import { AvatarImageContainer, AvatarName, AvatarPhoto } from "./styles";

import Woman from "./Images/OBJECTS.png";

export function AvatarImage({ userName }) {
  return(
    <AvatarImageContainer>
      <AvatarPhoto>
        <img src={Woman} alt="Avatar usuário" className="avatarImg" />
      </AvatarPhoto>
      <AvatarName>
        <p>{userName}</p>
      </AvatarName>
    </AvatarImageContainer>
  )
}