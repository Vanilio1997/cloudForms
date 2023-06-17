import React from 'react';
import s from './Divider.module.css';

interface IDividerProps{
    borderColor?: string
    width?: string
    margin?: string
}

export const Divider = ({ borderColor ='00000014',width='100%', margin='24px 0'}:IDividerProps) => {
    const style = {
        borderColor,
        width,
        margin
    };
    return (
        <div style={style} className={s.divider}></div>
    );
};
