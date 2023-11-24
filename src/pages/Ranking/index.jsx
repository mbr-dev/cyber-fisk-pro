import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react";

import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";
import { LineSeparator } from "../../components/LineSeparator";
import { apiQAS } from "../../lib/api";
import Cookies from 'universal-cookie';

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
      "(min-width: 1124px)": {
        slides: {
          perView: 3,
          spacing: 28,
        },
      },
      "(min-width: 1440px)": {
        slides: {
          perView: 3.5,
          spacing: 32,
        },
      }
    },
  });

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  const [data, setData] = useState(null);
  const [rafUser, setRafUser] = useState(null);

  const loadRank = async () =>{
    const cookies = new Cookies();
    setRafUser(cookies.get("raf"));
    await apiQAS.get(`/Rank/Ranking?tipo=all`)
    .then((resp) =>{
      if(resp.data.erro === null){
        setData(resp.data.dados);
      }
    })
  }

  useEffect(() =>{
    loadRank();
  },[]);

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

        {!isDesktop &&<LineSeparator w="80%" bg={defaultTheme["gray-200"]} />}
        {!isDesktop &&
          <MainBottom>
            {data !== null ? data.map((x, index) =>{
              return(
                rafUser === x.raf ?
                <LevelPosition $selected>
                  <p>{(index+1)}</p>
                  <AvatarArea>
                    <img src={RoboWD} alt="Avatar" />
                  </AvatarArea>
                  <span>{x.raf}</span>
                  <p>{x.xp} xp</p>
                </LevelPosition>
                :
                <LevelPosition >
                  <p>{(index+1)}</p>
                  <AvatarArea>
                    <img src={RoboWD} alt="Avatar" />
                  </AvatarArea>
                  <span>{x.raf}</span>
                  <p>{x.xp} xp</p>
                </LevelPosition>
              )
            }) : null}
          </MainBottom>}
        {!isDesktop &&<LineSeparator w="80%" bg={defaultTheme["gray-200"]} />}
      </Main>

      <FooterBtnHome />
    </Container>
  )
}