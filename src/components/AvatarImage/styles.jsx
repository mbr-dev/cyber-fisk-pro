import { styled } from "styled-components";

export const AvatarImageContainer = styled.div`
  width: 5.375rem;
  height: 5rem;
  padding-top: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${props => props.theme['red-200']};
  border-radius: 8px;
  background-color: ${props => props.theme.white};
`;

export const AvatarPhoto = styled.div`
  

  .avatarImg {
    width: 3.625rem;
    object-fit: cover;
  }
`

export const AvatarName = styled.div`
  width: 6.5rem;
  padding: 0.5rem;
  margin-top: -0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['red-200']};
  border-radius: 8px;
  
  p {
    color: ${props => props.theme.white};
    font-size: 0.75rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;