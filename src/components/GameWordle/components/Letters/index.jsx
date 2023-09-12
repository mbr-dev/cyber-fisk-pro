import { useContext, useEffect, useState } from "react";

import { GameWordleContext } from "../../";

import { LettersContainer } from "./styles";

export const Letters = ({ letterPosition, attemptValue }) => {
  const { board, correctWord, currentAttempt, setDisabledLetters, setBoard } = useContext(GameWordleContext);

  const letter = board[attemptValue][letterPosition];
  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  
  const letterState = currentAttempt.attempt > attemptValue && (correct ? "correct" : almost ? "almost" : "error");
  
  const isActive = 
  (currentAttempt.attempt === attemptValue) 
  && 
  (currentAttempt.letter === letterPosition);

  //const [inputValue, setInputValue] = useState(letter);

  /* const handleCLick = () => {
    const newBoard = [...board];
    newBoard[attemptValue][letterPosition] = inputValue;
    setBoard(newBoard);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  } */

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters(state => [...state, letter]);
    }
  }, [currentAttempt.attempt])

  return (
    <LettersContainer
      className={`${isActive ? "letterActive" : ""} ${letterState}`}
      /* onClick={handleCLick} */
    >
      {letter} 
      {/* <Input 
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={event => event.stopPropagation()}
      /> */}
    </LettersContainer>
  )
}