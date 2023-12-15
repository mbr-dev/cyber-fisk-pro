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

  const [selected, setSelected] = useState("");
  const [itemSelecionado, setItemSeleciona] = useState([]);
  const [title, setTitle] = useState("");

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
    if (item === "cabecas") {
      const cabecaL = itemsDoAvatar.cabeca.length;
      let tempCabeca = [];
      for (let a = 0; a < cabecaL; a++) {
        tempCabeca.push(itemsDoAvatar.cabeca[a]);
      }
      setSelected(item);
      setItemSeleciona(tempCabeca);
      setTitle("Cabeça");

    } else if (item === "acessorios") {
      const acessoriosL = itemsDoAvatar.acessorios.length;
      let tempAcessorios = [];
      for (let a = 0; a < acessoriosL; a++) {
        tempAcessorios.push(itemsDoAvatar.acessorios[a])
      }
      setSelected(item);
      setItemSeleciona(tempAcessorios);
      setTitle("Acessórios");

    } else if (item === "face") {
      const faceL = itemsDoAvatar.face.length;
      let tempFace = [];
      for (let a = 0; a < faceL; a++) {
        tempFace.push(itemsDoAvatar.face[a])
      }
      setSelected(item);
      setItemSeleciona(tempFace);
      setTitle("Expressão Facil");

    } else if (item === "bracos") {
      const bracoL = itemsDoAvatar.braco.length;
      let tempBracos = [];
      for (let a = 0; a < bracoL; a++) {
        tempBracos.push(itemsDoAvatar.braco[a])
      }
      setSelected(item);
      setItemSeleciona(tempBracos);
      setTitle("Braço");

    } else if (item === "tronco") {
      const troncoL = itemsDoAvatar.tronco.length;
      let tempTronco = [];
      for (let a = 0; a < troncoL; a++) {
        tempTronco.push(itemsDoAvatar.tronco[a])
      }
      setSelected(item);
      setItemSeleciona(tempTronco);
      setTitle("Corpo");

    } else if (item === "pernas") {
      const pernasL = itemsDoAvatar.pernas.length;
      let tempPernas = [];
      for (let a = 0; a < pernasL; a++) {
        tempPernas.push(itemsDoAvatar.pernas[a])
      }
      setSelected(item);
      setItemSeleciona(tempPernas);
      setTitle("Perna");

    } else if (item === "pets") {
      const petL = itemsDoAvatar.pet.length;
      let tempPet = [];
      for (let a = 0; a < petL; a++) {
        tempPet.push(itemsDoAvatar.pet[a])
      }
      setSelected(item);
      setItemSeleciona(tempPet);
      setTitle("Pet");
    }
  }

  useEffect(() => {
    handleSelecionarItem("cabecas");
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
            <Card onClick={() => handleSelecionarItem("cabecas")} style={{
              backgroundColor: selected === "cabecas" && defaultTheme["red-200"],
              borderColor: selected === "cabecas" && defaultTheme["gray-700"]
            }} >
              <img src={cabecaImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("tronco")} style={{
              backgroundColor: selected === "tronco" && defaultTheme["red-200"],
              borderColor: selected === "tronco" && defaultTheme["gray-700"]
            }} >
              <img src={corpoImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("bracos")} style={{
              backgroundColor: selected === "bracos" && defaultTheme["red-200"],
              borderColor: selected === "bracos" && defaultTheme["gray-700"]
            }} >
              <img src={bracosImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("pernas")} style={{
              backgroundColor: selected === "pernas" && defaultTheme["red-200"],
              borderColor: selected === "pernas" && defaultTheme["gray-700"]
            }} >
              <img src={pernasImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("face")} style={{
              backgroundColor: selected === "face" && defaultTheme["red-200"],
              borderColor: selected === "face" && defaultTheme["gray-700"]
            }} >
              <img src={faceImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("acessorios")} style={{
              backgroundColor: selected === "acessorios" && defaultTheme["red-200"],
              borderColor: selected === "acessorios" && defaultTheme["gray-700"]
            }} >
              <img src={oculosImg} alt="" />
            </Card>
            <Card onClick={() => handleSelecionarItem("pets")} style={{
              backgroundColor: selected === "pets" && defaultTheme["red-200"],
              borderColor: selected === "pets" && defaultTheme["gray-700"]
            }} >
              <img src={petsImg} alt="" />
            </Card>
          </Separator>

          <Title><p>{title}</p></Title>
          {/* o carrousel ñ fica dinamico por isso cada parte tem que ter seu carrousel */}
          {selected === "cabecas" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "acessorios" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "face" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index} 
                    className="keen-slider__slide" 
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "bracos" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "tronco" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "pernas" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
                  </CardReward>
                )
              })}
            </Bottom>
          }

          {selected === "pets" &&
            <Bottom ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <CardReward 
                    key={index}
                    className="keen-slider__slide"
                  >
                    <img src={`${URL_FISKPRO}/images/store/${selected}/${item}.png`} alt="" className="RoboCard" />
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