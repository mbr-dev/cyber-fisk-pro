import styled from "styled-components";

export const AreaButtonBottomContainer = styled.footer`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  padding-bottom: 1rem;

  @media(min-width: 600px) {
    width: 38rem;
  }
`;

export const LineSeparator = styled.div`
  width: 100%;
  height: 1.5px;
  background-color: ${props => props.theme["gray-200"]};
  margin-bottom: 1rem;
`;