import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { api } from "../../lib/api";
import { LessonContext } from "../../context/lesson";

import LogoImg from "../../assets/logoIcon.png";

import { Container, Main, Grid, Card, Icon } from "./styles";

export const GameSL6 = () => {
  const { setTimeElapsed, timeElapsed } = useContext(LessonContext);

  const navigate = useNavigate();

  const [playing, setPlaying] = useState(false);
  const [data, setData] = useState();
  const [level, setLevel] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [cards, setCards] = useState([]);
  const [reset, setReset] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }, [setIsLoading, setData, setPlaying, setCards]);

  const newRound = (level) => {
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
    let tempPoints = points;

    if (timeElapsed < 60) {
      tempPoints += 5;
      setPoints(tempPoints);
    } else if (timeElapsed >= 61 || timeElapsed <= 75) {
      tempPoints += 4;
      setPoints(tempPoints);
    } else if (timeElapsed >= 76 || timeElapsed <= 90) {
      tempPoints += 3;
      setPoints(tempPoints);
    } else if (timeElapsed >= 91 || timeElapsed <= 120) {
      tempPoints += 2;
      setPoints(tempPoints);
    } else {
      tempPoints++;
      setPoints(tempPoints);
    }
  }

  const handleChangeLevel = () => {
    let tempLevel = level;
    tempLevel++;
    setLevel(tempLevel);

    generateScore();
    setPlaying(false);

    setTimeout(() => {
      setReset(false);
      newRound(tempLevel);
    }, 1500);
  }

  const handleFinish = () => {
    generateScore();
    setPlaying(false);
    setFinished(false);

    setTimeout(() => {
      navigate("/WellDone")
    }, 1500);
  }
  
  useEffect(() => {
    loadLesson();
  }, []);

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
        setReset(true);
      } else {
        setFinished(true);
      }
    }
  }, [cards, setReset, setFinished]);

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
      <TitleLesson title="Memory Game." />

      <Main>
        <Grid style={{
          gridTemplateColumns: cards.length <= 12 ? "repeat(3, auto)" : "repeat(4, auto)",
          gap: cards.length <= 12 ? "1.125rem" : "0.75rem",
        }}>
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
      {reset && 
        <ButtonBg
          w="10rem"
          h="3"
          title="Next Level"
          mt="2rem"
          onPress={handleChangeLevel}
        />
      }
      {finished && 
        <ButtonBg
          w="10rem"
          h="3"
          title="Finished"
          mt="2rem"
          onPress={handleFinish}
        />
      }
    </Container>
  )
}