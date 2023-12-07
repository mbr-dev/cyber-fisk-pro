import { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { ModalBooks } from "./components/ModalBooks";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { CyberContext } from "../../context/cyber";

import bookEss1 from "./images/capa53.jpg";
import LogoFiskImg from "../../assets/logoFisk2.png";
import BgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, BooksArea, BooksImage, HeaderMobile, DivDesk, HeaderMobileDiv, DivLine, BooksInside } from "./styles";

export const Books = () => {
  const navigate = useNavigate();

  const { selectLanguage } = useContext(CyberContext);

  const clickLesson = () => {
    localStorage.setItem("lastAccess","SelectLesson");
    navigate("/SelectLesson");
  }

  return (
    <Container>
      <HeaderMobile>
        <img src={BgHeaderImg} alt="" className="bgHeaderImg" />
        <HeaderMobileDiv>
          <ButtonMenuHeader />
          <p>{selectLanguage === 0 ? "Livros" : selectLanguage === 1 ? "Books" : "Libros"}</p>
          <ButtonCloseHeader />
        </HeaderMobileDiv>
        <img src={LogoFiskImg} alt="" className="logoFisk" />
      </HeaderMobile>

      <DivDesk>
        <HeaderText title={selectLanguage === 0 ? "Livros" : selectLanguage === 1 ? "Books" : "Libros"} />
      </DivDesk>

      <Main>
        <BooksArea>
          <p>{selectLanguage === 0 ? "Atual" : selectLanguage === 1 ? "Current" : "Actual"}:</p>
          <BooksInside>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <BooksImage>
                  <img src={bookEss1} alt="" />
                </BooksImage>
              </Dialog.Trigger>

              <ModalBooks onPress={() => clickLesson()} />
            </Dialog.Root>
          </BooksInside>
        </BooksArea>

        <DivLine>
          <LineSeparator wl="100%" />
        </DivLine>

        <BooksArea>
          <p>{selectLanguage === 0 ? "Anterior" : selectLanguage === 1 ? "Previous" : "Anterior"}:</p>
          <BooksInside>
            <BooksImage style={{ opacity: 0.2 }}>
              <img src={bookEss1} alt=""/>
            </BooksImage>
            <BooksImage style={{ opacity: 0.2 }}>
              <img src={bookEss1} alt=""/>
            </BooksImage>
            <BooksImage style={{ opacity: 0.2 }}>
              <img src={bookEss1} alt=""/>
            </BooksImage>
          </BooksInside>
        </BooksArea>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}