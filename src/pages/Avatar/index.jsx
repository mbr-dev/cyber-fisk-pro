import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState, useContext } from "react";

import { Modal } from "./components/Modal";
import { HeaderText } from "../../components/HeaderText";
import { AvatarCustom } from "../../components/AvatarCustom";
import { AreaFooterMiddleBtn } from "../../components/AreaFooterMiddleBtn";

import { URL_FISKPRO } from "../../config/infos";
import { CyberContext } from "../../context/cyber";
import { cabecaItems, petItems, faceItems, acessorioItems, bracosItems, pernasItems, troncoItems, itemsDoAvatar } from "../../utils/avatarItems";

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
    newCabeca, newFace, newBracos, newTronco, newPernas, newPet, newAcessorio, newSword, acessorios, cabeca, face, bracos, tronco, pernas, pets, hasSword, newBag, hasBag, removerSward, removeBackpack
  } = useContext(CyberContext);

  const [selected, setSelected] = useState("");
  const [itemSelecionado, setItemSeleciona] = useState([]);
  const [title, setTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [itemToBuy, setItemToBuy] = useState([]);
  const [selectIndex, setSelectIndex] = useState();

  const [sliderRef] = useKeenSlider({
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
      setSelected(item);
      setItemSeleciona(tempCabeca);
      setTitle("Cabeça");

    } else if (item === "acessorios") {
      const acessoriosL = acessorioItems.length;
      let tempAcessorios = [];
      for (let a = 0; a < acessoriosL; a++) {
        tempAcessorios.push(acessorioItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempAcessorios);
      setTitle("Acessórios");

    } else if (item === "face") {
      const faceL = faceItems.length;
      let tempFace = [];
      for (let a = 0; a < faceL; a++) {
        tempFace.push(faceItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempFace);
      setTitle("Expressão Facil");

    } else if (item === "bracos") {
      const bracoL = bracosItems.length;
      let tempBracos = [];
      for (let a = 0; a < bracoL; a++) {
        tempBracos.push(bracosItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempBracos);
      setTitle("Braço");

    } else if (item === "tronco") {
      const troncoL = troncoItems.length;
      let tempTronco = [];
      for (let a = 0; a < troncoL; a++) {
        tempTronco.push(troncoItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempTronco);
      setTitle("Corpo");

    } else if (item === "pernas") {
      const pernasL = pernasItems.length;
      let tempPernas = [];
      for (let a = 0; a < pernasL; a++) {
        tempPernas.push(pernasItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempPernas);
      setTitle("Perna");

    } else if (item === "pets") {
      const petL = petItems.length;
      let tempPet = [];
      for (let a = 0; a < petL; a++) {
        tempPet.push(petItems[a])
      }
      setSelected(item);
      setItemSeleciona(tempPet);
      setTitle("Pet");
    }
  }

  const handleSelecionaCabeca = (item) => {
    newCabeca(item.name);
  }

  const handleSelecionaAcessorio = (item, index) => {
    if (item.name === "_e_verde") {
      if (item.name === "_e_vermelho") {
        return;
      }
      newSword(!hasSword, item.name);
      setSelectIndex(index);
      return;
    } else if (item.name === "_e_vermelho") {
      if (item.name === "_e_verde") {
        return;
      }
      newSword(!hasSword, item.name);
      setSelectIndex(index);
      return
    } else if (item.name === "_mochila") {
      newBag(!hasBag, item.name);
      return
    }

    setSelectIndex(index);
    newAcessorio(item.name);
  }

  const handleSelecionaFace = (item) => {
    newFace(item.name);
  }

  const handleSelecionaBraco = (item) => {
    if (hasSword) {
      removerSward();
    }

    newBracos(item.name);
  }

  const handleSelecionaCorpo = (item) => {
    if (hasBag) {
      removeBackpack();
    }
    newTronco(item.name);
  }

  const handleSelecionaPerna = (item) => {
    newPernas(item.name);
  }

  const handleSelecionaPet = (item) => {
    newPet(item.name);
  }

  const handleBuy = (item) => {
    setOpenModal(true);
    setItemToBuy(item);
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    handleSelecionarItem("cabecas")
  }, []);

  return (
    <Container>
      <HeaderText title="Avatar " />

      <Main>
        <Top style={{
          backgroundImage: `url("${bgImg}")`
        }}>
          <div>
            <AvatarCustom avatar />
          </div>
        </Top>

        <DivBottom>
          <Bottom>
            <DivMobile>
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
            </DivMobile>
            <DivMobile>
              <Title><p>{title}</p></Title>
            </DivMobile>

            {openModal &&
              <Modal 
                item={itemToBuy} 
                tipo={selected} 
                onPress={handleSelecionarItem}
                onClose={handleCloseModal}
              />
            }

            {/* o carrousel ñ fica dinamico por isso cada parte tem que ter seu carrousel */}
            {selected === "cabecas" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado !== null ? itemSelecionado.map((item) => {
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
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                      <CardReward 
                        key={item.id}
                        onClick={() => handleBuy(item)}
                        className="keen-slider__slide"
                      >
                        <DivBlock>
                          <DivMoney>
                            <img src={dollar} alt="" />
                            <p>$ {item.preco}</p>
                          </DivMoney>
        
                          <img src={cadeado} alt="" className="cadeadoImg" />
                        </DivBlock>
                        <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                      </CardReward>
                  )
                }) : null}
              </ItemsCard>
            }

            {selected === "acessorios" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item, index) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={index}/* pinta aqui */
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaAcessorio(item, index)}
                      style={{
                        borderColor: index === selectIndex && defaultTheme["red-200"],
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            {selected === "face" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward 
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaFace(item)}
                      style={{
                        borderColor: item.name === face && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward 
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            {selected === "bracos" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward 
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaBraco(item)}
                      style={{
                        borderColor: item.name === bracos && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward 
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            {selected === "tronco" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaCorpo(item)}
                      style={{
                        borderColor: item.name === tronco && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward 
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            {selected === "pernas" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaPerna(item)}
                      style={{
                        borderColor: item.name === pernas && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward 
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            {selected === "pets" &&
              <ItemsCard ref={sliderRef} className="keen-slider">
                {itemSelecionado.map((item) => {
                  return (
                    item.liberado ?
                    <CardReward
                      key={item.id}
                      className="keen-slider__slide"
                      onClick={() => handleSelecionaPet(item)}
                      style={{
                        borderColor: item.name === pets && defaultTheme["red-200"]
                      }}
                    >
                      <img src={`${URL_FISKPRO}/images/avatar/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                    :
                    <CardReward 
                      key={item.id}
                      onClick={() => handleBuy(item)}
                      className="keen-slider__slide"
                    >
                      <DivBlock>
                        <DivMoney>
                          <img src={dollar} alt="" />
                          <p>$ {item.preco}</p>
                        </DivMoney>
      
                        <img src={cadeado} alt="" className="cadeadoImg" />
                      </DivBlock>
                      <img src={`${URL_FISKPRO}/images/store/${selected}/${item.name}.png`} alt="" className="RoboCard" />
                    </CardReward>
                  )
                })}
              </ItemsCard>
            }

            <Separator className="spDesk">
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
          </Bottom>

          <AreaFooterMiddleBtn />
        </DivBottom>
      </Main>
    </Container>
  )
}