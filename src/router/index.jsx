import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Books } from "../pages/Books";
import { Report } from "../pages/Report";
import { Profile } from "../pages/Profile";
import { Ranking } from "../pages/Ranking";
import { WellDone } from "../pages/WellDone";
import { SelectLesson } from "../pages/SelectLesson";
import { Pronunciation } from "../pages/Pronunciation";
import { LessonSelection } from "../pages/LessonSelection";

import { Game1 } from "../components/game1";
import { Game2 } from "../components/game2";
import { Game3 } from "../components/game3";
import { Game4 } from "../components/game4";
import { Game5 } from "../components/game5";
import { Game6 } from "../components/game6";
import { Game7 } from "../components/game7";
import { Game8 } from "../components/game8";
import { Game9 } from "../components/game9";
import { Game10 } from "../components/game10";
import { Game11 } from "../components/game11";
import { Game12 } from "../components/game12";
import { Game13 } from "../components/game13";
import { Game14 } from "../components/game14";
import { Game15 } from "../components/game15";
import { Game16 } from "../components/game16";

import { GameSL1 } from "../components/game_sl1";
import { GameSL2 } from "../components/game_sl2";
import { GameSL3 } from "../components/game_sl3";
import { GameSL4 } from "../components/game_sl4";
import { GameWordle } from "../components/GameWordle";

export const Router =() => {
  return(
    <Routes>
      <Route path = "/" element={<SelectLesson />}/>

      <Route path="/Home" element={<Home/>} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/WellDone" element={<WellDone />} />
      <Route path="/Pronunciation" element={<Pronunciation />} />
      <Route path="/LessonSelection" element={<LessonSelection />} />

      <Route path = "/Game1" element={<Game1 />}/>
      <Route path = "/Game2" element={<Game2 />}/>
      <Route path = "/Game3" element={<Game3 />}/>
      <Route path = "/Game4" element={<Game4 />}/>
      <Route path = "/Game5" element={<Game5 />}/>
      <Route path = "/Game6" element={<Game6 />}/>
      <Route path = "/Game7" element={<Game7 />}/>
      <Route path = "/Game8" element={<Game8 />}/>
      <Route path = "/Game9" element={<Game9 />}/>
      <Route path = "/Game10" element={<Game10 />}/>
      <Route path = "/Game11" element={<Game11 />}/>
      <Route path = "/Game12" element={<Game12 />}/>
      <Route path = "/Game13" element={<Game13 />}/>
      <Route path = "/Game14" element={<Game14 />}/>
      <Route path = "/Game15" element={<Game15 />}/>
      <Route path = "/Game16" element={<Game16 />}/>
      <Route path = "/GameSL1" element={<GameSL1 />}/>
      <Route path = "/GameSL2" element={<GameSL2 />}/>
      <Route path = "/GameSL3" element={<GameSL3 />}/>
      <Route path = "/GameSL4" element={<GameSL4 />}/>
      <Route path = "/GameWordle" element={<GameWordle />}/>
    </Routes>
  )
}