import React from 'react';
import s from './FormField.module.css';
import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';
import { InputTel } from '../InputTel/InputTel';
import { IFormField } from '../../../types';

export const FormField = <T,>({type,label,id, change,placeholder,value,className,error,register,name,data}:IFormField<T>) => {
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
            {
                type === 'select' && (
                    <>
                        <Select
                            register={register}
                            placeholder={placeholder}
                            value={value}
                            data={data}
                            id={id}
                            inputName={name}
                            className={className}
                        />
                    </>
                )
            }
            {
                type === 'textarea' && (
                    <>
                        <TextArea
                            register={register}
                            placeholder={placeholder}
                            value={value}
                            id={id}
                            inputName={name}
                        />
                    </>
                )
            }
            {error && <div className={s.errorFormField}>{error}</div>}
            {/* <input /> */}
        </div>
    );
};
