import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Loading } from "../Loading";
import { ButtonBg } from "../ButtonBg";
import { TitleLesson } from "../titleLesson";

import { api } from "../../lib/api";
import { URL_FISKPRO } from "../../config/infos";
import { LessonContext } from "../../context/lesson";

import LogoImg from "../../assets/logoIcon.png";

import { Container, Main, Grid, Card, Icon } from "./styles";

export const GameSL2 = () => {
  const { setTimeElapsed, timeElapsed } = useContext(LessonContext);

  const navigate = useNavigate();

  const [playing, setPlaying] = useState(false);
  const [level, setLevel] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [cards, setCards] = useState([]);
  const [reset, setReset] = useState(false);
  const [finished, setFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const loadLesson = useCallback(async() => {
    try {
      setIsLoading(true);
      const response = await api.get("/SuperTaskAtividades/Retorno?id_livro=53&num_lesson=2&num_task=1");
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

      let imgFilter = [];
      nameRandom.forEach(nameItem => {
        const status = nameItem.status;
        const images = items.filter(item => item.status === status && item.img);
        imgFilter = imgFilter.concat(images);
      });

      let tempGridFake = nameRandom.concat(imgFilter);
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

  const newRound = () => {
    const items = data.map(item => {
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
    for (let a = 0; a < 8; a++) {
      nameRandom.push(nameFilter[tempRandom[a]]);
    }

    let imgFilter = [];
    nameRandom.forEach(nameItem => {
      const status = nameItem.status;
      const images = items.filter(item => item.status === status && item.img);
      imgFilter = imgFilter.concat(images);
    });

    let tempGridFake = nameRandom.concat(imgFilter);
    tempGridFake = tempGridFake.sort(() => Math.random() - 0.5);
      
    let tempGrid = [];
    for (let a = 0; a < (8 * 2 ); a++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    let tempRandomGrid = [];
    for (let a = 0; a < (8 * 2); a++) {
      tempRandomGrid.push(a);
    }
    tempRandomGrid = tempRandomGrid.sort(() => Math.random() - 0.5);
    
    for (let a = 0; a < (8 * 2); a++) {
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

  const handleChangeLevel = () => {
    let tempLevel = level;
    tempLevel++;
    setLevel(tempLevel);
    
    generateScore();
    setPlaying(false);
    
    setTimeout(() => {
      setReset(false);
      newRound();
    }, 1500);
  }

  const handleFinish = () => {
    generateScore();
    setPlaying(false);
    setFinished(false);

    setTimeout(() => {
      navigate("/WellDone")
    }, 2000);
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
      if (level === 1) {
        setFinished(true);
      } else {
        setReset(true);
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
                      <img src={`${URL_FISKPRO}images/essentials1/lesson2/${card.item.img}.png`} alt="" />
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