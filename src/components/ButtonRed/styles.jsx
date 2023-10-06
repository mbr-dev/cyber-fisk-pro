import styled from "styled-components";

export const Container = styled.button`
  all: unset;
  width: 15.875rem;
  height: 2.5rem;
  display: flex;
  margin-top: 0.5rem;
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
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    opacity: 0.9;
  }

  @media(max-width: 320px) {
    width: 11rem;
    height: 2rem;
    margin-top: 0;

    p {
      font-size: 1rem;
    }
  }
`;