import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { apiQAS } from "../../lib/api";
import { Loading } from "../../components/Loading";
import { HeaderText } from "../../components/HeaderText";
import { LineSeparator } from "../../components/LineSeparator";
import { AreaFooterFullBtn } from "../../components/AreaFooterFullBtn";
import { AvatarCustomMetadeIcon } from "../../components/AvatarCustomMetadeIcon";

import p1 from "./images/p1.png";
import positionImg from "./images/positionImg.png";
import GoldImg from "./images/Gold.svg";
import SilverImg from "./images/Silver.svg";

import { Container, Main, MainBottom, MainTop, ButtonRakingArea, ButtonNational, ButtonUnit, TextArea, CoinArea, LevelPosition, AvatarArea, Carrousel, CarrouselInside, Position, DivName, PositionInside, DivMobile, DivDesk, PositionCard } from "./styles";
import { defaultTheme } from "../../themes/defaultTheme";

export const Ranking = () => {
  const [data, setData] = useState(null);
  const [rafUser, setRafUser] = useState(null);
  const [buttonSelected, setButtonSelected] = useState("National");
  const [loadRanking, setLoadRanking] = useState(false);

  const [ref] = useKeenSlider({
    slides: {
      perView: 3.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: {
          perView: 3,
        }
      }
    }
  })

  const handleItemClick = (item) => {
    setButtonSelected((modal) => (modal === item ? null : item));
  };

  // const loadRank = async () =>{
  //   const cookies = new Cookies();
  //   setRafUser(cookies.get("raf"));
  //   await apiQAS.get(`/Rank/Ranking?tipo=all`)
  //   .then((resp) =>{
  //     if(resp.data.erro === null){
  //       setData(resp.data.dados);
  //     }
  //   })
  // }

  const loadRank = async () =>{
    try {
      setLoadRanking(true);

      const cookies = new Cookies();
      setRafUser(cookies.get("raf"));

      const res = await apiQAS.get(`/Rank/Ranking?tipo=all`);

      if (res) {
        setData(res.data.dados);
      }

      setLoadRanking(false);
    } catch(error) {
      console.log(error);
    }
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
          {loadRanking ? 
            <Loading /> 
            :
            <Carrousel>
              <CarrouselInside ref={ref} className="keen-slider">
                {data !== null ? data.map((x, index) =>{
                  return(
                    rafUser === x.raf ?
                    <Position className="keen-slider__slide">
                      <img src={p1} alt="" className="pNumber" />
                      <PositionCard className="positionOne">
                        <PositionInside>
                          <AvatarArea>
                            <AvatarCustomMetadeIcon />
                          </AvatarArea>
                          <DivName>
                            <p className="positionOnep">{x.raf}</p>
                            <span className="positionOnep">{x.xp} xp</span>
                          </DivName>
                        </PositionInside>
                      </PositionCard>
                    </Position>
                    :
                    <Position className="keen-slider__slide">
                      <span className="numberPosition">{index+1}</span>
                      <img src={positionImg} alt="" className="pNumber" />
                      <PositionCard>
                        <PositionInside>
                          <AvatarArea>
                            <AvatarCustomMetadeIcon />
                          </AvatarArea>
                          <DivName>
                            <p>{x.raf}</p>
                            <span>{x.xp} xp</span>
                          </DivName>
                        </PositionInside>
                      </PositionCard>
                    </Position>
                  )
                }) : null}
              </CarrouselInside>
            </Carrousel>
          }
          
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
                  <p className="pXp">{x.xp} xp</p>
                </LevelPosition>
                :
                <LevelPosition >
                  <p>{(index+1)}</p>
                  <AvatarArea>
                    <AvatarCustomMetadeIcon />
                  </AvatarArea>
                  <span>{x.raf}</span>
                  <p className="pXp">{x.xp} xp</p>
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