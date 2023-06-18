import React,{ChangeEvent} from 'react';
import s from './Select.module.css';


interface ISelectProps {
   data: any
   placeholder: string
   id?: string
   value?: string
   inputName: string
   className: string
   register: any
   change?: (e: ChangeEvent<HTMLOptionElement>)=>void
}

export const Select = ({inputName,className,data,placeholder,register,change,id,value}:ISelectProps) => {
    const arrData =  Object.keys(data).filter((v)=>isNaN(Number(v)));

    return (
        <div className={s.customSelect}>
            <select {...(register ? register(inputName) : register)}
                id={id}
                className={s.select}
            >
                <option value="" disabled selected hidden>{placeholder}</option>
                {
                    arrData.map((item) =>(
                        <option id={`field-sex-option-${item}`} value={item} className={s.option}>
                            {item}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};
