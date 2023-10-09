import { styled } from "styled-components";

export const Container = styled.div`
  width: 5.25rem;
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //border: 1px solid ${props => props.theme["red-200"]};
  //border-bottom: none;
  //border-radius: 8px;
  //background-color: ${props => props.theme.white};

  @media (max-width: 320px) {
    width: 4.75rem;
    height: 4rem;
    margin-bottom: 1.5rem;
  }
`;

export const Photo = styled.div`
  img {
    width: 52px;
    object-fit: cover;
  }

  @media (max-width: 320px) {
    img {
      width: 44px;
    }
  }
`

export const Name = styled.div`
  width: 6.5rem;
  padding: 0.5rem;
  margin-top: -0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 6px;
  
  p {
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media(max-width: 320px) {
    padding: 0.325rem;
  }
`;