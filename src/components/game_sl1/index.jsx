import React, { useState, useContext, useEffect } from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import { TitleLesson } from '../titleLesson';
import { SubtitleSuperLesson } from '../subtitleSuperLesson';
import { LessonContext } from '../../context/lesson';

export const GameSL1 = (props) => {
    const respostas = ['American','Canadian','Brazilian','French','Italian','Spanish'];
    const letras = ['A','B','C','D','E','F','H','I','J','M','N','P','R','S','T','Z'];
    const tempo = 30;

    const [numClick, setNumClick] = useState(0);
    const {superTask, setNewsuperTask, setNewContainer} = useContext(LessonContext);
    let [tempoRestante, setTempoRestante] = useState(tempo);
    const [pauseTime, setPauseTime] = useState(false);
    const [addTime, setAddTime] = useState(false);
    const [respondido, setRespondido] = useState([]);
    const [rodada, setRodada] = useState(0);
    const [palavraRodada, setPalavraRodada] = useState('');

    const click = (str) =>{
        let temp = superTask;
        let tempNum = numClick;
        temp[tempNum] = str;
        tempNum++;
        setNewsuperTask(temp);
        setNumClick(tempNum);
        let res = '';
        superTask.map((x) => {
            res += x;
        });
        //setPauseTime(true);
        respostas.map((el) => {
            if(res.toUpperCase() === el.toUpperCase()){
                //setAddTime(true);
                if(respondido.includes(el)){
                    alert(`Voce já acertou esta palavra: ${el}`);
                }else{
                    let temp = respondido;
                    temp.push(el);
                    setRespondido(temp);
                    alert(`Acertou a palavra: ${el}, restam ${(respostas.length - temp.length)} palavra(s)`);
                }
                clearFields();
                //setTempoRestante(tempoRestante += 30);
            }
        })
        if(tempNum > 8){
            clearFields();
        }
        //setPauseTime(false);
    }

    const clearField = () => {
        let temp = superTask;
        let tempNum = numClick;
        tempNum--;
        temp[tempNum] = '';
        if(tempNum < 1){
            tempNum = 0;
        }
        setNewsuperTask(temp);
        setNumClick(tempNum);
    }

    const clearFields = () => {
        let temp = ['','','','','','','','',''];
        setNumClick(0);
        setNewsuperTask(temp);
    }

    const startTimer = () => {
        setTimeout(() => {
            if(!pauseTime){
                if (tempoRestante > 0) {
                    setTempoRestante(tempoRestante -= 1);
                }else{
                    alert('GAME OVER!!');
                    setPauseTime(true);
                    setNewContainer(1);
                }
            }
        }, 1000)
    }

    const formataTempo = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    const calculaFracao = () => {
        return tempoRestante / tempo;
    }

    const btn = (el) =>{
        return(
            <Button className='btn' onClick={() => {click(el)}}>
                <text className='desc'>{el}</text>
            </Button>
        )
    }

    useEffect(() => {
        clearFields();
    }, []);
    //startTimer();

    return(
        <>
            <TitleLesson title='How many nationalities can you write with these letters?'/>
            <SubtitleSuperLesson palavra={palavraRodada}/>
            <Content>
                {/* <div className='boxTimer'>
                    <span>{formataTempo(tempoRestante)} {addTime ? <span>+ 30</span>: <></>}</span>
                </div> */}
                <div className='boxBtn'>
                    {letras.map((x) =>{
                        return(btn(x))
                    })}
                </div>                
                <div className='boxBtnClear'>
                    <Button className='btnClear' onClick={() => {clearField()}}>
                        <text className='descClear'>Clear</text>
                    </Button>
                </div>
            </Content>
        </>
    )
}