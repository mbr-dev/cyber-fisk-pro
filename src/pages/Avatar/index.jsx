import * as Dialog from "@radix-ui/react-dialog";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";
import { AvatarCustom } from "../../components/AvatarCustom";
import { AreaFooterMiddleBtn } from "../../components/AreaFooterMiddleBtn";

import { URL_FISKPRO } from "../../config/infos";
import { cabecaItems, faceItems, petItems, acessorioItems, bracosItems, pernasItems, troncoItems } from "../../utils/avatarItems";

import bgImg from "./images/bgNatal.png";
import cabecaImg from "../../assets/cabeca.png";
import bracosImg from "../../assets/bracos.png";
import corpoImg from "../../assets/corpo.png";
import faceImg from "../../assets/face.png";
import oculosImg from "../../assets/oculos.png";
import petsImg from "../../assets/pets.png";
import pernasImg from "../../assets/pernas.png";
import cadeado from "../../assets/cadeado.png";
import dollar from "../../assets/Dollar.svg";

import { Container, Main, Top, Bottom, Separator, Card, ItemsCard, CardReward, Title, DivMoney, DivBlock, DivMobile, DivBottom } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Avatar = () => {
  const [selecionado, setSelecionado] = useState("");
  const [itemSelecionado, setItemSeleciona] = useState([]);
  const [itemLiberado, setItemLiberado] = useState(true);
  const [temItem, setTemItem] = useState(false);
  const [titulo, setTitulo] = useState("Item");

  console.log("itemSelecionado: ", itemSelecionado);

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2.5,
      spacing: 16,
    },
  });

  const handleSelecionarItem = (item) => {
    setTemItem(true);

    if (item === "Cabecas") {
      const cabecaL = cabecaItems.length;
      let tempCabeca = [];
      for (let a = 0; a < cabecaL; a++) {
        tempCabeca.push(cabecaItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempCabeca);
      setTitulo("Cabeça");
    } else if (item === "Acessorios") {
      const acessoriosL = acessorioItems.length;
      let tempAcessorios = [];
      for (let a = 0; a < acessoriosL; a++) {
        tempAcessorios.push(acessorioItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempAcessorios);
      setTitulo("Acessórios");
    } else if (item === "Expressao_Robot") {
      const faceL = faceItems.length;
      let tempFace = [];
      for (let a = 0; a < faceL; a++) {
        tempFace.push(faceItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempFace);
      setTitulo("Expressão Facil");
    } else if (item === "Bracos") {
      const bracoL = bracosItems.length;
      let tempBracos = [];
      for (let a = 0; a < bracoL; a++) {
        tempBracos.push(bracosItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempBracos);
      setTitulo("Braço");
    } else if (item === "Tronco") {
      const troncoL = troncoItems.length;
      let tempTronco = [];
      for (let a = 0; a < troncoL; a++) {
        tempTronco.push(troncoItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempTronco);
      setTitulo("Corpo");
    } else if (item === "Pernas") {
      const pernasL = pernasItems.length;
      let tempPernas = [];
      for (let a = 0; a < pernasL; a++) {
        tempPernas.push(pernasItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempPernas);
      setTitulo("Perna");
    } else if (item === "Pets") {
      const petL = petItems.length;
      let tempPet = [];
      for (let a = 0; a < petL; a++) {
        tempPet.push(petItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempPet);
      setTitulo("Pet");
    }
  }

  return (
    <Container>
      <HeaderText title="Avatar " />

      <Main>
        <Top>
          <img src={bgImg} alt="" className="bgImg" />
          <AvatarCustom avatar />
        </Top>

        <DivBottom>
          <Bottom>
            <DivMobile>
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
            </DivMobile>
            <DivMobile>
              <Title><p>{titulo}</p></Title>
            </DivMobile>

            <ItemsCard ref={sliderRef} className="keen-slider">
              {itemSelecionado.map((item, index) => {
                return (
                  <Dialog.Root key={index}>
                    <Dialog.Trigger asChild>
                      <CardReward className="keen-slider__slide">
                        {itemLiberado &&
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ 200</p>
                            </DivMoney>
        
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                        }
                        <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item}.png`} alt="" className="RoboCard" />
                      </CardReward>
                    </Dialog.Trigger>
                    <Modal />
                  </Dialog.Root>
                )
              })}
            </ItemsCard>

            <Separator className="spDesk">
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
          </Bottom>

          <AreaFooterMiddleBtn />
        </DivBottom>
      </Main>
    </Container>
  )
}