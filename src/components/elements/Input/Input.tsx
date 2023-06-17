import React, {forwardRef, DetailedHTMLProps, ForwardedRef, HTMLAttributes,ChangeEvent} from 'react';
import s from './Input.module.css';


interface IInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>{
   placeholder: string
   type?: string
   id?: string
   value?: string
   inputName: string
   className: string
   register: any
   change?: (e: ChangeEvent<HTMLInputElement>)=>void
}

export const Input = forwardRef(({ change, placeholder,  type, id,
    className,inputName,register}:IInputProps ,
ref:ForwardedRef<HTMLInputElement>):JSX.Element => {
    return (
        <>
            <input
                placeholder={placeholder}
                ref={ref}
                onChange={change}
                className={s[className]}
                {...(register ? register(inputName) : register)}
                name={inputName}
                type={type}
                id={id}
            />
        </>
    );
});
