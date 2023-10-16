import React, { useState } from "react";
import { Dialog, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

import trofeuExcellentImg from "./../../../assets/images/Trofeu_excelente.png";
import trofeuGoodImg from "./../../../assets/images/Trofeu_bom.png";
import trofeuBadImg from "./../../../assets/images/Trofeu_ruim.png";
import IconSad from "../../../assets/icons/Icon_sad.png";
import IconHappy from "../../../assets/icons/Icon_Happy.png";

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
  ButtonFooter
} from "./style";
import { formatQuestionServer } from "../../../../../utils";
import { URL_HMLG_PRO } from "../../../../../config/infos";
import { api } from "../../../../../lib/axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const EndModal = (props) => {
  const navigate = useNavigate();
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

  const saveScore = async () => {
    try {
      const cookies = new Cookies();
      const raf = cookies.get("raf");
      const { data } = await api.get(
        `${URL_HMLG_PRO}api/QrCode/Progresso?id_qr=${props?.qrId}&raf=${raf}&score=${props?.grade}`
      );
      console.log("res", data);
      if (data.erro) {
        console.log("err", data.erro);
        setErrorFetch(true);
        return;
      }
      navigate("/qr-code");
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorFetch(true);
    }
  };

  console.log(props?.qrId);

  return (
    <Dialog fullScreen open={props?.open} TransitionComponent={Transition}>
      <>
        <Header grade={props?.grade}>
          {page === 1 ? (
            <HeaderText>
              {props?.grade > 79 ? "Good!" : "Try Again!"}
            </HeaderText>
          ) : (
            <HeaderImg src={props?.grade > 79 ? IconSad : IconHappy} />
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
                      <Question key={index}>
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
                    ? saveScore()
                    : props?.grade === 100
                    ? saveScore()
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
};
