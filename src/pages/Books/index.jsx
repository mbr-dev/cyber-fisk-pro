import { useContext } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import "./styles.css"

import { CyberContext } from "../../context/cyber";
import { booksTranslate } from "../../utils/Translate/booksTranslate";

import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import { BooksContainer, Line, BooksArea, BooksMain, CurrentBooksArea, PreviousBooksArea, BooksImagesArea, BooksImagesCarrousel, ImagesCarrousel } from "./styles";
import { TopMenuHeader } from "../../components/TopMenuHeader";

export const Books = () => {
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

      {selectLanguageBooks === 0 && 
        <TopMenuHeader hasLogo title={booksTranslate.title[0]} />}
      {selectLanguageBooks === 1 && 
        <TopMenuHeader hasLogo title={booksTranslate.title[1]} />}
      {selectLanguageBooks === 2 && 
        <TopMenuHeader hasLogo title={booksTranslate.title[2]} />}

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

      <AreaButtonBottom title="Home" />
    </BooksContainer>
  )
}