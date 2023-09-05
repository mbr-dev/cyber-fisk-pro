import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100vw;
  justify-content: space-between;
  background-color: ${props => props.theme["red-200"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.875rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const FooterDiv = styled.div`
  margin-top: -0.75rem;

  p {
    color: ${props => props.theme.white};
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 64px;
  }

  .iconFooter {
    width: 2.5rem;
  }
`;