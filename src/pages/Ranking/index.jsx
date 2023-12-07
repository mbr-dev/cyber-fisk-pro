import Cookies from "universal-cookie";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";

import { apiQAS } from "../../lib/api";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";
import { AvatarCustomMetadeIcon } from "../../components/AvatarCustomMetadeIcon";

import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";
import GoldImg from "./images/Gold.svg";
import SilverImg from "./images/Silver.svg";

import { Container, Main, MainBottom, MainTop, ButtonRakingArea, ButtonNational, ButtonUnit, TextArea, CoinArea, LevelPosition, AvatarArea, Carrousel, CarrouselInside, Position, DivName, PositionInside, DivMobile, DivDesk } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Ranking = () => {
  const [data, setData] = useState(null);
  const [rafUser, setRafUser] = useState(null);
  const [buttonSelected, setButtonSelected] = useState("National");

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setButtonSelected((modal) => (modal === item ? null : item));
  };

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 16,
    }
  });

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
            <ButtonNational 
              onClick={() => handleItemClick("National")}
              style={{
                color: buttonSelected === "National" ? defaultTheme.white : "",
                backgroundColor: buttonSelected === "National" ? defaultTheme["red-200"] : "",
              }}>National
            </ButtonNational>
            <ButtonUnit
              onClick={() => handleItemClick("Unit")}
              style={{
                color: buttonSelected === "Unit" ? defaultTheme.white : "",
                backgroundColor: buttonSelected === "Unit" ? defaultTheme["red-200"] : "",
              }}>Unit
            </ButtonUnit>
          </ButtonRakingArea>

          <DivMobile>
            <CoinArea>
              <img src={GoldImg} className="gold" alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
              <img src={SilverImg} alt="" />
            </CoinArea>

            <TextArea>
              <h2>Gold Division</h2>
              <p>You are awesome!</p>
            </TextArea>
          </DivMobile>
        </MainTop>

        <DivDesk>
          <Carrousel>
            <CarrouselInside ref={sliderRef} className="keen-slider">
              <Position className="keen-slider__slide">
                <img src={p1} alt="" className="pNumber" />
                <PositionInside>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>500 xp</span>
                  </DivName>
                </PositionInside>
              </Position>

              <Position className="keen-slider__slide">
                <img src={p2} alt="" className="pNumber" />
                <PositionInside>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>400 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p3} alt="" className="pNumber" />
                <PositionInside>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>340 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p4} alt="" className="pNumber" />
                <PositionInside>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>200 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
              <Position className="keen-slider__slide">
                <img src={p4} alt="" className="pNumber" />
                <PositionInside>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <DivName>
                    <p>Camila Eduarda</p>
                    <span>500 xp</span>
                  </DivName>
                </PositionInside>
              </Position>
            </CarrouselInside>
          </Carrousel>
        </DivDesk>

        <DivDesk>
          <TextArea>
            <h2>Gold Division</h2>
            <p>You are awesome!</p>
          </TextArea>
        </DivDesk>

        <DivMobile>
          <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
          <MainBottom>
            {data !== null ? data.map((x, index) =>{
              return(
                rafUser === x.raf ?
                <LevelPosition $selected>
                  <p>{(index+1)}</p>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <span>{x.raf}</span>
                  <p>{x.xp} xp</p>
                </LevelPosition>
                :
                <LevelPosition >
                  <p>{(index+1)}</p>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <span>{x.raf}</span>
                  <p>{x.xp} xp</p>
                </LevelPosition>
              )
            }) : null}
          </MainBottom>
          <LineSeparator w="80%" bg={defaultTheme["gray-200"]} />
        </DivMobile>
      </Main>

      <AreaFooterFullBtn />
    </Container>
  )
}