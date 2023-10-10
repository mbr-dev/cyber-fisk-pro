import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Header,
  ContainerBar,
  ContentBar,
  MarkerBar,
  BackButton,
  BackImage,
  LessonTitle,
  BookTitle,
  LessonBookContainer,
  Space
} from "./style";
import BackIcon from "../../../../assets/icons/Icon_Seta_Branca.png";
import { getBookTitle, getLessonTitle } from "../../../../../../utils";

export const GamesHeader = (props) => {
  const navigate = useNavigate();

  return (
    <Header>
      <BackButton onClick={() => navigate("/qr-code")}>
        <BackImage src={BackIcon} />
      </BackButton>
      <LessonBookContainer>
        <LessonTitle>
          {getLessonTitle(props?.questions?.[0]?.num_licao)}
        </LessonTitle>
        <BookTitle>{getBookTitle(props?.questions?.[0]?.id_livro)}</BookTitle>
      </LessonBookContainer>
      <ContainerBar>
        <ContentBar>
          {props?.answeredQuestions.map((question, index) => {
            return <MarkerBar key={index} $status={question?.correct} />;
          })}
        </ContentBar>
      </ContainerBar>
      <Space />
    </Header>
  );
};
