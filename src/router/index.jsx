import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Books } from "../pages/Books";
import { Login } from "../pages/Login";
import { Report } from "../pages/Report";
import { Studio } from "../pages/Studio";
import { Profile } from "../pages/Profile";
import { Ranking } from "../pages/Ranking";
import { WellDone } from "../pages/WellDone";
import { GameOver } from "../pages/GameOver";
import { SelectLesson } from "../pages/SelectLesson";
import { LessonSelection } from "../pages/LessonSelection";
import { GravaAudioTest } from "../pages/GravaAudioTest";
import { QRCode } from "../features/qrCode/pages/Home";
import { QRReader } from "../features/qrCode/pages/QrReader";
import { GamesTemplate } from "../features/qrCode/games/gamesTemplate";
import { TaskLesson } from "../components/taskLesson";
import { SuperTaskLesson } from "../components/supertaskLesson";

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
import { Game17 } from "../components/game17";
import { Game18 } from "../components/game18";
import { Game19 } from "../components/game19";
import { Game20 } from "../components/game20";
import { Game21 } from "../components/game21";
import { Game22 } from "../components/game22";
import { Game23 } from "../components/game23";
import { Game24 } from "../components/game24";

import { GameSL1 } from "../components/game_sl1";
import { GameSL2 } from "../components/game_sl2";
import { GameSL3 } from "../components/game_sl3";
import { GameSL4 } from "../components/game_sl4";
import { GameSL5 } from "../components/game_sl5";
import { GameWordle } from "../components/GameWordle";

export const Router =() => {
  return(
    <Routes>
      <Route path = "/" element={<Login />}/>

      <Route path="/Home" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Studio" element={<Studio />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/WellDone" element={<WellDone />} />
      <Route path="/GameOver" element={<GameOver />} />
      <Route path="/LessonSelection" element={<LessonSelection />} />
      <Route path="/SelectLesson" element={<SelectLesson />} />
      <Route path="/GravaAudioTest" element={<GravaAudioTest />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/qr-code/reader" element={<QRReader />} />
      <Route path="/qr-code/:code" element={<GamesTemplate />} />
      <Route path="/Lesson" element={<TaskLesson />} />
      <Route path="/SuperTask" element={<SuperTaskLesson />} />

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
      <Route path = "/Game17" element={<Game17 />}/>
      <Route path = "/Game18" element={<Game18 />}/>
      <Route path = "/Game19" element={<Game19 />}/>
      <Route path = "/Game20" element={<Game20 />}/>
      <Route path = "/Game21" element={<Game21 />}/>
      <Route path = "/Game22" element={<Game22 />}/>
      <Route path = "/Game23" element={<Game23 />}/>
      <Route path = "/Game24" element={<Game24 />}/>
      <Route path = "/GameSL1" element={<GameSL1 />}/>
      <Route path = "/GameSL2" element={<GameSL2 />}/>
      <Route path = "/GameSL3" element={<GameSL3 />}/>
      <Route path = "/GameSL4" element={<GameSL4 />}/>
      <Route path = "/GameSL5" element={<GameSL5 />}/>
      <Route path = "/GameWordle" element={<GameWordle />}/>
    </Routes>
  )
}