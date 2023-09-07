import styled from 'styled-components';

export const SubtitleLessonAudioImgContent = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${props => props.theme["gray-200"]};
  padding-top: 0.625rem;
  
  .img2 {
    width: 50%;
    margin-right: 0.75rem;
  }

  @media(max-width: 320px) {
    .img2 {
      width: 40%;
    }
  }

  /* @media only screen and (max-width: 600px){
    .img {
      width: 50%;
    }
    .img2 {
      width: 50%;
    }
  }

  @media only screen and (max-width: 1024px){
    .img {
      width: 50%;
    }

    .img2 {
      width: 50%;
    }
  } */
`