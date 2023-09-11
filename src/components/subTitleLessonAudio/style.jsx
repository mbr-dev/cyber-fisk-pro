import styled from 'styled-components';

export const SubtitleLessonAudioContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme["gray-200"]};
  padding-block: 0.625rem;
`

export const SubtitleLessonAudioButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme["red-200"]};
  color: ${props => props.theme.white};
  border-radius: 20px;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }

  @media(min-width: 360px) {
    width: 4.5rem;
    height: 4.5rem;
  }

  @media(min-width: 600px) {
    width: 7rem;
    height: 7rem;
  }
`;