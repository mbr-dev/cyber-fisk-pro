import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";

import { HeaderText } from "../../components/HeaderText";

import Robo from "./images/Robo.png";
import cabeca from "../../assets/cabeca.png";
import bracos from "../../assets/bracos.png";
import corpo from "../../assets/corpo.png";
import face from "../../assets/face.png";
import oculos from "../../assets/oculos.png";
import pets from "../../assets/pets.png";
import pernas from "../../assets/pernas.png";
import Dollar from "../../assets/Dollar.svg";

import { Container, Bottom, Main, Separator, Top, Footer, Button, Money, Card, CardReward, Right, Left, Title, BottomFooter, DivDesk, DivMobile } from "./styles";

export const Rewards = () => {
  const navigate = useNavigate();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 28,
        },
      },
    },
  });

  const handleGoHome = () => {
    navigate("/Home");
  }
  
  return (
    <Container>
      <HeaderText title="XP Balance & Rewards" />

      <Main>
        <Left>
          <Top>
            <Button>Balance</Button>
            <Money>
              <img src={Dollar} alt="Dollar" />
              <span>10</span>
              <p>Fisk Dollars</p>
            </Money>
            <DivMobile>
              <Button>Rewards</Button>
            </DivMobile>
          </Top>
        </Left>

        <Right>
          <DivDesk>
            <Button>Rewards</Button>
          </DivDesk>

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
          </Separator>

          <Title><p>Head</p></Title>

          <Bottom>
            <div ref={sliderRef} className="keen-slider">
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
              <CardReward className="keen-slider__slide">
                <img src={Robo} alt="" className="RoboCard" />
              </CardReward>
            </div>
          </Bottom>
        </Right>
      </Main>

      <Footer>
        <BottomFooter onClick={handleGoHome}>
          <p>Home</p>
        </BottomFooter>
        <BottomFooter $green="green">
          <p>Shop</p>
        </BottomFooter>
      </Footer>
    </Container>
  )
}