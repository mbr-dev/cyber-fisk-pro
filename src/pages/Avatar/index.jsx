import * as Dialog from "@radix-ui/react-dialog";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useContext } from "react";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";
import { AvatarCustom } from "../../components/AvatarCustom";
import { AreaFooterMiddleBtn } from "../../components/AreaFooterMiddleBtn";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";
import { cabecaItems, petItems, faceItems, acessorioItems, bracosItems, pernasItems, troncoItems } from "../../utils/avatarItems";

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
  const {
    newCabeca, newFace, newBracos, newTronco, newPernas, newPet, newAcessorio, acessorios, cabeca, face, bracos, tronco, pernas, pets
  } = useContext(CyberContext);

  const [selecionado, setSelecionado] = useState("Cabecas");
  const [itemSelecionado, setItemSeleciona] = useState([]);
  const [titulo, setTitulo] = useState("");

  const [sliderRef] = useKeenSlider({
    initial: 0,
    mode: "free",
    slides: {
      perView: 2.5,
      spacing: 16,
    },
  });

  const handleSelecionarItem = (item) => {
    if (item === "cabecas") {
      const cabecaL = cabecaItems.length;
      let tempCabeca = [];
      for (let a = 0; a < cabecaL; a++) {
        tempCabeca.push(cabecaItems[a]);
      }
      setSelecionado(item);
      setItemSeleciona(tempCabeca);
      setTitulo("Cabeça");
    } else if (item === "acessorios") {
      const acessoriosL = acessorioItems.length;
      let tempAcessorios = [];
      for (let a = 0; a < acessoriosL; a++) {
        tempAcessorios.push(acessorioItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempAcessorios);
      setTitulo("Acessórios");
    } else if (item === "face") {
      const faceL = faceItems.length;
      let tempFace = [];
      for (let a = 0; a < faceL; a++) {
        tempFace.push(faceItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempFace);
      setTitulo("Expressão Facil");
    } else if (item === "bracos") {
      const bracoL = bracosItems.length;
      let tempBracos = [];
      for (let a = 0; a < bracoL; a++) {
        tempBracos.push(bracosItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempBracos);
      setTitulo("Braço");
    } else if (item === "tronco") {
      const troncoL = troncoItems.length;
      let tempTronco = [];
      for (let a = 0; a < troncoL; a++) {
        tempTronco.push(troncoItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempTronco);
      setTitulo("Corpo");
    } else if (item === "pernas") {
      const pernasL = pernasItems.length;
      let tempPernas = [];
      for (let a = 0; a < pernasL; a++) {
        tempPernas.push(pernasItems[a])
      }
      setSelecionado(item);
      setItemSeleciona(tempPernas);
      setTitulo("Perna");
    } else if (item === "pets") {
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

  const handleSelecionaCabeca = (item) => {
    newCabeca(item.name);
  }

  const handleSelecionaAcessorio = (item) => {
    newAcessorio(item.name);
  }

  const handleSelecionaFace = (item) => {
    newFace(item.name);
  }

  const handleSelecionaBraco = (item) => {
    newBracos(item.name);
  }

  const handleSelecionaCorpo = (item) => {
    newTronco(item.name);
  }

  const handleSelecionaPerna = (item) => {
    newPernas(item.name);
  }

  const handleSelecionaPet = (item) => {
    newPet(item.name);
  }

  useEffect(() => {
    const cabecaL = cabecaItems.length;
    let tempCabeca = [];
    for (let a = 0; a < cabecaL; a++) {
      tempCabeca.push(cabecaItems[a])
    }
    setSelecionado("cabecas");
    setItemSeleciona(tempCabeca);
    setTitulo("Cabeça");
  }, []);

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
                <Card onClick={() => handleSelecionarItem("cabecas")} style={{
                  backgroundColor: selecionado === "cabecas" && defaultTheme["red-200"],
                  borderColor: selecionado === "cabecas" && defaultTheme["gray-700"]
                }} >
                  <img src={cabecaImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("tronco")} style={{
                  backgroundColor: selecionado === "tronco" && defaultTheme["red-200"],
                  borderColor: selecionado === "tronco" && defaultTheme["gray-700"]
                }} >
                  <img src={corpoImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("bracos")} style={{
                  backgroundColor: selecionado === "bracos" && defaultTheme["red-200"],
                  borderColor: selecionado === "bracos" && defaultTheme["gray-700"]
                }} >
                  <img src={bracosImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("pernas")} style={{
                  backgroundColor: selecionado === "pernas" && defaultTheme["red-200"],
                  borderColor: selecionado === "pernas" && defaultTheme["gray-700"]
                }} >
                  <img src={pernasImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("face")} style={{
                  backgroundColor: selecionado === "face" && defaultTheme["red-200"],
                  borderColor: selecionado === "face" && defaultTheme["gray-700"]
                }} >
                  <img src={faceImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("acessorios")} style={{
                  backgroundColor: selecionado === "acessorios" && defaultTheme["red-200"],
                  borderColor: selecionado === "acessorios" && defaultTheme["gray-700"]
                }} >
                  <img src={oculosImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("pets")} style={{
                  backgroundColor: selecionado === "pets" && defaultTheme["red-200"],
                  borderColor: selecionado === "pets" && defaultTheme["gray-700"]
                }} >
                  <img src={petsImg} alt="" />
                </Card>
              </Separator>
            </DivMobile>
            <DivMobile>
              <Title><p>{titulo}</p></Title>
            </DivMobile>
            {/* o carrousel ñ fica dinamico por isso cada parte tem que ter seu carrousel */}
            {selecionado === "cabecas" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward 
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaCabeca(item)}
                      style={{
                        borderColor: item.name === cabeca && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"cabecas"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "acessorios" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaAcessorio(item)}
                      style={{
                        borderColor: (item === acessorios.oculos || item === acessorios.chapeu) && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"acessorios"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "face" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward 
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaFace(item)}
                      style={{
                        borderColor: item === face && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"face"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "bracos" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward 
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaBraco(item)}
                      style={{
                        borderColor: item === bracos && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"bracos"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "tronco" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaCorpo(item)}
                      style={{
                        borderColor: item === tronco && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"tronco"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "pernas" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaPerna(item)}
                      style={{
                        borderColor: item === pernas && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/store/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"pernas"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            {selecionado === "pets" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaPet(item)}
                      style={{
                        borderColor: item === pets && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <Dialog.Root key={item.id}>
                      <Dialog.Trigger asChild>
                        <CardReward className="keen-slider__slide">
                          <DivBlock>
                            <DivMoney>
                              <img src={dollar} alt="" />
                              <p>$ {item.preco}</p>
                            </DivMoney>
          
                            <img src={cadeado} alt="" className="cadeadoImg" />
                          </DivBlock>
                          <img src={`${URL_FISKPRO}/images/avatar/${selecionado}/${item.name}.png`} alt="" className="RoboCard" />
                        </CardReward>
                      </Dialog.Trigger>
                      <Modal item={item} tipo={"pets"} />
                    </Dialog.Root>
                  )
                })}
              </ItemsCard>
            }

            <Separator className="spDesk">
                <Card onClick={() => handleSelecionarItem("cabecas")} style={{
                  backgroundColor: selecionado === "cabecas" && defaultTheme["red-200"],
                  borderColor: selecionado === "cabecas" && defaultTheme["gray-700"]
                }} >
                  <img src={cabecaImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("tronco")} style={{
                  backgroundColor: selecionado === "tronco" && defaultTheme["red-200"],
                  borderColor: selecionado === "tronco" && defaultTheme["gray-700"]
                }} >
                  <img src={corpoImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("bracos")} style={{
                  backgroundColor: selecionado === "bracos" && defaultTheme["red-200"],
                  borderColor: selecionado === "bracos" && defaultTheme["gray-700"]
                }} >
                  <img src={bracosImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("pernas")} style={{
                  backgroundColor: selecionado === "pernas" && defaultTheme["red-200"],
                  borderColor: selecionado === "pernas" && defaultTheme["gray-700"]
                }} >
                  <img src={pernasImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("face")} style={{
                  backgroundColor: selecionado === "face" && defaultTheme["red-200"],
                  borderColor: selecionado === "face" && defaultTheme["gray-700"]
                }} >
                  <img src={faceImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("acessorios")} style={{
                  backgroundColor: selecionado === "acessorios" && defaultTheme["red-200"],
                  borderColor: selecionado === "acessorios" && defaultTheme["gray-700"]
                }} >
                  <img src={oculosImg} alt="" />
                </Card>
                <Card onClick={() => handleSelecionarItem("pets")} style={{
                  backgroundColor: selecionado === "pets" && defaultTheme["red-200"],
                  borderColor: selecionado === "pets" && defaultTheme["gray-700"]
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