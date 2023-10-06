import styled from "styled-components";

export const NotificationsContainer = styled.div`
  width: 15rem;
  height: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 8px;

  button {
    all: unset;
    width: 8rem;
    height: 2rem;
    color: ${props => props.theme.white};
    border-radius: 6px;
    position: relative;
    top: -18px;
  }
`;

export const NotificationsContent = styled.div`
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.white};
  box-shadow: 0px 6px 49px 0px #00000040;
  border-radius: 8px;
`;

export const NotificationsHeader = styled.header`
  width: 100%;
  padding-block: 0.5rem;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  p {
    font-weight: bold;
    color: ${props => props.theme.white};
  }
`;

export const NotificationsMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-inline: 1rem;
  padding-top: 0.625rem;
  text-align: center;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    font-weight: 500;
  }

  img {
    width: 50px;
  }
`;