import React from "react";
import { Routes, Route } from "react-router-dom";
import QRCode from "./features/qrCode";
import QRReader from "./features/qrCode/pages/qrReader";
import GamesTemplate from "./features/qrCode/games/gamesTemplate";

import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import { Profile } from "./pages/Profile";
import SelectLesson from "./pages/selectLesson";

import { Game1 } from "./components/game1";
import { Game2 } from "./components/game2";
import { Game3 } from "./components/game3";
import { Game4 } from "./components/game4";
import { Game5 } from "./components/game5";
import { Game6 } from "./components/game6";
import { GameSL1 } from "./components/game_sl1";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SelectLesson />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="Books" element={<Books />} />
      <Route path="/Game1" element={<Game1 />} />
      <Route path="/Game2" element={<Game2 />} />
      <Route path="/Game3" element={<Game3 />} />
      <Route path="/Game4" element={<Game4 />} />
      <Route path="/Game5" element={<Game5 />} />
      <Route path="/Game6" element={<Game6 />} />
      <Route path="/GameSL1" element={<GameSL1 />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/qr-code/reader" element={<QRReader />} />
      <Route path="/qr-code/:code" element={<GamesTemplate />} />
    </Routes>
  );
}

export default Router;
