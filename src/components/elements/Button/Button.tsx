import React from 'react';
import s from './Button.module.css';


type ButtonType = 'reset' | 'submit' | 'reset';
type ButtonClassNameType = 'blueBtn' | 'whiteBtn';

interface IButtonProps{
    text: string
    width: string
    disabled?: boolean
    click?: (data:any) => void
    type:ButtonType
    id: string
    className: ButtonClassNameType
}


const Button = ({click,text,width='', disabled=false, id,className}:IButtonProps) => {

    const style = {
        width: width,
    };

    return (
        <button
            id={id}
            style={style}
            className={`${s.button} ${s[className]}`}
            onClick={click}
            disabled={disabled}
        >{text}</button>
    );
};

export default Button;
