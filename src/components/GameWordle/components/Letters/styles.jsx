import styled from "styled-components";

export const LettersContainer = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: bolder;
  border: 1px solid ${props => props.theme["gray-600"]};
  border-radius: 3px;
  color: ${props => props.theme.black};
  cursor: pointer;
  
  &:hover {
    border: 2px solid ${props => props.theme["red-200"]};
  }
`;