import { styled } from "styled-components";
import { colors } from "../../config/colors";

export const TopMenuProfileContainer = styled.header`
    width: 100vw;
    height: 11.5rem;
    background-color: ${colors.backgroundTopLesson};
    border-end-end-radius: 24px;
    border-end-start-radius: 24px;
`;

export const TopMenuHeader = styled.div`
    padding-inline: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;

    p {
        font-size: 1.5rem;
        font-weight: bold;
    }
`;

export const TopMenuButton = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.btnCloseMenu};
    border-radius: 6px;
    color: ${colors.white};
`;

export const TopCloseButton = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.btnCloseMenu};
    border-radius: 9999px;
    box-shadow: 0px 4px 10px 0px #00000040;
    color: ${colors.white};
`;

export const BottomMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    img {
        height: 3.25rem;
    }
`;
