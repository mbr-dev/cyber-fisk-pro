import { styled } from "styled-components";

export const AvatarImageContainer = styled.div`
  width: 5rem;
  height: 4.75rem;
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
  width: 14rem;
  position: relative;

  .avatarImg {
    width: 3.25rem;
    margin-top: 0.5rem;
  }
`

export const AvatarName = styled.div`
  width: 6rem;
  height: 1.75rem;
  padding-inline: 0.25rem;
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