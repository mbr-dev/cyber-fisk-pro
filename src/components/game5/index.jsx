import React, { useState, useContext, useEffect } from 'react';
import Content from './style';
import Button from "@mui/material/Button";
import { TitleLesson } from '../titleLesson';
import { SubtitleLessonAudio } from '../subtitleLessonAudio';
import { LessonContext } from '../../context/lesson';
import { TrocaAtividade } from '../../utils/regras';
import { L1_T2_Medio } from '../../utils/lesson1_Task2';
import { URL_HMLG } from '../../config/infos';

export const Game5 = (props) => {
    const [idClick, setIdClick] = useState([0,1,2]);
    const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio} = useContext(LessonContext);
    const [rodada, setRodada] = useState(0);
    const [sortNum, setSortNum] = useState([]);
    const [respostas, setRespostas] = useState([]);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [bloqueia, setBloqueia] = useState(true);
    const [sound, setSound] = useState(null);

    const loadLesson = () => {
        const tam = L1_T2_Medio.length;
        let temp = [];
        for(let a = 0; a < tam; a++){
            temp.push(a);
        }
        temp = temp.sort(() => Math.random() - 0.5);
        setSortNum(temp);
        setSound(`Images/pro/game5/ess1_l1/Task2M_${temp[rodada]}.mp3`);
        let tempResp = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        for(let a = 0; a < 3; a ++){
            tempResp.push(L1_T2_Medio[temp[rodada]].resposta[tempSortNum[a]]);
        }
        setRespostas(tempResp);
        setBloqueia(false);
    }

    const newRodada = (num) => {
        setSound(`Images/pro/game5/ess1_l1/Task2M_${sortNum[num]}.mp3`);
        let tempResp = [];
        let tempSortNum = idClick;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        setIdClick(tempSortNum);
        for(let a = 0; a < 3; a ++){
            tempResp.push(L1_T2_Medio[sortNum[num]].resposta[tempSortNum[a]]);
        }
        setRespostas(tempResp);
        setBloqueia(false);
    }

    const click = (id) =>{
        if(bloqueia){
            return;
        }
        if(playAudio){
            return;
        }
        setBloqueia(true);
        let tempA = acertos;
        if(idClick[id] === 0){
            tempA = tempA + 2;
            setNewPontos(1,tempA);
            setAcertos(tempA);
        }else{
            let tempE = erros;
            tempE++;
            setErros(tempE);
        }
        let tempR = rodada;
        tempR++;
        setRodada(tempR);
        let tempGeral = rodadaGeral;
        tempGeral++;
        setNewRodada(tempGeral);
        //nivel, rodada, pontos, rodadaNivel
        const regra = TrocaAtividade(1,tempGeral,tempA,tempR);
        if(regra === "Continua"){
            setTimeout(() =>{
                newRodada(tempR);
            },500);
        }else if(regra === "Game over"){
            setNewPontos(0,0);
            setTimeout(() =>{
                alert('GAME OVER!!');
                setNewContainer(1);
            },500);
        }else{
            //troca de nivel
            setTimeout(() =>{
                setNewLesson(6);
            },500);
        }
    }

    const btn = (el, index) => {
        console.log('btn');
        return(
            <Button className='btn' onClick={() => {click(index)}}>
                <span className='desc'>{el}</span>
            </Button>
        )
    }
    useEffect(() => { 
        loadLesson();
    }, [])

    return(
        <>
            <TitleLesson title='Choose the correct alternative'/>
            <SubtitleLessonAudio audio={`${URL_HMLG}${sound}`}/>
            <Content>
                <div className='boxBtn'>
                    {respostas.map((x, index) => {
                        return(
                            btn(x, index)
                        )
                    })}
                </div>
            </Content>
        </>
    )
}