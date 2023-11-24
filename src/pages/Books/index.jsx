import { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { ModalBooks } from "./components/ModalBooks";
import { HeaderText } from "../../components/HeaderText";
import { ButtonHome } from "../../components/ButtonHome";
import { LineSeparator } from "../../components/LineSeparator";
import { HeaderTextImage } from "../../components/HeaderTextImage";

import { CyberContext } from "../../context/cyber";
import { translateBooks } from "../../utils/Translate";

import bookEss1 from "./images/capa53.jpg";

import { Container, Main, BooksArea, BooksImage, AreaFooter } from "./styles";

export const Books = () => {
  const navigate = useNavigate();

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  const { selectLanguage } = useContext(CyberContext);
  function clickLesson(){
    localStorage.setItem("lastAccess","SelectLesson");
    navigate("/SelectLesson");
  }

  return (
    <Container>
      {!isDesktop ? 
        <HeaderTextImage title={selectLanguage === 0 ? translateBooks[0].title : selectLanguage === 1 ? translateBooks[1].title : translateBooks[2].title} />
        :
        <HeaderText title={selectLanguage === 0 ? translateBooks[0].title : selectLanguage === 1 ? translateBooks[1].title : translateBooks[2].title} />
      }

      <Main>
        <BooksArea>
          <p>{selectLanguage === 0 ? translateBooks[0].current : selectLanguage === 1 ? translateBooks[1].current : translateBooks[2].current}:</p>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <BooksImage>
                <img src={bookEss1} alt="" />
              </BooksImage>
            </Dialog.Trigger>

            <ModalBooks onPress={() => clickLesson()} />
          </Dialog.Root>
        </BooksArea>

        {!isDesktop && <LineSeparator wl="100%" bg="#E6E6E6" />}

        <BooksArea>
          <p>{selectLanguage === 0 ? translateBooks[0].previous : selectLanguage === 1 ? translateBooks[1].previous : translateBooks[2].previous}:</p>

          <BooksImage style={{ opacity: 0.2 }}>
            <img src={bookEss1} alt=""/>
          </BooksImage>
        </BooksArea>
      </Main>

      <AreaFooter>
        <ButtonHome />
      </AreaFooter>
    </Container>
  )
}