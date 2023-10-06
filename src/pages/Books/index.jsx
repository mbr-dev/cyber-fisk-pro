import { useContext } from "react";
import { useKeenSlider } from "keen-slider/react";

import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";
import { LineSeparator } from "../../components/LineSeparator";

import { CyberContext } from "../../context/cyber";
import { translateBooks } from "../../utils/Translate";

import boo1 from "./images/bookImg01.svg";
import boo2 from "./images/bookImg02.svg";
import boo3 from "./images/bookImg03.svg";

import "./styles.css";
import "keen-slider/keen-slider.min.css";
import { Container, BooksArea, Main, CurrentBooksArea, PreviousBooksArea, BooksImagesArea, BooksImagesCarrousel, ImagesCarrousel } from "./styles";

export const Books = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 8,
    },
  })

  const { selectLanguage } = useContext(CyberContext)

  // const activeCarrousel = translateBooks.type.filter(bookAmount => bookAmount.amountOfBooks > 3);

  // const shouldShowCarrousel = activeCarrousel.length > 0;

  return (
    <Container>
      <TopMenuHeader hasLogo title={selectLanguage === 0 ? translateBooks[0].title : selectLanguage === 1 ? translateBooks[1].title : translateBooks[2].title} />

      <Main>
        <BooksArea>
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
              <img src={boo1} alt="" />
              <img src={boo2} alt="" />
              <img src={boo3} alt="" />
            </ImagesCarrousel>
          </CurrentBooksArea>

          <LineSeparator w="100%" />

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
              <img src={boo1} alt="" />
              <img src={boo2} alt="" />
              <img src={boo3} alt="" />
            </ImagesCarrousel>
          </PreviousBooksArea>
        </BooksArea>
      </Main>
      <AreaButtonBottom title="Home" />
    </Container>
  )
}