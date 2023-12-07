import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { TitleLesson } from "../titleLesson";
import { HeaderLessonSL6 } from "../HeaderLessonSL6";
import { AreaFooterFullBtn } from "../AreaFooterFullBtn";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import LogoImg from "../../assets/logoIcon.png";

import { Container, Main, Grid, Card, Icon } from "./styles";

export const GameSL6 = () => {
  const { setTimeElapsed, timeElapsed, statusColor, setStatusColor, rodadaGeral, setNewRodada } = useContext(LessonContext);

  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState();
  const [level, setLevel] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [cards, setCards] = useState([]);
  const [finished, setFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [countTimer, setCountTimer] = useState(0);

  const navigate = useNavigate();

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);

      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=6&num_task=1");
      const res = response.data;
      const dataItems = res.dados[0].dados_conteudo;
      setData(dataItems);

      const items = dataItems.map(item => {
        const conteudo = JSON.parse(item.conteudo);
        return conteudo
      });

      const nameFilter = items.filter(item => item.name);

      let tempRandom = [];
      for (let a = 0; a < nameFilter.length; a++) {
        tempRandom.push(a);
      }
      tempRandom = tempRandom.sort(() => Math.random() - 0.5);

      let nameRandom = []
      for (let a = 0; a < 6; a++) {
        nameRandom.push(nameFilter[tempRandom[a]]);
      }

      let answersFilter = [];
      nameRandom.forEach(nameItem => {
        const status = nameItem.status;
        const answers = items.filter(item => item.status === status && item.resposta);
        answersFilter = answersFilter.concat(answers);
      });

      let tempGridFake = nameRandom.concat(answersFilter);
      tempGridFake = tempGridFake.sort(() => Math.random() - 0.5);

      let tempGrid = [];
      for (let a = 0; a < (6 * 2 ); a++) {
        tempGrid.push({
          item: null,
          shown: false,
          permanentShown: false
        });
      }

      let tempRandomGrid = [];
      for (let a = 0; a < (6 * 2); a++) {
        tempRandomGrid.push(a);
      }
      tempRandomGrid = tempRandomGrid.sort(() => Math.random() - 0.5);

      for (let a = 0; a < (6 * 2); a++) {
        tempGrid[a].item = tempGridFake[tempRandomGrid[a]]
      }

      setCards(tempGrid);
      setPlaying(true);
      timePointer();
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, setPlaying, setCards]);

  const newRound = (level) => {
    setCountTimer(0);
    timePointer();
    console.log("level: ", level)
    const items = data.map(item => {
      const conteudo = JSON.parse(item.conteudo);
      return conteudo
    });
    const itemLength = level === 1 ? 8 : 10;

    const nameFilter = items.filter(item => item.name);

    let tempRandom = [];
    for (let a = 0; a < nameFilter.length; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);

    let nameRandom = []
    for (let a = 0; a < itemLength; a++) {
      nameRandom.push(nameFilter[tempRandom[a]]);
    }

    let answersFilter = [];
    nameRandom.forEach(nameItem => {
      const status = nameItem.status;
      const answers = items.filter(item => item.status === status && item.resposta);
      answersFilter = answersFilter.concat(answers);
    });

    let tempGridFake = nameRandom.concat(answersFilter);
    tempGridFake = tempGridFake.sort(() => Math.random() - 0.5);

    let tempGrid = [];
    for (let a = 0; a < (itemLength * 2 ); a++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    let tempRandomGrid = [];
    for (let a = 0; a < (itemLength * 2); a++) {
      tempRandomGrid.push(a);
    }
    tempRandomGrid = tempRandomGrid.sort(() => Math.random() - 0.5);

    for (let a = 0; a < (itemLength * 2); a++) {
      tempGrid[a].item = tempGridFake[tempRandomGrid[a]]
    }
    setCards(tempGrid);
    setPlaying(true);
  }

  const handleShowCard = (index) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...cards];

      if (!tmpGrid[index].permanentShown && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShownCount(state => state + 1);
      }

      setCards(tmpGrid);
    }
  }

  const generateScore = () => {
    if (timeElapsed < 60) {
      setPoints(state => state + 5);
    } else if (timeElapsed >= 61 || timeElapsed <= 75) {
      setPoints(state => state + 4);
    } else if (timeElapsed >= 76 || timeElapsed <= 90) {
      setPoints(state => state + 3);
    } else if (timeElapsed >= 91 || timeElapsed <= 120) {
      setPoints(state => state + 2);
    } else {
      setPoints(state => state + 1);
    }
  }

  const timePointer = () => {
    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setCountTimer(state => state + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  }

  const handleChangeLevel = () => {
    let tempLevel = level;
    tempLevel++;
    setLevel(tempLevel);

    let tempGeneralRound = rodadaGeral;
    tempGeneralRound++;
    setNewRodada(tempGeneralRound);

    const newStatus = [...statusColor];
    newStatus[rodadaGeral] = 1;
    setStatusColor(newStatus);
    
    if (countTimer > 121) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);
    }

    generateScore();
    setPlaying(false);
    newRound(tempLevel);
  }

  const handleFinish = () => {
    generateScore();
    setPlaying(false);
    setFinished(false);

    const newStatus = [...statusColor];
    newStatus[rodadaGeral] = 1;
    setStatusColor(newStatus);
    
    if (countTimer > 121) {
      const newStatus = [...statusColor];
      newStatus[rodadaGeral] = 2;
      setStatusColor(newStatus);
    }

    if (timeElapsed > 242) {
      setTimeout(() => {
        navigate("/GameOver");
      }, 1000);
    } else {
      setTimeout(() => {
        navigate("/WellDone");
      }, 1000);
    }
  }
  
  useEffect(() => {
    loadLesson();
  }, []);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = cards.filter(item => item.shown === true);

      if (opened.length === 2) {
        if (opened[0].item.status === opened[1].item.status) {
          const updateGridItems = cards.map(item => (
            { ...item, permanentShown: item.shown ? true : item.permanentShown, shown: false }
          ));

          setCards(updateGridItems);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let updateGridItems = cards.map(item  => (
              { ...item, shown: false }
            ))

            setCards(updateGridItems);
            setShownCount(0);
          }, 1000);

          setMoveCount(state => state + 1);
        }
      }
    }
  }, [cards, shownCount]);

  useEffect(() => {
    const allItemShown = cards.every(item => item.permanentShown === true);
  
    if (moveCount > 0 && allItemShown) {
      if (level < 2) {
        setTimeout(() => {
          handleChangeLevel();
        }, 1500);
      } else {
        setTimeout(() => {
          handleFinish();
        }, 1500);
      }
    }
  }, [cards, setFinished]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(state => state + 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLessonSL6 trophyEnd superTaskStart numStart="Super task" numEnd="Finish" title="Super task 2" />
      <TitleLesson title="Memory Game." />

      <Main>
        <Grid>
          {cards.map((card, index) => {
            return (
              <Card key={index} onClick={() => handleShowCard(index)}>
                {card.permanentShown === false && card.shown === false &&
                  <Icon src={LogoImg} alt="" opacity={0.3} />
                }
                {(card.permanentShown || card.shown) && card.item !== null &&
                  <>
                    {card.item.name ?
                      <p>{card.item.name}</p>
                      :
                      <p>{card.item.resposta}</p>
                    }
                  </>
                }
              </Card>
            )
          })}
        </Grid>
      </Main>

      <AreaFooterFullBtn title="Tasks" rota="/lessonSelected" />
    </Container>
  )
}