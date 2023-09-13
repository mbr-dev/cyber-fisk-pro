import { useState, createContext, useContext, useEffect } from "react";

import { Board } from "./components/Board";
import { KeyBoard } from "./components/KeyBoard";
import { Notifications } from "../Notifications";
import { HeaderLesson } from "../HeaderLesson";

import { LessonContext } from "../../context/lesson";

import { GameWordleContainer, GameWordleMain } from "./styles";

export const GameWordleContext = createContext();

export const GameWordle = () => {
  const { setTimeElapsed, rodadaGeral, timeElapsed } = useContext(LessonContext);
  console.log("GAME TIME: ", timeElapsed);

  const correctWord = "RIGHTSS";
  const wordLength = correctWord.length;
  
  const numberOfRows = 6;
  
  const boardDefault2 = Array.from({ length: numberOfRows }, () => Array(wordLength).fill(""));
  
  const [board, setBoard] = useState(boardDefault2);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letter: 0 });
  const [disabledLetters, setDisabledLetters] = useState([]);


  const onSelectLetter = (key) => {
    if (currentAttempt.letter > (wordLength - 1)) {
      return;
    }

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter + 1 });
  }

  const onEnterLetter = () => {
    if (currentAttempt.letter !== wordLength) {
      return;
    }

    let currentWord = "";

    for (let i = 0; i < wordLength; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }

    setCurrentAttempt({ attempt: currentAttempt.attempt + 1, letter: 0 });

    if (currentWord === correctWord) {
      alert("Acertou a palavra");
      return;
    }

    if (currentAttempt.attempt === 5) {
      alert("Game Over");
      return;
    }
  }

  const onDeleteLetter = () => {
    if (currentAttempt.letter === 0) {
      return;
    }

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter - 1 });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(state => {
        return state + 1
      })
      
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [setTimeElapsed])

  return (
    <GameWordleContainer>
      <HeaderLesson numStart="Wordle" numEnd="Next" />

      {wordLength > 7 &&
        <Notifications
          description="Palavra deve conter no máximo 8 caracteres." 
        />
      }

      <GameWordleContext.Provider value={{
        board,
        wordLength,
        correctWord,
        currentAttempt,
        disabledLetters,
        onEnterLetter,
        onSelectLetter,
        onDeleteLetter,
        setDisabledLetters,
      }}>
        <GameWordleMain>
          <Board />
          <KeyBoard />
        </GameWordleMain>
      </GameWordleContext.Provider>
    </GameWordleContainer>
  )
}