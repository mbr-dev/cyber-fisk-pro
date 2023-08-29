import React, { useState, useContext, useEffect } from 'react';
import Content from './style';
import {colors} from '../../config/colors';
import Button from "@mui/material/Button";
import { TitleLesson } from '../titleLesson';
import { SubtitleLessonAudio } from '../subtitleLessonAudio';
import { LessonContext } from '../../context/lesson';
import { L1_T2_Facil } from '../../utils/lesson1_Task2';
import { TrocaAtividade } from '../../utils/regras';
import { URL_HMLG } from '../../config/infos';

export const Game4 = (props) => {
    const [idTipo3, setIdTipo3] = useState([0,1,2,3,4,5]);
    const [idTipo4, setIdTipo4] = useState([0,1,2,3,4]);
    const [idClick, setIdClick] = useState([0,0,0,0,0,0]);
    const {setNewContainer, setNewPontos, setNewLesson, rodadaGeral, setNewRodada, playAudio} = useContext(LessonContext);
    const [rodada, setRodada] = useState(0);
    const [sortNum, setSortNum] = useState([]);
    const [respostas, setRespostas] = useState([]);
    const [acertos, setAcertos] = useState(0);
    const [erros, setErros] = useState(0);
    const [bloqueia, setBloqueia] = useState(true);
    const [tipo, setTipo] = useState(null);
    const [sound, setSound] = useState(null);
    const [contClick, setContClick] = useState(0);

    const loadLesson = () => {
        const tam = L1_T2_Facil.length;
        let temp = [];
        for(let a = 0; a < tam; a++){
            temp.push(a);
        }
        temp = temp.sort(() => Math.random() - 0.5);
        setSortNum(temp);
        setSound(`Images/pro/game4/Task2F_${temp[rodada]}.mp3`);
        setTipo(L1_T2_Facil[temp[rodada]].tipo);
        let tempResp = [];
        console.log('TIPO ==> ', L1_T2_Facil[temp[rodada]].tipo);
        let tempSortNum = L1_T2_Facil[temp[rodada]].tipo === 3 ? idTipo3 : idTipo4;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        if(L1_T2_Facil[temp[rodada]].tipo === 3){
            setIdTipo3(tempSortNum);
        }else{
            setIdTipo4(tempSortNum);
        }
        for(let a = 0; a < L1_T2_Facil[temp[rodada]].resposta.length; a ++){
            tempResp.push(L1_T2_Facil[temp[rodada]].resposta[tempSortNum[a]]);
        }
        setRespostas(tempResp);
        setBloqueia(false);
    }

    const newRodada = (num) => {
        setSound(`Images/pro/game4/Task2F_${sortNum[num]}.mp3`);
        setTipo(L1_T2_Facil[sortNum[num]].tipo);
        let tempResp = [];
        let tempSortNum = L1_T2_Facil[sortNum[num]].tipo === 3 ? idTipo3 : idTipo4;
        tempSortNum = tempSortNum.sort(() => Math.random() - 0.5);
        if(L1_T2_Facil[sortNum[num]].tipo === 3){
            setIdTipo3(tempSortNum);
        }else{
            setIdTipo4(tempSortNum);
        }
        for(let a = 0; a < L1_T2_Facil[sortNum[num]].resposta.length; a ++){
            tempResp.push(L1_T2_Facil[sortNum[num]].resposta[tempSortNum[a]]);
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
        let clicks = contClick;
        let arr = idClick;
        clicks++;
        setContClick(clicks);
        
        let tempA = acertos;
        let tempR = rodada;
        let tempGeral = rodadaGeral;
        if(tipo === 3){
        if(idTipo3[id] === 0 || idTipo3[id] === 1 || idTipo3[id] === 2){
            if(clicks < 3){                
                arr[id] = 1;
                setIdClick(arr);
                return;
            }
            tempA++;
            setNewPontos(0,(tempA));
            setAcertos(tempA);
        }else{
            let tempE = erros;
            tempE++;
            setErros(tempE);
        }
        tempR++;
        setRodada(tempR);
        tempGeral++;
        setNewRodada(tempGeral);
        }else{
            if(idTipo4[id] === 0 || idTipo4[id] === 1 || idTipo4[id] === 2){
                if(clicks < 3){
                    arr[id] = 1;
                    setIdClick(arr);
                    return;
                }
                tempA++;
                setNewPontos(0,(tempA));
                setAcertos(tempA);
            }else{
                let tempE = erros;
                tempE++;
                setErros(tempE);
            }
            tempR++;
            setRodada(tempR);
            tempGeral++;
            setNewRodada(tempGeral);
        }
        setBloqueia(true);
        clicks = 0;
        setContClick(clicks);
        arr=[0,0,0,0,0,0];
        setIdClick(arr);

        //troca de nivel
        if(tempA == 2){
            setTimeout(() =>{
                setNewLesson(5);
            },1000);
        }
        const regra = TrocaAtividade(0,tempGeral,tempA,tempR);
        if(regra === "Continua"){
            setTimeout(() =>{
                newRodada(tempR);
            },1000);
        }else if(regra === "Game over"){
            setNewPontos(0,0);
            setTimeout(() =>{
                alert('GAME OVER!!');
                setNewContainer(1);
            },1000);
        }else{
            //troca de nivel
            setTimeout(() =>{
                setNewLesson(5);
            },1000);
        }
    }

    const btn = (type, el, index) => {
        return(
            <Button className={type === 3 ? 'btn' : 'btn2'} onClick={() => {click(index)}} style={{backgroundColor: idClick[index] === 0 ? colors.white : colors.lessonCorrect}}>
                <text className={type === 3 ? 'desc' : 'desc2'}>{el}</text>
            </Button>
        )
    }

    useEffect(() => { 
        loadLesson();
    }, [])

    return(
        <>
            {tipo !== null ?
                <>
                    <TitleLesson title='Choose the correct alternative'/>
                    <SubtitleLessonAudio audio={`${URL_HMLG}${sound}`}/>
                    <Content>
                        <div className='boxBtn'>
                            {respostas.map((x,index) => {
                                return(
                                    btn(tipo, x, index)
                                )
                            })}
                        </div>
                    </Content>
                </>
                :
                <></>
            }
        </>
    )
}