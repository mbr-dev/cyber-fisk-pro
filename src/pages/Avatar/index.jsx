import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";

import bgImg from "./images/bgNatal.png";
import roboPe from "../../assets/roboPe.png";

import { Container, Main, Top, Bottom, Separator, Card, AvatarCard, CardReward, Title } from "./styles";

export const Avatar = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 3.5,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 28,
        },
      },
    },
  });

  const [sliderRef2] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 7,
          spacing: 24,
        },
      }
    },
  });

  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const isTablet = window.matchMedia("(min-width: 600px)").matches;

  return (
    <Container>
      <HeaderText title="Avatar " />

      <Main>
        <Top>
          <img src={bgImg} alt="" className="bgImg" />
          <img src={roboPe} alt="" className="avatarImg" />
        </Top>

        <Bottom>

          <Separator>
            <div ref={sliderRef2} className="keen-slider">
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
              <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
              <Card className="keen-slider__slide">
                <div></div>
              </Card>
            </div>
          </Separator>

          <Title><p>Head</p></Title>

          <AvatarCard>
            <div ref={sliderRef} className="keen-slider">
              <CardReward className="keen-slider__slide">
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={roboPe} alt="" className="RoboCard" />
              </CardReward>
            </div>
          </AvatarCard>

          {isDesktop &&
            <FooterBtnHome 
              fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
              wl={isDesktop ? "48%" : "80%"}
              hasLS
              w={isDesktop ? "450px" : isTablet ? "400px" : ""}
              h={isDesktop ? "52px" : isTablet ? "48px" : ""}
            />}
        </Bottom>
      </Main>

      {!isDesktop &&
        <FooterBtnHome 
          fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
          wl={isDesktop ? "48%" : "80%"}
          w={isDesktop ? "450px" : isTablet ? "400px" : ""}
          h={isDesktop ? "52px" : isTablet ? "48px" : ""}
        />}
    </Container>
  )
}