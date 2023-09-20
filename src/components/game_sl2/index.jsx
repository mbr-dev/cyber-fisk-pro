import { useEffect, useState, useContext } from "react";

import { HeaderLesson } from "../HeaderLesson";
import { GridItem } from "./components/GridItem";

import { LessonContext } from "../../context/lesson";
import { SL2_FACIL } from "../../utils/Lesson2_Task1";

import { GameSL2Container, GameSL2Main, GridArea, Grid } from "./styles";

export const GameSL2 = () => {
  const { rodadaGeral, setTimeElapsed, timeElapsed } = useContext(LessonContext);
  //console.log("GAME TIME: ", timeElapsed);

  const [playing, setPlaying] = useState(false);
  const [moveCount, setMoveCount] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [gridItems, setGridItems] = useState([]);

  const createGrid = () => {
    let tmpGrid = [];
    let totalOfItems = SL2_FACIL.length;

    for (let a = 0; a < (totalOfItems * 2); a++) {
      tmpGrid.push({ item: null, shown: false, permanentShown: false });
    }

    for (let a = 0; a < 2; a++) {
      for (let b = 0; b < totalOfItems; b++) {
        let position = -1;

        while (position < 0 || tmpGrid[position].item !== null) {
          position = Math.floor(Math.random() * (totalOfItems * 2));
        }

        tmpGrid[position].item = b;
      }
    }

    setGridItems(tmpGrid);
    setPlaying(true);
  }

  const resetGrid = () => {
    setMoveCount(0);
    setShownCount(0);
    setGridItems([]);
    createGrid();
  }

  const handleItemClick = (index) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (!tmpGrid[index].permanentShown && !tmpGrid[index].shown) {
        tmpGrid[index].shown = true;
        setShownCount(state => state + 1);
      }

      setGridItems(tmpGrid);
    }
  }

  useEffect(() => {
    resetGrid();
  }, [])

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter(item => item.shown === true);

      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          const updateGridItems = gridItems.map(item => (
            { ...item, permanentShown: item.shown ? true : item.permanentShown, shown: false }
          ));

          setGridItems(updateGridItems);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let updateGridItems = gridItems.map(item  => (
              { ...item, shown: false }
            ))

            setGridItems(updateGridItems);
            setShownCount(0);
          }, 1000);

          setMoveCount(state => state + 1);
        }
      }
    }
  }, [gridItems, shownCount])

  useEffect(() => {
    const allItemShown = gridItems.every(item => item.permanentShown === true);

    if (moveCount > 0 && allItemShown) {
      setPlaying(false);
      alert("Game finalizado");
    }
  }, [moveCount, gridItems])

  useEffect(() => {
    const timer = setInterval(() => {
      if (rodadaGeral < 10) {
        setTimeElapsed(state => state + 1)
      }
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed, rodadaGeral])

  return (
    <GameSL2Container>
      <HeaderLesson superTaskStart trophyEnd numStart="Super task" numEnd="Finish" />

      <GameSL2Main>
        <h2>Memory Game</h2>

        <GridArea>
          <Grid style={{
            gridTemplateColumns: gridItems.length <= 12 ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
            gap: gridItems.length <= 12 ? "1.5rem" : "0.625rem"
          }}>
            {gridItems.map((gridItem, index) => {
              return (
                <GridItem
                  key={index}
                  gItem={gridItem}
                  onItemClick={() => handleItemClick(index)}
                />
              )
            })}
          </Grid>
        </GridArea>
      </GameSL2Main>
    </GameSL2Container>
  )
}