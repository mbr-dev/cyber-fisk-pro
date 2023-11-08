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
    height: 126px;
    justify-content: center;
    padding: 0;
    padding-inline: 36px;
  }
`;

export const TopHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  @media(min-width: 1024px) {
    position: relative;
  }

  @media(min-width: 1440px) {
    p {
      font-size: 36px;
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
      width: 180px;
    }
  }

  @media(min-width: 1024px) {
    position: absolute;
    left: 120px;

    .logoFisk {
      width: 130px;
    }
  }

  @media(min-width: 1440px) {
    .logoFisk {
      width: 150px;
    }
  }
`;