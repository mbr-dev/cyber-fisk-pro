import { styled } from "styled-components";
import { colors } from "../../config/colors";

export const AvatarImageContainer = styled.div`
    width: 4rem;
    height: 4rem;
    padding-top: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${colors.btnCloseMenu};
    border-radius: 8px;
    background-color: ${colors.white};
`;

export const AvatarName = styled.div`
    width: 4.5rem;
    height: 2rem;
    padding-inline: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.btnCloseMenu};
    border-radius: 8px;
    
    p {
        color: ${colors.white};
        font-size: 0.75rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;