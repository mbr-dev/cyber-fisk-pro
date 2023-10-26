import {Routes, Route} from "react-router-dom";

import { Home } from "../pages/Home";
import { Help } from "../pages/Help";
import { Menu } from "../pages/Menu";
import { Books } from "../pages/Books";
import { Login } from "../pages/Login";
import { Report } from "../pages/Report";
import { Studio } from "../pages/Studio";
import { Profile } from "../pages/Profile";
import { Ranking } from "../pages/Ranking";
import { WellDone } from "../pages/WellDone";
import { GameOver } from "../pages/GameOver";
import { SpinWheel } from "../pages/SpinWheel";
import { SelectLesson } from "../pages/selectLesson";
import { TaskLesson } from "../components/taskLesson";
import { QRCode } from "../features/qrCode/pages/Home";
import { GravaAudioTest } from "../pages/GravaAudioTest";
import { LessonSelection } from "../pages/LessonSelection";
import { QRReader } from "../features/qrCode/pages/qrReader";
import { SuperTaskLesson } from "../components/supertaskLesson";
import { GamesTemplate } from "../features/qrCode/games/gamesTemplate";

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
import { Game25 } from "../components/game25";
import { Game26 } from "../components/game26";
import { Game27 } from "../components/game27";
import { Game28 } from "../components/game28";
import { Game29 } from "../components/game29";
import { Game30 } from "../components/game30";
import { Game31 } from "../components/game31";
import { Game32 } from "../components/game32";
import { Game33 } from "../components/game33";
import { Game34 } from "../components/game34";
import { Game35 } from "../components/game35";
import { Game36 } from "../components/game36";
import { Game37 } from "../components/game37";
import { Game38 } from "../components/game38";
import { Game39 } from "../components/game39";

import { GameSL1 } from "../components/game_sl1";
import { GameSL2 } from "../components/game_sl2";
import { GameSL3 } from "../components/game_sl3";
import { GameSL4 } from "../components/game_sl4";
import { GameSL5 } from "../components/game_sl5";
import { GameSL6 } from "../components/game_sl6";
import { GameSL7 } from "../components/game_sl7";
import { GameSL8 } from "../components/game_sl8";
import { GameSL9 } from "../components/game_sl9";
import { GameSL10 } from "../components/game_sl10";
import { GameWordle } from "../components/GameWordle";

export const Router =() => {
  return(
    <Routes>
      <Route path = "/" element={<Login />}/>

      <Route path="/Home" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/Help" element={<Help />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Studio" element={<Studio />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/WellDone" element={<WellDone />} />
      <Route path="/SpinWheel" element={<SpinWheel />} />
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
      <Route path = "/Game25" element={<Game25 />}/>
      <Route path = "/Game26" element={<Game26 />}/>
      <Route path = "/Game27" element={<Game27 />}/>
      <Route path = "/Game28" element={<Game28 />}/>
      <Route path = "/Game29" element={<Game29 />}/>
      <Route path = "/Game30" element={<Game30 />}/>
      <Route path = "/Game31" element={<Game31 />}/>
      <Route path = "/Game32" element={<Game32 />}/>
      <Route path = "/Game33" element={<Game33 />}/>
      <Route path = "/Game34" element={<Game34 />}/>
      <Route path = "/Game35" element={<Game35 />}/>
      <Route path = "/Game36" element={<Game36 />}/>
      <Route path = "/Game37" element={<Game37 />}/>
      <Route path = "/Game38" element={<Game38 />}/>
      <Route path = "/Game39" element={<Game39 />}/>
      <Route path = "/GameSL1" element={<GameSL1 />}/>
      <Route path = "/GameSL2" element={<GameSL2 />}/>
      <Route path = "/GameSL3" element={<GameSL3 />}/>
      <Route path = "/GameSL4" element={<GameSL4 />}/>
      <Route path = "/GameSL5" element={<GameSL5 />}/>
      <Route path = "/GameSL6" element={<GameSL6 />}/>
      <Route path = "/GameSL7" element={<GameSL7 />}/>
      <Route path = "/GameSL8" element={<GameSL8 />}/>
      <Route path = "/GameSL9" element={<GameSL9 />}/>
      <Route path = "/GameSL10" element={<GameSL10 />}/>
      <Route path = "/GameWordle" element={<GameWordle />}/>
    </Routes>
  )
}