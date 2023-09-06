import React from "react";
import { Routes, Route } from "react-router-dom";
import SelectLesson from "./pages/selectLesson";
import QRCode from "./features/qrCode";
import QRReader from "./features/qrCode/pages/qrReader";
import GamesTemplate from "./features/qrCode/games/gamesTemplate";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SelectLesson />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/qr-code/reader" element={<QRReader />} />
      <Route path="/qr-code/:code" element={<GamesTemplate />} />
    </Routes>
  );
}

export default Router;
