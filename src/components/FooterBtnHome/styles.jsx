import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;

  @media(max-width: 320px) {
    height: 64px;
    padding-bottom: 10px;
  }
`;