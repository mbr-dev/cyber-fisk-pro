import { styled } from "styled-components";

export const ProfileContainer = styled.div`
  width: 100vw;
`;

export const ProfileContent = styled.main`
  width: 100%;
  margin-top: 1rem;
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
    font-weight: bold;
  }

  label {
    padding-left: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  svg {
    position: absolute;
    top: 2.375rem;
    left: 0.75rem;
    color: ${props => props.theme["gray-400"]};
  }
  
  img {
    width: 1.25rem;
    position: absolute;
    top: 2.125rem;
    left: 0.75rem;
    color: ${props => props.theme["gray-400"]};
  }

  .inputDate {
    color: ${props => props.theme["gray-600"]};
  }

  .inputDate::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const ProfileInput = styled.input`
  height: 2.25rem;
  padding-left: 2rem;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;

  &::placeholder {
    color: ${props => props.theme["gray-600"]};
  }
`;

export const ProfileSelect = styled.select`
  height: 2.25rem;
  padding-left: 2rem;
  border: 1px solid ${props => props.theme["gray-400"]};
  border-radius: 8px;
  color: ${props => props.theme["gray-600"]};
`;
