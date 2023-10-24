import { useState } from "react";
import { Wheel } from "react-custom-roulette";

import { Container } from "./styles";

export const SpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "150 $" },
    { option: "10 $" },
    { option: "600 $" },
    { option: "300 LOSE" },
    { option: "250 $" },
    { option: "60 $" },
    { option: "1000 $" },
    { option: "50 $" },
    { option: "100 $" },
    { option: "100 LOSE" },
    { option: "300 $" },
    { option: "30 $" }
  ]

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <Container>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </Container>
  )
}