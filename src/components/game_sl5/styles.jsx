import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const DivQ = styled.div`
  width: 11rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme["gray-700"]};
  border-radius: 6px;
`;

export const DivA = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Answer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 6px;
  background-color: ${props => props.theme["gray-700"]};
`;

export const WordSelected = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  border: 2px solid ${props => props.theme["gray-700"]};
`;

export const WordS = styled.div`
  flex: 1;
`;

export const Delete = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  margin-right: -0.3125rem;
  background-color: ${props => props.theme["red-200"]};
  line-height: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    scale: 1.05;
  }
`;

export const Words = styled.div`
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;