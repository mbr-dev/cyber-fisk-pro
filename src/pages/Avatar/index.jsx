import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { HeaderText } from "../../components/HeaderText";
import { FooterBtnHome } from "../../components/FooterBtnHome";

import bgImg from "./images/bgNatal.png";
import cabeca from "../../assets/cabeca.png";
import bracos from "../../assets/bracos.png";
import corpo from "../../assets/corpo.png";
import face from "../../assets/face.png";
import oculos from "../../assets/oculos.png";
import pets from "../../assets/pets.png";
import pernas from "../../assets/pernas.png";
import cadeado from "../../assets/cadeado.png";
import roboPe from "../../assets/roboPe.png";
import dollar from "../../assets/Dollar.svg";

import { Container, Main, Top, Bottom, Separator, Card, AvatarCard, CardReward, Title, DivMoney, DivBlock, DivBottom } from "./styles";

export const Avatar = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
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

        <DivBottom>
          <Bottom>
            {!isDesktop &&
              <Separator>
                <Card>
                  <img src={cabeca} alt="" />
                </Card>
                <Card>
                  <img src={corpo} alt="" />
                </Card>
                <Card>
                  <img src={bracos} alt="" />
                </Card>
                <Card>
                  <img src={pernas} alt="" />
                </Card>
                <Card>
                  <img src={face} alt="" />
                </Card>
                <Card>
                  <img src={oculos} alt="" />
                </Card>
                <Card>
                  <img src={pets} alt="" />
                </Card>
              </Separator>}

            {!isDesktop && <Title><p>Head</p></Title>}

            <AvatarCard>
                <CardReward>
                  <img src={roboPe} alt="" className="RoboCard" />
                </CardReward>

                <CardReward>
                  <DivBlock>
                    <DivMoney>
                      <img src={dollar} alt="" />
                      <p>$ 200</p>
                    </DivMoney>

                    <img src={cadeado} alt="" className="cadeadoImg" />
                  </DivBlock>
                  <img src={roboPe} alt="" className="RoboCard" />
                </CardReward>

                <CardReward>
                  <img src={roboPe} alt="" className="RoboCard" />
                </CardReward>
            </AvatarCard>

            {isDesktop && <Title><p>Head</p></Title>}

            {isDesktop &&
              <Separator>
                <Card>
                  <img src={cabeca} alt="" />
                </Card>
                <Card>
                  <img src={corpo} alt="" />
                </Card>
                <Card>
                  <img src={bracos} alt="" />
                </Card>
                <Card>
                  <img src={pernas} alt="" />
                </Card>
                <Card>
                  <img src={face} alt="" />
                </Card>
                <Card>
                  <img src={oculos} alt="" />
                </Card>
                <Card>
                  <img src={pets} alt="" />
                </Card>
              </Separator>}
          </Bottom>

          {isDesktop &&
            <FooterBtnHome
              fs={isDesktop ? "32px" : isTablet ? "28px" : ""}
              w={isDesktop ? "450px" : isTablet ? "400px" : ""}
              h={isDesktop ? "52px" : isTablet ? "48px" : ""}
            />}
        </DivBottom>
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