import { useContext } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import "./styles.css"

import { CyberContext } from "../../context/cyber";
import { booksTranslate } from "../../utils/Translate/booksTranslate";

import { ButtonMenuHeader } from "../../components/ButtonMenuHeader";
import { ButtonCloseHeader } from "../../components/ButtonCloseHeader";
import { ButtonRed } from "../../components/ButtonRed";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import LogoFisk from "../../assets/logoFisk.png";

import { BooksContainer, BooksHeader, Line, BooksArea, BooksMain, BottomHeader, TopHeader, CurrentBooksArea, PreviousBooksArea, BooksImagesArea, BooksImagesCarrousel, ImagesCarrousel } from "./styles";

export function Books() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 8,
    },
  })

  const { selectLanguageBooks } = useContext(CyberContext)

  const activeCarrousel = booksTranslate.type.filter(bookAmount => bookAmount.amountOfBooks > 3);

  const shouldShowCarrousel = activeCarrousel.length > 0;

  return (
    <BooksContainer>
      <BooksHeader>
        <TopHeader>
          <ButtonMenuHeader />

          {selectLanguageBooks === 0 && <p>{booksTranslate.title[0]}</p>}
          {selectLanguageBooks === 1 && <p>{booksTranslate.title[1]}</p>}
          {selectLanguageBooks === 2 && <p>{booksTranslate.title[2]}</p>}
            
          <ButtonCloseHeader />
        </TopHeader>

        <BottomHeader>       
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        </BottomHeader>
      </BooksHeader>

      <BooksMain>
        <BooksArea>
          <CurrentBooksArea>
            {selectLanguageBooks === 0 && <p>{booksTranslate.languageCurrent[0]}</p>}
            {selectLanguageBooks === 1 && <p>{booksTranslate.languageCurrent[1]}</p>}
            {selectLanguageBooks === 2 && <p>{booksTranslate.languageCurrent[2]}</p>}

            {shouldShowCarrousel ? 
              (<BooksImagesCarrousel ref={sliderRef} className="keen-slider">
                {booksTranslate.img.map((images, index) => {
                  return (
                    <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                      <img src={images} alt="" />
                    </ImagesCarrousel>
                  )
                })}
              </BooksImagesCarrousel>)
              :
              (<BooksImagesArea>
                {booksTranslate.img.map((images, index) => {
                  return (
                    <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                      <img src={images} alt="" />
                    </ImagesCarrousel>
                  )
                })}
              </BooksImagesArea>)
            }
          </CurrentBooksArea>

          <Line />

          <PreviousBooksArea>
            {selectLanguageBooks === 0 && <p>{booksTranslate.languagePrevious[0]}</p>}
            {selectLanguageBooks === 1 && <p>{booksTranslate.languagePrevious[1]}</p>}
            {selectLanguageBooks === 2 && <p>{booksTranslate.languagePrevious[2]}</p>}

            {shouldShowCarrousel ? 
              (<BooksImagesCarrousel ref={sliderRef} className="keen-slider">
                {booksTranslate.img.map((images, index) => {
                  return (
                    <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                      <img src={images} alt="" />
                    </ImagesCarrousel>
                  )
                })}
              </BooksImagesCarrousel>)
              :
              (<BooksImagesArea>
                {booksTranslate.img.map((images, index) => {
                  return (
                    <ImagesCarrousel key={index} className="keen-slider__slide number-slide">
                      <img src={images} alt="" />
                    </ImagesCarrousel>
                  )
                })}
              </BooksImagesArea>)
            }
            
          </PreviousBooksArea>
        </BooksArea>
      </BooksMain>

      <AreaButtonBottom>
        <ButtonRed title="Home" />
      </AreaButtonBottom>
    </BooksContainer>
  )
}