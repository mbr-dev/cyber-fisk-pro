import React from 'react';
import { Button } from '@mui/material';
import Content from './style';

export const BtnClose = () =>{
  return(
    <>
      <Content>
        <Button className='btn'>
          <label>
            <span></span>
            <span></span>
          </label>
        </Button>
      </Content>
    </>
  )
}