import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import * as Dialog from "@radix-ui/react-dialog";
import { apiQAS } from "../../lib/api";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";

import { Modal } from "./components/Modal";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import Roleta from "./images/Roleta.png";
import Setta from "./images/setta.png";
import Lose from "./images/lose.png";

import { ButtonTip, Container, Header, HeaderButton, Main, ButtonStart, WheelContainer } from "./styles";

export const SpinWheel = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  
  const navigate = useNavigate();

  const data = [
    {option: "150 $", style: {backgroundColor: "#3171FF", textColor: "#232323", borderRadius: "50px" }},
    {option: "10 $", style: {backgroundColor: "#F5DB02", textColor: "#232323"}},
    {option: "600 $", style: {backgroundColor: "#9D03CF", textColor: "#232323"}},
    {option: "300 LOSE", style: {backgroundColor: "#11C913", textColor: "#E52929"}},
    {option: "250 $", style: {backgroundColor: "#1ECFFF", textColor: "#232323"}},
    {option: "60 $", style: {backgroundColor: "#EA3F3F", textColor: "#D4ECFF"}},
    {option: "1000 $", style: {backgroundColor: "#DDDDDD", textColor: "#232323"}},
    {option: "50 $", style: {backgroundColor: "#EF8137", textColor: "#D4ECFF"}},
    {option: "100 $", style: {backgroundColor: "#25FFC1", textColor: "#232323"}},
    {option: "100 LOSE", style: {backgroundColor: "#5D5D5D", textColor: "#E52929"}},
    {option: "300 $", style: {backgroundColor: "#FFC86E", textColor: "#232323"}},
    {option: "30 $", style: {backgroundColor: "#FF34C5", textColor: "#D4ECFF"}}
  ]
  
  const isMobile = window.matchMedia("(max-width: 360px)").matches;
  const isTablet = window.matchMedia("(min-width: 768px)").matches;

  const pointerProps = {
    src: Setta,
    style: {
      width: isMobile ? "60px" : isTablet ? "100px" : "70px",
      height: isMobile ? "60px" : isTablet ? "100px" : "70px",
      top: isTablet ? "10px" : "5px",
      right: isTablet ? "-5px" : "-2px",
    },
  };
  
  const handleSpinClick = async() => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setTimeout(async() =>{
        console.log("Você ganho: ", data[newPrizeNumber].option);
        const cookies = new Cookies();
        const raf = cookies.get("raf");
        let valor = 0;
        let tipo = "credito";
        try{
          if(data[newPrizeNumber].option.includes("LOSE")){
            valor = parseInt(data[newPrizeNumber].option.replace("LOSE","").trim());
            tipo = "debito"
          }else if(data[newPrizeNumber].option.includes("$")){
            valor = parseInt(data[newPrizeNumber].option.replace("$","").trim());
          }
        }catch{
          valor = 0;
        }
        await apiQAS.get(`/FiskDolars/Registrar?raf=${raf}&tipo=${tipo}&descricao=roleta&valor=${valor}`)
        .then((resp) =>{
          if(resp.data.erro === null){
            navigate("/WellDone");
          }
        })
      }, 12000);
      
      
    }
  }

  return (
    <Container>
      <Header>
        <HeaderButton>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonTip>?</ButtonTip>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
          {/* <ButtonCloseHeader /> */}
        </HeaderButton>
        <h2>SPIN</h2>
        <h2>THE WHEELS</h2>
      </Header>

      <Main>
        <WheelContainer>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
            fontSize={24}
            fontWeight={800}
            innerRadius={10}
            innerBorderColor="#142D56"
            innerBorderWidth={5}
            outerBorderColor="#142D56"
            outerBorderWidth={5}
            radiusLineColor="#142D56"
            radiusLineWidth={6}
            textDistance={60}
            startingOptionIndex={1}
            pointerProps={pointerProps}
          />
        </WheelContainer>
        <img src={Roleta} alt="" className="roletaWheel" />
        <ButtonStart onClick={handleSpinClick}></ButtonStart>
      </Main>
    </Container>
  )
}