import {Routes, Route} from 'react-router-dom';
import SelectLesson from './pages/selectLesson';

function Router() {
  return(
    <Routes>
      <Route path = '/' element={<SelectLesson />}/>
    </Routes>
  )
}

export default Router;