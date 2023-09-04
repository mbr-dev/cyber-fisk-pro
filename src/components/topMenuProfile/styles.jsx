import { styled } from "styled-components";

export const TopMenuProfileContainer = styled.header`
  width: 100vw;
  height: 11rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['gray-200']};
  border-end-end-radius: 24px;
  border-end-start-radius: 24px;
`;

export const TopMenuHeader = styled.div`
  padding-inline: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const TopMenuButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 6px;
  color: ${props => props.theme.white};
`;

export const TopCloseButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 9999px;
  box-shadow: 0px 4px 10px 0px #00000040;
  color: ${props => props.theme.white};
`;

export const BottomMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: -1rem;

  .logoFisk {
    width: 10rem;
  }
`;
