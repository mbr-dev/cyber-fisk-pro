import React, { useContext, useEffect, useState } from 'react';
import Content from './style';
import { LessonContext } from '../../context/lesson';

export const SubtitleSuperLesson = (props) => {
    const {superTask} = useContext(LessonContext);

    const fields = (el) => {
        return(
            <div className='boxLetter'>
                <span className='desc'>{el}</span>
            </div>
        )
    }
    useEffect(() => {
        fields();
    }, []);

    return(
        <>
            <Content>
                {superTask.map((x) => {
                    return(
                        fields(x)
                    )
                })}
            </Content>
            {fields()}
        </>
    )
}