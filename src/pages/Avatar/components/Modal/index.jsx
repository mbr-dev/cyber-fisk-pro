import { useContext } from "react"; 

import { CyberContext } from "../../../../context/cyber";

import { itemsDoAvatar } from "../../../../utils/avatarItems";

import xImg from "../../../../assets/xImg.png";

import { Container, Content, Overlay, Close, CloseNo, Main, Header, Button, Div } from "./styles";

export const Modal = ({ item, tipo, onPress, onClose }) => {
  const { selectLanguage } = useContext(CyberContext);

  const handleComprarItem = () => {
    if (tipo === "cabecas") {
      item.liberado = true;
      itemsDoAvatar.cabeca.push(item.name);
      onPress(tipo);
    } else if (tipo === "acessorios") {
      item.liberado = true;
      itemsDoAvatar.acessorios.push(item.name);
      onPress(tipo);

    } else if (tipo === "face") {
      item.liberado = true;
      itemsDoAvatar.face.push(item.name);
      onPress(tipo);

    } else if (tipo === "bracos") {
      item.liberado = true;
      itemsDoAvatar.braco.push(item.name);
      onPress(tipo);

    } else if (tipo === "tronco") {
      item.liberado = true;
      itemsDoAvatar.tronco.push(item.name);
      onPress(tipo);

    } else if (tipo === "pernas") {
      item.liberado = true;
      itemsDoAvatar.pernas.push(item.name);
      onPress(tipo);

    } else if (tipo === "pets") {
      item.liberado = true;
      itemsDoAvatar.pet.push(item.name);
      onPress(tipo);
    }

    onClose(false);
  }

  return (
    <Container>
        <Overlay />

        <Content>
          <Close onClick={() => onClose(false)}>
            <img src={xImg} alt="x" />
          </Close>
          <Header>
            <p>{selectLanguage === 0 ? "Atenção" : selectLanguage === 1 ? "Attention" : "Atención"}</p>
          </Header>

          <Main>
            <p>Wow, great choice.</p>
            <p>Do you want to buy it?</p>
          </Main>

          <Div>
            <Button onClick={handleComprarItem}>
              YES
            </Button>
            <CloseNo onClick={() => onClose(false)}>
              NO
            </CloseNo>
          </Div>
        </Content>
    </Container>
  )
}