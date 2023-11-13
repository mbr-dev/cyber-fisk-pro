import { useState, createContext, useContext, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Delete } from "lucide-react";

import { Modal } from "./components/Modal";
import { Notifications } from "../Notifications";
import { HeaderText } from "../HeaderText";

import { LessonContext } from "../../context/lesson";

import CoinImg from "./image/coin.svg";
import IImg from "./image/iSVG.svg";
import { defaultTheme } from "../../themes/defaultTheme";
import { Container, Main, Line1, Line2, Line3, KeyBoard, Key, Button, ButtonArea, Board, BoardRow, Letters, Coin, Info, InfoArea } from "./styles";


export const GameWordle = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const correctWord = "RIGHT";
  const wordLength = correctWord.length;
  const numberOfRows = 6;
  const boardDefault = Array.from({ length: numberOfRows }, () => Array(wordLength).fill(""));
  const maxColumn = Math.min(correctWord.length, wordLength);
  
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({ attempt: 0, letter: 0 });
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [rightLetters, setRightLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);

  const handleSelectLetter = (word) => {
    if (word === "ENTER") {
      verifyWord();
    } else if (word === "DELETE") {
      deleteLetter();
    } else {
      putLetter(word);
    }
  }

  const putLetter = (key) => {
    if (currentAttempt.letter > (wordLength - 1)) {
      return;
    }

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter] = key;
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter + 1 });
  }

  const deleteLetter = () => {
    if (currentAttempt.letter === 0) return;

    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letter - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter - 1 });
  }

  const verifyWord = () => {
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
    } else {
      for (let a = 0; a < wordLength; a++) {
        const letter = board[currentAttempt.attempt][a];

        if (letter === correctWord[a]) {
          setRightLetters(state => [...state, letter]);
        } else if (correctWord.includes(letter)) {
          setAlmostLetters(state => [...state, letter]);
        } else if (!correctWord.includes(letter)) {
          setDisabledLetters(state => [...state, letter]);
        }
      }
    }

    if (currentAttempt.attempt === 5) {
      alert("Game Over");
      return;
    }
  }

  const handleShowLetter = () => {
    if (currentAttempt.attempt < numberOfRows) {
      const correctLetter = correctWord[currentAttempt.letter];
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letter] = correctLetter;
      setBoard(newBoard);
      setCurrentAttempt({ ...currentAttempt, letter: currentAttempt.letter + 1 });
    }
  }

  return (
    <Container>
      <HeaderText title="Desafio Diário" />

      {wordLength > 7 &&
        <Notifications
          description="Palavra deve conter no máximo 8 caracteres." 
        />
      }
      
      <Main>
        <InfoArea>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Info><img src={IImg} alt="" /></Info>
            </Dialog.Trigger>

            <Modal />
          </Dialog.Root>
          
          <Coin>
            <img src={CoinImg} /> <span>10</span>
          </Coin>
        </InfoArea>

        <Board>
          {[...Array(numberOfRows).keys()].map((rowIndex) => {
            return (
              <BoardRow key={rowIndex}>
                {[...Array(maxColumn).keys()].map((columnIndex) => {
                  const letter = board[rowIndex][columnIndex];
                  const correct = correctWord[columnIndex] === letter;
                  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
                  const letterState = currentAttempt.attempt > rowIndex && (correct ? "correct" : almost ? "almost" : "error");
                  
                  return (
                    <Letters
                      key={columnIndex}
                      className={letterState}
                      style={{
                        borderColor: (currentAttempt.attempt === rowIndex) && (currentAttempt.letter === columnIndex) ? defaultTheme["yellow-100"] : "",
                        WebkitTextStrokeColor: correct ? defaultTheme["green-400"] : almost ? defaultTheme["yellow-400"] : "",
                      }}
                    >
                      {/* {board[rowIndex][columnIndex]} */}
                      {board[rowIndex][columnIndex]}
                    </Letters>
                  )
                })}
              </BoardRow>
            )
          })}
        </Board>

        <ButtonArea>
          <Button $variant="green" onClick={handleShowLetter}>
            <img src={CoinImg} alt="coin" />Revelar Letra
          </Button>
          <Button onClick={() => handleSelectLetter("ENTER")}>Enviar</Button>
        </ButtonArea>

        <KeyBoard>
          <Line1>
            {keys1.map((key, index) => {
              return (
                <Key
                  key={index}
                  onClick={() => handleSelectLetter(key)}
                  style={{
                    backgroundColor: 
                      rightLetters.includes(key) ? defaultTheme["green-500"] : almostLetters.includes(key) ? defaultTheme["yellow-300"] : disabledLetters.includes(key) ? defaultTheme["gray-600"] : "",
                    color: 
                      rightLetters.includes(key) || almostLetters.includes(key) || disabledLetters.includes(key) ? defaultTheme.white : "",
                    borderColor: 
                      rightLetters.includes(key) ? defaultTheme["green-400"] : almostLetters.includes(key) ? defaultTheme["yellow-400"] : disabledLetters.includes(key) ? defaultTheme["gray-700"] : "",
                  }}
                >
                  {key}
                </Key>
              )
            })}
          </Line1>

          <Line2>
            {keys2.map((key, index) => {
              return (
                <Key
                  key={index}
                  onClick={() => handleSelectLetter(key)}
                  style={{
                    backgroundColor: 
                      rightLetters.includes(key) ? defaultTheme["green-500"] : almostLetters.includes(key) ? defaultTheme["yellow-300"] : disabledLetters.includes(key) ? defaultTheme["gray-600"] : "",
                    color: 
                      rightLetters.includes(key) || almostLetters.includes(key) || disabledLetters.includes(key) ? defaultTheme.white : "",
                    borderColor: 
                      rightLetters.includes(key) ? defaultTheme["green-400"] : almostLetters.includes(key) ? defaultTheme["yellow-400"] : disabledLetters.includes(key) ? defaultTheme["gray-700"] : "",
                  }}
                >
                  {key}
                </Key>
              )
            })}
          </Line2>

          <Line3>
            {keys3.map((key, index) => {
              return (
                <Key
                  key={index}
                  onClick={() => handleSelectLetter(key)}
                  style={{
                    backgroundColor: 
                      rightLetters.includes(key) ? defaultTheme["green-500"] : almostLetters.includes(key) ? defaultTheme["yellow-300"] : disabledLetters.includes(key) ? defaultTheme["gray-600"] : "",
                    color: 
                      rightLetters.includes(key) || almostLetters.includes(key) || disabledLetters.includes(key) ? defaultTheme.white : "",
                    borderColor: 
                      rightLetters.includes(key) ? defaultTheme["green-400"] : almostLetters.includes(key) ? defaultTheme["yellow-400"] : disabledLetters.includes(key) ? defaultTheme["gray-700"] : "",
                  }}
                >
                  {key}
                </Key>
                )
              })}
            <Key
              onClick={() => handleSelectLetter("DELETE")}
              className="keyDelete"
            ><Delete color="white" /></Key>
          </Line3>
        </KeyBoard>
      </Main>
    </Container>
  )
}