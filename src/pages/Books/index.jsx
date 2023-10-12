import { useContext } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate } from "react-router-dom";
import { TopMenuHeader } from "../../components/TopMenuHeader";
import { ButtonBg } from "../../components/ButtonBg";
import { LineSeparator } from "../../components/LineSeparator";

import { CyberContext } from "../../context/cyber";
import { translateBooks } from "../../utils/Translate";

import boo1 from "./images/bookImg01.svg";
import boo2 from "./images/bookImg02.svg";
import boo3 from "./images/bookImg03.svg";
import bookEss1 from './images/capa53.jpg';

import "./styles.css";
import "keen-slider/keen-slider.min.css";
import { Container, Main, CurrentBooksArea, PreviousBooksArea, BooksImagesArea, BooksImagesCarrousel, ImagesCarrousel } from "./styles";

export const Books = () => {
  const navigate = useNavigate();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 8,
    },
  })

  const { selectLanguage } = useContext(CyberContext)

  // const activeCarrousel = translateBooks.type.filter(bookAmount => bookAmount.amountOfBooks > 3);

  // const shouldShowCarrousel = activeCarrousel.length > 0;
  function clickLesson(){
    localStorage.setItem("lastAccess","SelectLesson");
    navigate("/SelectLesson");
  }

  const home = () => {
    navigate(`/Home`);
  }

  return (
    <Container>
      <TopMenuHeader hasLogo title={selectLanguage === 0 ? translateBooks[0].title : selectLanguage === 1 ? translateBooks[1].title : translateBooks[2].title} />

      <Main>
        <CurrentBooksArea>
          <p>{selectLanguage === 0 ? translateBooks[0].current : selectLanguage === 1 ? translateBooks[1].current : translateBooks[2].current}</p>

          {/* {shouldShowCarrousel ? 
            (<BooksImagesCarrousel ref={sliderRef} className="keen-slider">
              {translateBooks.img.map((images, index) => {
                return (
                  <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                    <img src={images} alt="" />
                  </ImagesCarrousel>
                )
              })}
            </BooksImagesCarrousel>)
            :
            (<BooksImagesArea>
              {translateBooks.img.map((images, index) => {
                return (
                  <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                    <img src={images} alt="" />
                  </ImagesCarrousel>
                )
              })}
            </BooksImagesArea>)
          } */}

          <ImagesCarrousel>
            <img src={bookEss1} alt="" onClick={() => {clickLesson()}} />
          </ImagesCarrousel>
        </CurrentBooksArea>
        <LineSeparator w="100%" bg="#E6E6E6" />
        <PreviousBooksArea>
          <p>{selectLanguage === 0 ? translateBooks[0].previous : selectLanguage === 1 ? translateBooks[1].previous : translateBooks[2].previous}</p>

          {/* {shouldShowCarrousel ? 
            (<BooksImagesCarrousel ref={sliderRef} className="keen-slider">
              {translateBooks.img.map((images, index) => {
                return (
                  <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                    <img src={images} alt="" />
                  </ImagesCarrousel>
                )
              })}
            </BooksImagesCarrousel>)
            :
            (<BooksImagesArea>
              {translateBooks.img.map((images, index) => {
                return (
                  <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                    <img src={images} alt="" />
                  </ImagesCarrousel>
                )
              })}
            </BooksImagesArea>)
          } */}
          <ImagesCarrousel>
          </ImagesCarrousel>
        </PreviousBooksArea>
        <LineSeparator w="100%" mt="1rem" />
        <ButtonBg title="Home" w="15.875rem" h="2.5rem" onPress={home}/>
      </Main>
    </Container>
  )
}