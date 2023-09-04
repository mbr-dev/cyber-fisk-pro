import { styled } from "styled-components";
import { colors } from "../../config/colors";

export const ProfileContainer = styled.div`
    width: 100vw;
`;

export const ProfileContent = styled.main`
    width: 100%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileForm = styled.form`
    width: 18.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ProfileAreaInput = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;

    label {
        padding-left: 1rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
    }
`;

export const ProfileInput = styled.input`
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid ${colors["gray-400"]};
    border-radius: 8px;
`;

export const ProfileSelect = styled.select`
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid ${colors["gray-400"]};
    border-radius: 8px;
`;

export const Feature = styled.span`
    width: 100%;
    height: 1px;
    background-color: ${colors["gray-200"]};
`

export const ProfileButtonHome = styled.button`
    width: 15.625rem;
    display: flex;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${colors["red-300"]};
    color: ${colors.white};
`