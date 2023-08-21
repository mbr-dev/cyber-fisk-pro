import React from 'react';
import { Button } from '@mui/material';
import Content from './style';

export const BtnMenu = () =>{
  return(
    <>
      <Content>
        <Button className='btn'>
          <label>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </Button>
      </Content>
    </>
  )
}