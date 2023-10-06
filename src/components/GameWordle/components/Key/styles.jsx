import styled from "styled-components";

export const KeyContainer = styled.div`
  width: 3rem;
  height: 2.625rem;
  margin: 0.3125rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  background-color: ${props => props.theme["gray-400"]};
  color: ${props => props.theme.white};
  cursor: pointer;
`;