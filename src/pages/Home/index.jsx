import { useContext } from "react";
import { AlignJustify } from "lucide-react";

import { AvatarImage } from "../../components/AvatarImage";
import { Footer } from "../../components/Footer";

import { CyberContext } from "../../context/cyber";
import { homeCards } from "../../utils/homeCards";

import LogoFisk from "../../assets/logoFisk.png";

import { HomeContainer, HomeHeader, TopMenuButton, BottomMenuHeader, HomeMain, MainCard, MainCards } from "./styles";

export function Home() {
  const { selectLanguageHome } = useContext(CyberContext);

  return(
    <HomeContainer>
      <HomeHeader>
        <TopMenuButton>
          <AlignJustify />
        </TopMenuButton>

        <BottomMenuHeader>
          <AvatarImage userName="Camila Eduarda" />          
          <img src={LogoFisk} className="logoFisk" alt="Logo Fisk"/>
        </BottomMenuHeader>
      </HomeHeader>

      <HomeMain>
        <MainCards>
          {homeCards.map(homeCard => {
            return (
              <MainCard key={homeCard.id}>
                <img src={homeCard.img} alt="" />
                {selectLanguageHome === 0 && <p>{homeCard.name[0]}</p>}
                {selectLanguageHome === 1 && <p>{homeCard.name[1]}</p>}
                {selectLanguageHome === 2 && <p>{homeCard.name[2]}</p>}
              </MainCard>
            )
          })}
        </MainCards>
      </HomeMain>

      <Footer />
    </HomeContainer>
  )
}