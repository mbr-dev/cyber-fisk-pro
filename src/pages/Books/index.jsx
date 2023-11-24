import { useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import { ModalBooks } from "./components/ModalBooks";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";
import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";

import { CyberContext } from "../../context/cyber";

import bookEss1 from "./images/capa53.jpg";
import LogoFiskImg from "../../assets/logoFisk2.png";
import BgHeaderImg from "../../assets/bgHeaderImg.png";

import { Container, Main, BooksArea, BooksImage, AreaFooter, HeaderMobile, DivDesk, HeaderMobileDiv, DivLine, ButtonHome } from "./styles";

export const Books = () => {
  const navigate = useNavigate();

  const { selectLanguage } = useContext(CyberContext);

  const clickLesson = () => {
    localStorage.setItem("lastAccess","SelectLesson");
    navigate("/SelectLesson");
  }

  const handleGoHome = () => {
    navigate("/Home");
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
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <BooksImage>
                <img src={bookEss1} alt="" />
              </BooksImage>
            </Dialog.Trigger>

            <ModalBooks onPress={() => clickLesson()} />
          </Dialog.Root>
        </BooksArea>

        <DivLine>
          <LineSeparator wl="100%" />
        </DivLine>

        <BooksArea>
          <p>{selectLanguage === 0 ? "Anterior" : selectLanguage === 1 ? "Previous" : "Anterior"}:</p>
          <BooksImage style={{ opacity: 0.2 }}>
            <img src={bookEss1} alt=""/>
          </BooksImage>
        </BooksArea>
      </Main>

      <AreaFooter>
        <ButtonHome onClick={handleGoHome}>
          <p>Home</p>
        </ButtonHome>
      </AreaFooter>
    </Container>
  )
}