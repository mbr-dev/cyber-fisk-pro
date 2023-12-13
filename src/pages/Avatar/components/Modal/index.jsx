import { useContext } from "react"; 
import * as Dialog from "@radix-ui/react-dialog";

import { CyberContext } from "../../../../context/cyber";

import { itemsDoAvatar } from "../../../../utils/avatarItems";

import xImg from "../../../../assets/xImg.png";

import { Content, Overlay, Close, CloseNo, Main, Header, Button, Div } from "./styles";

export const Modal = ({ item, tipo, onItemComprado }) => {
  const { selectLanguage } = useContext(CyberContext);

  const handleComprarItem = () => {
    if (tipo === "cabecas") {
      item.liberado = true;
      itemsDoAvatar.cabeca.push(item.name);
      onItemComprado("cabecas")
    } else if (tipo === "acessorios") {
      item.liberado = true;
      itemsDoAvatar.acessorios.push(item.name);
    } else if (tipo === "bracos") {
      item.liberado = true;
      itemsDoAvatar.braco.push(item.name);
    } else if (tipo === "tronco") {
      item.liberado = true;
      itemsDoAvatar.tronco.push(item.name);
    } else if (tipo === "pernas") {
      item.liberado = true;
      itemsDoAvatar.pernas.push(item.name);
    } else if (tipo === "pets") {
      item.liberado = true;
      itemsDoAvatar.pet.push(item.name);
      console.log(item.name)
    }
  }

  return (
    <Dialog.Portal>
        <Overlay />

        <Content>
          <Close>
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
            <CloseNo>
              NO
            </CloseNo>
          </Div>
        </Content>
    </Dialog.Portal>
  )
}