import React from 'react';
import s from './FormField.module.css';
import Input from '../Input';
import { InputTel } from '../InputTel/InputTel';
import { IFormField } from '../../../types';

export const FormField = <T,>({type,label,id, change,placeholder,value,className,error,register,name}:IFormField<T>) => {
    return (
        <div className={s.formField}>
            <label className={s.labelFormField} htmlFor={id}>
                {label}
            </label>
            {
                type === 'text' && (
                    <>
                        <Input
                            register={register}
                            change={change}
                            placeholder={placeholder}
                            value={value}
                            type={type}
                            id={id}
                            inputName={name}
                            className={className}
                        />
                    </>
                )
            }
            {
                type === 'tel' && (
                    <>
                        <InputTel
                            register={register}
                            placeholder={placeholder}
                            value={value}
                            type={type}
                            id={id}
                            inputName={name}
                            className={className}
                        />
                    </>
                )
            }
            {error && <div className={s.errorFormField}>{error}</div>}
            {/* <input /> */}
        </div>
    );
};
