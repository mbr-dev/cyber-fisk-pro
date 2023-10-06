import styled from "styled-components";

export const KeyBoardContainer = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  .big {
    width: 120px;
  }

  .disabled {
    background-color: ${props => props.theme["gray-600"]};
  }
`;

export const Line1 = styled.div`
  //flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
`;

export const Line2= styled.div`
  //flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Line3 = styled.div`
  //flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;