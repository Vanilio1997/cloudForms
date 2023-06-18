import React from 'react';
import s from './Button.module.css';
import Icon from '../Icon';


type ButtonType = 'reset' | 'submit' | 'button';
type ButtonClassNameType = 'blueBtn' | 'whiteBtn';

interface IButtonProps{
    text: string
    disabled?: boolean
    click?: (data:any) => void
    type:ButtonType
    id: string
    className: ButtonClassNameType
    img?: string
    typeInside?: 'text' | 'picture'
}


const Button = ({click,type, text, disabled=false, id,className,typeInside='text',img}:IButtonProps) => {


    return (
        <button
            id={id}
            className={`${s.button} ${s[className]}`}
            onClick={click}
            disabled={disabled}
            type={type}
        >
            {
                typeInside === 'text'?
                    <>{text}</>
                    :
                    <Icon imageUrl={img} height="12px" weight="12px" />
            }

        </button>
    );
};

export default Button;
