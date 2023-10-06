import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Footer } from "../../components/Footer";
import { TopMenuHeader } from "../../components/TopMenuHeader";
import { ModalPronunciation } from "../../components/ModalPronunciation";
import { ButtonPronunciation } from "../../components/ButtonPronunciation";

import { CyberContext } from "../../context/cyber";
import { translateHome } from "../../utils/Translate";

import Livros from "../../assets/bookImage.png";
import Cursor from "../../assets/iconeImage.png";
import Medalha from "../../assets/medalhaImage.png";
import Micro from "../../assets/microImage.png";
import Note from "../../assets/noteImage.png";
import Reporte from "../../assets/reporteImage.png";

import { Container, Main, Card, Cards } from "./styles";

export const Home = () => {
  const { selectLanguage } = useContext(CyberContext);
  const images = [Livros, Cursor, Medalha, Reporte, Note, Micro];

  return(
    <Container>
      <TopMenuHeader hasAvatar hasLogo />
      <Main>
        <Cards>
          {translateHome.map((text, index) => {
            return (
              <Card key={index}>
                <img src={images[index]} alt="" />
                {selectLanguage === 0 && <p>{text.name[0]}</p>}
                {selectLanguage === 1 && <p>{text.name[1]}</p>}
                {selectLanguage === 2 && <p>{text.name[2]}</p>}
              </Card>
            )
          })}
        </Cards>
      </Main>

      <Dialog.Root>
        <Dialog.Trigger>
          <ButtonPronunciation />
        </Dialog.Trigger>

        <ModalPronunciation />
      </Dialog.Root>
      <Footer />
    </Container>
  )
}