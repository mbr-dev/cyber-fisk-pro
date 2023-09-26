import React, { useState } from "react";
import { Dialog, Slide } from "@mui/material";
import trofeuExcellentImg from "./../../../assets/images/Trofeu_excelente.png";
import trofeuGoodImg from "./../../../assets/images/Trofeu_bom.png";
import trofeuBadImg from "./../../../assets/images/Trofeu_ruim.png";
import IconSad from "../../../assets/icons/Icon_sad.png";
import IconHappy from "../../../assets/icons/Icon_happy.png";

import {
  Header,
  HeaderText,
  HeaderImg,
  MainContainer,
  GradeContainer,
  ThrofyContainer,
  ThrofyImage,
  Grade,
  PointsContainer,
  Points,
  QuestionsContainer,
  Question,
  ButtonsContainer,
  ButtonFooter,
} from "./style";
import { formatQuestionServer } from "../../../../../utils";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EndModal(props) {
  const [page, setPage] = useState(1);

  const trophy = () => {
    if (props?.grade === 100) {
      return trofeuExcellentImg;
    } else if (props?.grade > 79) {
      return trofeuGoodImg;
    } else {
      return trofeuBadImg;
    }
  };

  return (
    <Dialog fullScreen open={props?.open} TransitionComponent={Transition}>
      <>
        <Header grade={props?.grade}>
          {page === 1 ? (
            <HeaderText>
              {props?.grade > 79 ? "Good!" : "Try Again!"}
            </HeaderText>
          ) : (
            <HeaderImg src={IconSad} />
          )}
        </Header>
        <MainContainer>
          <GradeContainer>
            {page === 1 ? (
              <>
                <ThrofyContainer>
                  <ThrofyImage src={trophy()} />
                </ThrofyContainer>
                <Grade>{props?.grade + "%"}</Grade>
                <PointsContainer>
                  <Points $green>
                    {props?.points}
                    <br />
                    {props?.points !== 1 ? "Acertos" : "Acerto"}
                  </Points>
                  <Points>
                    {props.questions?.length - props?.points}
                    <br />
                    {props.questions?.length - props?.points !== 1
                      ? "Erros"
                      : "Erro"}
                  </Points>
                </PointsContainer>
              </>
            ) : (
              <QuestionsContainer>
                {props?.questions.map((question, index) => {
                  if (question?.correct === false) {
                    return (
                      <Question>
                        {formatQuestionServer(question?.pergunta) ||
                          `Question ${index}`}
                      </Question>
                    );
                  }
                })}
              </QuestionsContainer>
            )}
            <ButtonsContainer>
              <ButtonFooter
                onClick={() =>
                  page === 2
                    ? props?.setOpen(false)
                    : props?.grade === 100
                    ? props?.setOpen(false)
                    : setPage(2)
                }
              >
                Ok
              </ButtonFooter>
              {page === 2 && props?.grade < 100 && (
                <ButtonFooter
                  onClick={() => {
                    props?.setOpen(false);
                    props?.repeat();
                    setTimeout(() => {
                      setPage(1);
                    }, 500);
                  }}
                >
                  Repetir
                </ButtonFooter>
              )}
            </ButtonsContainer>
          </GradeContainer>
        </MainContainer>
      </>
    </Dialog>
  );
}

export default EndModal;
