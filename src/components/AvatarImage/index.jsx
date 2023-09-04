import { AvatarImageContainer, AvatarName } from "./styles";

import Woman from "./Images/OBJECTS.svg";

export function AvatarImage({ userName }) {
    return(
        <AvatarImageContainer>
            <img src={Woman} />
            <AvatarName>
                <p>{userName}</p>
            </AvatarName>
        </AvatarImageContainer>
    )
}