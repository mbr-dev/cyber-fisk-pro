import { useContext } from "react";

import { GameWordleContext } from "../..";

import { Letters } from "../Letters"

import { BoardContainer, BoardRow } from "./styles"

export const Board = () => {
  const { wordLength, onSelectLetter } = useContext(GameWordleContext);
  const maxColumn = Math.min(7, wordLength);

  return (
    <BoardContainer>
      {[...Array(6).keys()].map((rowIndex) => {
        return (
          <BoardRow key={rowIndex}>
            {[...Array(maxColumn).keys()].map((columnIndex) => {
              return (
                <Letters
                  key={columnIndex}
                  letterPosition={columnIndex}
                  attemptValue={rowIndex}
                  onSelectLetter={letter => onSelectLetter(letter)}
                />
              )
            })}
          </BoardRow>
        )
      })}
    </BoardContainer>
  )
}