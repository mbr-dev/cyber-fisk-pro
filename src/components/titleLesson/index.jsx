import React from 'react';
import Content from './style';
export const TitleLesson = (props) => {
    return(
        <>
            <Content>
                <span className='title'>{props.title}</span>
            </Content>
        </>
    )
}