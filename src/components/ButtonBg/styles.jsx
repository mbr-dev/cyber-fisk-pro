import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.$greenBtn ? props.theme["green-600"] : props.theme["red-200"]};
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.$greenBtn ? props.theme["green-700"] : props.theme["red-300"]};
  border-bottom: 4px solid ${props => props.$greenBtn ? props.theme["green-700"] : props.theme["red-300"]};
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;

  p {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media(max-width: 320px) {
    width: 11rem;
    height: 2rem;
    margin-top: 0;
  }
`;