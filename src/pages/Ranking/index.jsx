import { TopMenuHeader } from "../../components/TopMenuHeader";
import { AreaButtonBottom } from "../../components/AreaButtonBottom";

import GoldImg from "./images/Gold.svg";
import SilverImg from "./images/Silver.svg";
import Avatar1Img from "./images/Avatar1.png";
import Avatar2Img from "./images/Avatar2.png";
import Avatar3Img from "./images/Avatar3.png";

import { RankingContainer, RankingMain, MainBottom, MainTop, ButtonRakingArea, LineSeparator, ButtonNational, ButtonUnit, TextArea, CoinArea, LevelPosition, AvatarArea } from "./styles"

export const Ranking = () => {
  return (
    <RankingContainer>
      <TopMenuHeader title="Ranking" />

      <RankingMain>
        <MainTop>
          <ButtonRakingArea>
            <ButtonNational $selected >National</ButtonNational>
            <ButtonUnit >Unit</ButtonUnit>
          </ButtonRakingArea>

          <CoinArea>
            <img src={GoldImg} className="gold" alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
            <img src={SilverImg} alt="" />
          </CoinArea>

          <TextArea>
            <h2>Gold Division</h2>
            <p>Take the next lesson below</p>
            <p>01 minute and get 10 Fisk XP</p>
          </TextArea>
        </MainTop>

        <LineSeparator />

        <MainBottom>
          <LevelPosition $selected>
            <p>1</p>
            <AvatarArea>
              <img src={Avatar1Img} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>500 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>2</p>
            <AvatarArea>
              <img src={Avatar2Img} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>300 xp</p>
          </LevelPosition>

          <LevelPosition>
            <p>3</p>
            <AvatarArea>
              <img src={Avatar3Img} alt="Avatar" />
            </AvatarArea>
            <span>Camila Eduarda</span>
            <p>250 xp</p>
          </LevelPosition>
        </MainBottom>
      </RankingMain>

      <AreaButtonBottom />
    </RankingContainer>
  )
}