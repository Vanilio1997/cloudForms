import React,{HTMLAttributes ,DetailedHTMLProps,ChangeEvent,forwardRef, ForwardedRef } from 'react';
import s from './TextArea.module.css';

interface ITextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>{
   placeholder: string
   type?: string
   id?: string
   value?: string
   inputName: string
   register: any
   change?: (e: ChangeEvent<HTMLTextAreaElement>)=>void
}

export const TextArea = forwardRef(({ change, placeholder,  type, id,inputName,register}:ITextAreaProps):JSX.Element => {
    return (
        <textarea
            placeholder={placeholder}
            onInput={change}
            onChange={change}
            className={s.textArea}
            {...(register ? register(inputName) : register)}
            name={inputName}
            type={type}
            id={id}
        />
    );
});

