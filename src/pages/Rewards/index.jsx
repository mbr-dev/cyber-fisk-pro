import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { URL_FISKPRO } from "../../config/infos";
import { HeaderText } from "../../components/HeaderText";
import { itemsDoAvatar } from "../../utils/avatarItems";

import cabecaImg from "../../assets/cabeca.png";
import bracosImg from "../../assets/bracos.png";
import corpoImg from "../../assets/corpo.png";
import faceImg from "../../assets/face.png";
import oculosImg from "../../assets/oculos.png";
import petsImg from "../../assets/pets.png";
import pernasImg from "../../assets/pernas.png";
import Dollar from "../../assets/Dollar.svg";


import { Container, Bottom, Main, Separator, Top, Footer, Button, Money, Card, CardReward, Right, Left, Title, BottomFooter, DivDesk, DivMobile } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Rewards = () => {
  const navigate = useNavigate();

  const [selecionado, setSelecionado] = useState("Cabecas");
  const [itemSelecionado, setItemSeleciona] = useState([]);
  const [titulo, setTitulo] = useState("");

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2.5,
      spacing: 16,
    },
  });

  const handleGoHome = () => {
    navigate("/Home");
  }

  const handleGoShop = () => {
    navigate("/Avatar");
  }

  const handleSelecionarItem = (item) => {
    if (item === "Cabecas") {
      const cabecaL = itemsDoAvatar.cabeca.length;
      let tempCabeca = [];
      for (let a = 0; a < cabecaL; a++) {
        tempCabeca.push(itemsDoAvatar.cabeca[a]);
      }
      setSelecionado(item);
      setItemSeleciona(tempCabeca);
      setTitulo("Cabeça");
    } else if (item === "Acessorios") {
      const acessoriosL = itemsDoAvatar.acessorios.length;
      let tempAcessorios = [];
      for (let a = 0; a < acessoriosL; a++) {
        tempAcessorios.push(itemsDoAvatar.acessorios[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempAcessorios);
      setTitulo("Acessórios");
    } else if (item === "Expressao_Robot") {
      const faceL = itemsDoAvatar.face.length;
      let tempFace = [];
      for (let a = 0; a < faceL; a++) {
        tempFace.push(itemsDoAvatar.face[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempFace);
      setTitulo("Expressão Facil");
    } else if (item === "Bracos") {
      const bracoL = itemsDoAvatar.braco.length;
      let tempBracos = [];
      for (let a = 0; a < bracoL; a++) {
        tempBracos.push(itemsDoAvatar.braco[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempBracos);
      setTitulo("Braço");
    } else if (item === "Tronco") {
      const troncoL = itemsDoAvatar.tronco.length;
      let tempTronco = [];
      for (let a = 0; a < troncoL; a++) {
        tempTronco.push(itemsDoAvatar.tronco[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempTronco);
      setTitulo("Corpo");
    } else if (item === "Pernas") {
      const pernasL = itemsDoAvatar.pernas.length;
      let tempPernas = [];
      for (let a = 0; a < pernasL; a++) {
        tempPernas.push(itemsDoAvatar.pernas[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempPernas);
      setTitulo("Perna");
    } else if (item === "Pets") {
      const petL = itemsDoAvatar.pet.length;
      let tempPet = [];
      for (let a = 0; a < petL; a++) {
        tempPet.push(itemsDoAvatar.pet[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempPet);
      setTitulo("Pet");
    }
  }

  useEffect(() => {
    const cabecaL = itemsDoAvatar.cabeca.length;
    let tempCabeca = [];
    for (let a = 0; a < cabecaL; a++) {
      tempCabeca.push(itemsDoAvatar.cabeca[a])
    }
    setSelecionado("Cabecas");
    setItemSeleciona(tempCabeca);
    setTitulo("Cabeça");
  }, []);
  
  return (
    <Container>
      <HeaderText title="XP Balance & Rewards" />

      <Main>
        <Left>
          <Top>
            <Button>Balance</Button>
            <Money>
              <img src={Dollar} alt="Dollar" />
              <span>10</span>
              <p>Fisk Dollars</p>
            </Money>
            <DivMobile>
              <Button>Rewards</Button>
            </DivMobile>
          </Top>
        </Left>

        <Right>
          <DivDesk>
            <Button>Rewards</Button>
          </DivDesk>

          <Separator>
            <Card onClick={() => handleSelecionarItem("Cabecas")} style={{
              backgroundColor: selecionado === "Cabecas" && defaultTheme["red-200"],
              borderColor: selecionado === "Cabecas" && defaultTheme["gray-700"]
            }} >
              <img src={cabecaImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Tronco")} style={{
              backgroundColor: selecionado === "Tronco" && defaultTheme["red-200"],
              borderColor: selecionado === "Tronco" && defaultTheme["gray-700"]
            }} >
              <img src={corpoImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Bracos")} style={{
              backgroundColor: selecionado === "Bracos" && defaultTheme["red-200"],
              borderColor: selecionado === "Bracos" && defaultTheme["gray-700"]
            }} >
              <img src={bracosImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Pernas")} style={{
              backgroundColor: selecionado === "Pernas" && defaultTheme["red-200"],
              borderColor: selecionado === "Pernas" && defaultTheme["gray-700"]
            }} >
              <img src={pernasImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Expressao_Robot")} style={{
              backgroundColor: selecionado === "Expressao_Robot" && defaultTheme["red-200"],
              borderColor: selecionado === "Expressao_Robot" && defaultTheme["gray-700"]
            }} >
              <img src={faceImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Acessorios")} style={{
              backgroundColor: selecionado === "Acessorios" && defaultTheme["red-200"],
              borderColor: selecionado === "Acessorios" && defaultTheme["gray-700"]
            }} >
              <img src={oculosImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("Pets")} style={{
              backgroundColor: selecionado === "Pets" && defaultTheme["red-200"],
              borderColor: selecionado === "Pets" && defaultTheme["gray-700"]
            }} >
              <img src={petsImg} alt="" />
            </Card>
          </Separator>

          <Title><p>{titulo}</p></Title>
          {/* o carrousel ñ fica dinamico por isso cada parte tem que ter seu carrousel */}
          {titulo === "Cabeça" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Acessórios" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Expressão Facil" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Braço" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Corpo" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Perna" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {titulo === "Pet" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }
        </Right>
      </Main>

      <Footer>
        <BottomFooter onClick={handleGoHome}>
          <p>Home</p>
        </BottomFooter>
        <BottomFooter $green="green" onClick={handleGoShop}>
          <p>Shop</p>
        </BottomFooter>
      </Footer>
    </Container>
  )
}