import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";

import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";
import GoldImg from "./images/Gold.svg";
import SilverImg from "./images/Silver.svg";
import RoboWD from "../../assets/RoboWD.png";

import { Container, Main, MainBottom, MainTop, ButtonRakingArea, ButtonNational, ButtonUnit, TextArea, CoinArea, LevelPosition, AvatarArea, Carrousel, CarrouselInside, Position, DivName, PositionInside, PositionImg } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Ranking = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1440px)": {
        slides: {
          perView: 2.8,
          spacing: 32,
        },
      },
      "(min-width: 1920px)": {
        slides: {
          perView: 3.5,
          spacing: 32,
        },
      },
    },
  });

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  return (
    <Container>
      <HeaderText title="Ranking" />

      <Main>
        <MainTop>
          <ButtonRakingArea>
            <ButtonNational $selected >National</ButtonNational>
            <ButtonUnit >Unit</ButtonUnit>
          </ButtonRakingArea>

          {!isDesktop &&
            <CoinArea>
              <img src={GoldImg} className="gold" alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
            </CoinArea>}

          {!isDesktop &&
            <TextArea>
              <h2>Gold Division</h2>
              <p>You are awesome!</p>
            </TextArea>}
        </MainTop>

        {!isDesktop && <LineSeparator wl="80%" bg={defaultTheme["gray-200"]} />}

        {!isDesktop && 
          <MainBottom>
            <LevelPosition $selected>
              <p>1</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>500 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>2</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>300 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>3</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>4</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>5</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>6</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>6</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>

            <LevelPosition>
              <p>6</p>
              <AvatarArea>
                <img src={RoboWD} alt="Avatar" />
              </AvatarArea>
              <span>Camila Eduarda</span>
              <p>250 xp</p>
            </LevelPosition>
          </MainBottom>}

        {!isDesktop && <LineSeparator wl="80%" bg={defaultTheme["gray-200"]} />}

        {isDesktop &&
          <Carrousel>
            <CarrouselInside ref={sliderRef} className="keen-slider">
              <Position className="keen-slider__slide">
                <img src={p1} alt="" className="pNumber" />
                <PositionInside>
                  <PositionImg>
                    <img src={RoboWD} alt="" />
                  </PositionImg>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>500 xp</span>
                  </DivName>
                </PositionInside>
              </Position>

              <Position className="keen-slider__slide">
                <img src={p2} alt="" className="pNumber" />
                <PositionInside>
                  <PositionImg>
                    <img src={RoboWD} alt="" />
                  </PositionImg>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>400 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p3} alt="" className="pNumber" />
                <PositionInside>
                  <PositionImg>
                    <img src={RoboWD} alt="" />
                  </PositionImg>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>340 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p4} alt="" className="pNumber" />
                <PositionInside>
                  <PositionImg>
                    <img src={RoboWD} alt="" />
                  </PositionImg>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>200 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p4} alt="" className="pNumber" />
                <PositionInside>
                  <PositionImg>
                    <img src={RoboWD} alt="" />
                  </PositionImg>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>500 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
            </CarrouselInside>
          </Carrousel>}

        {isDesktop &&
          <TextArea>
            <h2>Gold Division</h2>
            <p>You are awesome!</p>
          </TextArea>}
      </Main>

      <FooterBtnHome 
        fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
        wl={isDesktop ? "48%" : "80%"}
        hasLS={!isDesktop ? false : true}
        w={isDesktop ? "450px" : isTablet ? "400px" : ""}
        h={isDesktop ? "52px" : isTablet ? "48px" : ""}
      />
    </Container>
  )
}