import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import {
  Container,
  Info,
  ContainerLimiter,
  ContainerCenter,
  OkButton,
  Header,
  BackButton,
  BackImage,
  ScoreText,
  MyScoreText,
  BookTitle,
  LessonBookContainer,
  Space,
  ContainerScoreLesson,
  LessonName,
  ScoreBar,
  ContainerRowScoreLesson,
  ContainerScoreBar,
  ScoreBarBackground
} from "./style";
import BackIcon from "../../assets/icons/Icon_Seta_Branca.png";
import { useNavigate } from "react-router-dom";
import { Load } from "../Load";
import { api } from "../../../../lib/axios";
import { URL_HMLG_PRO } from "../../../../config/infos";

export const Score = (props) => {
  const [dataScore, setDataScore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect(() => {
    const getScoreData = async () => {
      try {
        const cookies = new Cookies();
        const raf = cookies.get("raf");
        const { data } = await api.get(
          `${URL_HMLG_PRO}api/QrCode/RetornaProgresso?raf=${raf}&id_livro=${53}`
        );
        console.log("res", data);
        if (data.erro) {
          console.log("err", data.erro);
          setErrorFetch(true);
          return;
        }
        setDataScore(data?.dados);
      } catch (error) {
        console.error("Error fetching data:", error);
        setErrorFetch(true);
      } finally {
        setIsLoading(false);
      }
    };
    getScoreData();
  }, []);

  console.log("dat", dataScore);

  return (
    <Container>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <Header>
            <BackButton onClick={() => props.setShowScore(false)}>
              <BackImage src={BackIcon} />
            </BackButton>
            <LessonBookContainer>
              <ScoreText>Score</ScoreText>
              <MyScoreText>Meu Score</MyScoreText>
            </LessonBookContainer>
            <Space />
          </Header>
          <ContainerLimiter>
            <ContainerCenter>
              <BookTitle>Essentials 1</BookTitle>
              <ContainerScoreLesson>
                {dataScore.map((row, index) => {
                  return (
                    <ContainerRowScoreLesson key={index}>
                      <LessonName>{row?.lesson}</LessonName>
                      <ContainerScoreBar>
                        <ScoreBarBackground>
                          <ScoreBar
                            percentage={row?.score}
                          >{`${row?.score}%`}</ScoreBar>
                        </ScoreBarBackground>
                      </ContainerScoreBar>
                    </ContainerRowScoreLesson>
                  );
                })}
              </ContainerScoreLesson>
            </ContainerCenter>
          </ContainerLimiter>
        </>
      )}
    </Container>
  );
};
