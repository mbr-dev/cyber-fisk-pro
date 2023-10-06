import styled from "styled-components";

export const Container  = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main  = styled.main`
  flex: 1;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
`;

export const MainTop  = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const ButtonRakingArea  = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme["red-200"]};
  border-radius: 8px;
`;

const ButtonRaking  = styled.button`
  all: unset;
  padding: 0.5rem 0.75rem;
  color: ${props => props.$selected ? props.theme.white : props.theme.black};
  background-color: ${props => props.$selected ? props.theme["red-200"] : props.theme.white};
  font-weight: 500;
`;

export const ButtonNational  = styled(ButtonRaking)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const ButtonUnit  = styled(ButtonRaking)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CoinArea  = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  img {
    width: 42px;
  }

  .gold {
    width: 52px;
  }
`;

export const TextArea  = styled.div`

  h2 {
    font-weight: bold;
    color: ${props => props.theme["red-200"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 500;
  }
`;

export const MainBottom  = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LevelPosition  = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: ${props => props.$selected ? props.theme["red-100"] : props.theme.white};

  p {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${props => props.theme["red-200"]};
    white-space: nowrap;
  }

  span {
    width: 6rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AvatarArea  = styled.section`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${props => props.theme["red-200"]};
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    width: 36px;
  }
`;