import { useContext, useEffect, useCallback } from "react";

import { GameWordleContext } from "../..";

import { Key } from "../Key";

import { KeyBoardContainer, Line1, Line2, Line3 } from "./styles"

export const KeyBoard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onSelectLetter, onEnterLetter, onDeleteLetter, disabledLetters } = useContext(GameWordleContext);

  const handleKeyboard = useCallback(event => {
    if (event.key === "Enter") {
      onEnterLetter();
    } else if (event.key === "Backspace") {
      onDeleteLetter();
    } else {
      keys1.forEach(key => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })

      keys2.forEach(key => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })

      keys3.forEach(key => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      })
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <KeyBoardContainer onKeyDown={handleKeyboard}>
      <Line1>
        {keys1.map((key, index) => {
          return (
            <Key 
              key={index} 
              keyValue={key} 
              disabled={disabledLetters.includes(key)} 
            />
          )
        })}
      </Line1>

      <Line2>
        {keys2.map((key, index) => {
          return (
            <Key 
              key={index}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
          )
        })}
        <Key keyValue="DEL" bigKey />
      </Line2>

      <Line3>
        {keys3.map((key, index) => {
          return (
            <Key 
              key={index}
              keyValue={key}
              disabled={disabledLetters.includes(key)}
            />
            )
          })}
        <Key keyValue="ENTER" bigKey />
      </Line3>
    </KeyBoardContainer>
  )
}