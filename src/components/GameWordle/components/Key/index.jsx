import { useContext } from "react";

import { GameWordleContext } from "../..";

import { KeyContainer } from "./styles"

export const Key = ({ keyValue, bigKey, disabled }) => {
  const { onSelectLetter, onEnterLetter, onDeleteLetter } = useContext(GameWordleContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnterLetter();
    } else if (keyValue === "DEL") {
      onDeleteLetter();
    } else {
      onSelectLetter(keyValue);
    }
  }

  return (
    <KeyContainer
      className={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyValue}
    </KeyContainer>
  )
}