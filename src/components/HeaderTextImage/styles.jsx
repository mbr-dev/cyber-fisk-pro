import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 12px 16px 0 16px;
  border-end-end-radius: 18px;
  border-end-start-radius: 18px;
  overflow: hidden;
  position: relative;

  .bgHeaderImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media(max-width: 320px) {
    height: 126px;
    gap: 8px;
    padding: 12px 12px 0 12px;
  }

  @media(min-width: 768px) {
    height: 184px;
  }

  @media(min-width: 1024px) {
    height: 120px;
    justify-content: center;
    padding: 0;
    padding-inline: 32px;
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoFiskD {
    width: 120px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    color: ${props => props.theme["white"]};
  }

  @media(max-width: 320px) {
    p {
      font-size: 20px;
    }
  }

  @media(min-width: 768px) {
    p {
      font-size: 44px;
    }
  }
`;

export const BottomHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  .logoFisk {
    width: 196px;
  }

  @media(max-width: 320px) {
    .logoFisk {
      width: 150px;
    }
  }

  @media(min-width: 768px) {
    .logoFisk {
      width: 210px;
    }
  }
`;

export const Avatar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    margin-top: -24px;
  }

  .roboPe {
    width: 200px;
  }

  p {
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme["red-200"]};
  }

  @media(max-width: 320px) {
    img {
      width: 80px;
    }

    p {
      width: 110px;
      height: 20px;
    }
  }

  @media(min-width: 1280px) {
    width: 350px;
    height: 500px;

    p {
      width: 350px;
      height: 60px;
      font-size: 32px;
      margin-top: -50px;
    }
  }
`;