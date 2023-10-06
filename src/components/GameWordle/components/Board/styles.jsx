import styled from "styled-components";

export const BoardContainer = styled.div`
  height: 20.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const BoardRow = styled.div`
  flex: 33%;
  display: flex;
  gap: 0.3125rem;

  .correct {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["green-200"]};
  }
  
  .almost {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["yellow-100"]};
  }
  
  .error {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["gray-500"]};
  }

  .letterActive {
    border: 3px solid ${props => props.theme["red-200"]};
  }
`;