import { useEffect, useState, useContext, useCallback } from "react";

import { Loading } from "../Loading";
import { TitleLesson } from "../TitleLesson";
import { HeaderLesson } from "../HeaderLesson";

import { api } from "../../lib/api";
import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";
import { L2_SUPER_LESSON } from "../../utils/Lesson2_Task";

import LogoImg from "./images/logoIcon.png";

import { Container, Main, Grid, Card, Icon } from "./styles";

export const GameSL2 = () => {
  const { setTimeElapsed, timeElapsed } = useContext(LessonContext);

  const [playing, setPlaying] = useState(false);
  const [level, setLevel] = useState(0);
  const [data, setData] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadLesson = useCallback(async() => {
    const dataLength = level === 0 ? 6 : 8;

    const nameFilter = L2_SUPER_LESSON.filter(item => item.name);
    
    let tempRandom = [];
    for (let a = 0; a < nameFilter.length; a++) {
      tempRandom.push(a);
    }
    tempRandom = tempRandom.sort(() => Math.random() - 0.5);

    let nameRandom = []
    for (let a = 0; a < dataLength; a++) {
      nameRandom.push(nameFilter[tempRandom[a]]);
    }

    let imgFilter = [];
    nameRandom.forEach(nameItem => {
      const status = nameItem.status;
      const images = L2_SUPER_LESSON.filter(item => item.status === status && item.img);
      imgFilter = imgFilter.concat(images);
    });

    let tempGridFake = nameRandom.concat(imgFilter);
    tempGridFake = tempGridFake.sort(() => Math.random() - 0.5);
    
    let tempGrid = [];
    for (let a = 0; a < (dataLength * 2 ); a++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    let tempRandomGrid = [];
    for (let a = 0; a < (dataLength * 2); a++) {
      tempRandomGrid.push(a);
    }
    tempRandomGrid = tempRandomGrid.sort(() => Math.random() - 0.5);
    
    for (let a = 0; a < (dataLength * 2); a++) {
      tempGrid[a].item = tempGridFake[tempRandomGrid[a]]
    }
    
    setCards(tempGrid);
    setPlaying(true);
  }, [setPlaying, setCards]);

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

  useEffect(() => {
    loadLesson();
  }, [])

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
        tempPoints += 1;
        setPoints(tempPoints);
      }

      alert(tempPoints);
      setPlaying(false);
      alert("Game finalizado");
    }
  }, [moveCount, cards, timeElapsed])

  useEffect(() => {
    const timer = setInterval(() => {
      if (rodadaGeral < 10) {
        setTimeElapsed(state => state + 1)
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />
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
                      <img src={`${URL_FISKPRO}images/essentials1/lesson2/${card.item.img}.png`} alt="" />
                    }
                  </>
                }
              </Card>
            )
          })}
        </Grid>
      </Main>
    </Container>
  )
}