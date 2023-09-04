import {Routes, Route} from 'react-router-dom';
import SelectLesson from './pages/selectLesson';
import { Game1 } from './components/game1';
import { Game2 } from './components/game2';
import { Game3 } from './components/game3';
import { Game4 } from './components/game4';
import { Game5 } from './components/game5';
import { Game6 } from './components/game6';
import { GameSL1 } from './components/game_sl1';
import { Profile } from './pages/Profile';

function Router() {
  return(
    <Routes>
      <Route path = '/' element={<SelectLesson />}/>
      <Route path='/Profile' element={<Profile/>} />
      <Route path = '/Game1' element={<Game1 />}/>
      <Route path = '/Game2' element={<Game2 />}/>
      <Route path = '/Game3' element={<Game3 />}/>
      <Route path = '/Game4' element={<Game4 />}/>
      <Route path = '/Game5' element={<Game5 />}/>
      <Route path = '/Game6' element={<Game6 />}/>
      <Route path = '/GameSL1' element={<GameSL1 />}/>
      
    </Routes>
  )
}

export default Router;