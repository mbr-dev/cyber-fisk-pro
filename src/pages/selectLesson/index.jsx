import { useState } from 'react';
import '../../App.css';
import Container from './styles';
import { TopMenu } from '../../components/topMenu';
import { BtnLessonSel } from '../../components/btnSelLesson';

function SelectLesson() {
  const [count, setCount] = useState(0)

  const qtdLessons = () => {
    
  }

  return (
    <>
      <Container>
        <TopMenu menu='0'/> 
        <div className='box'>
          <BtnLessonSel num='1' lesson='Lesson'/>
        </div>
      </Container>    
    </>
  )
}

export default SelectLesson