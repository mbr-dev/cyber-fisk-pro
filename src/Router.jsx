import {Routes, Route} from 'react-router-dom';
import SelectLesson from './pages/selectLesson';
import { Game1 } from './components/game1';
import { Game2 } from './components/game2';
import { Game3 } from './components/game3';
import { Game4 } from './components/game4';

function Router() {
  return(
    <Routes>
      <Route path = '/' element={<SelectLesson />}/>
      <Route path = '/Game1' element={<Game1 />}/>
      <Route path = '/Game2' element={<Game2 />}/>
      <Route path = '/Game3' element={<Game3 />}/>
      <Route path = '/Game4' element={<Game4 />}/>
    </Routes>
  )
}

export default Router;