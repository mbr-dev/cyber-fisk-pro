import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileMain = styled.main`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProfileForm = styled.form`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const ProfileAreaInput = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  position: relative;

  .language {
    background-color: ${props => props.theme["red-200"]};
    border: 0;
    color: ${props => props.theme.white};
    font-size: 1.125rem;
    font-weight: 500;
  }

  label {
    color: ${props => props.theme["gray-600"]};
    padding-left: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  svg {
    position: absolute;
    top: 36px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }
  
  img {
    width: 1.25rem;
    position: absolute;
    top: 35px;
    left: 10px;
    color: ${props => props.theme["gray-400"]};
  }

  .inputDate {
    font-size: 1rem;
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const ProfileInput = styled.input`
  height: 2.5rem;
  padding-left: 2rem;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;

  &::placeholder {
    font-weight: normal;
    font-family: "Ubuntu", sans-serif;
    font-size: 1rem;
    color: ${props => props.theme["gray-600"]};
  }
`;

export const ProfileSelect = styled.select`
  height: 2.5rem;
  padding-left: 2rem;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;
  color: ${props => props.theme["gray-600"]};
  font-weight: normal;
  font-family: "Ubuntu", sans-serif;
`;
