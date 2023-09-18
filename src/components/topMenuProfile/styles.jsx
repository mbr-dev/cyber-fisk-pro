import { styled } from "styled-components";

export const TopMenuProfileContainer = styled.header`
  width: 100vw;
  height: 10rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['gray-200']};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopHeader = styled.div`
  height: 2rem;
  padding: 1rem 1.125rem 0 1.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const BottomHeader = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  .logoFisk {
    width: 10rem;
  }
`;
