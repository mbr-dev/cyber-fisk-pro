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
import { GameSL1 } from "../components/game_sl1";
import { GameSL2 } from "../components/game_sl2";
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
      <Route path = "/GameSL1" element={<GameSL1 />}/>
      <Route path = "/GameSL2" element={<GameSL2 />}/>
      <Route path = "/GameWordle" element={<GameWordle />}/>
    </Routes>
  )
}