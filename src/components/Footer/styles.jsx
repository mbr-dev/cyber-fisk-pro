import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100vw;
  justify-content: space-between;
  background-color: ${props => props.theme["red-200"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.875rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  p {
    font-weight: normal;
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