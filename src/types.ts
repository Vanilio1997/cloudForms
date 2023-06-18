import { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ILinksArr {
   link: string
   image: string
   text: string
}

export type FormFieldType = 'text' | 'tel' | 'textarea' | 'select';

export interface IFormField<T> {
   label?:string
   placeholder: string
   type?: FormFieldType
   id?: string
   name: any
   value?: string
   error?: string
   className: string
   change?: (e: ChangeEvent<HTMLInputElement>)=>void
   register: UseFormRegister<any>
   data?: any
}

export interface IFirstForm{
   nickName: string
   name: string
   surname: string
   sex: string
};

export interface IGroupBoolean {
   value: boolean
   id: string
}


export interface ISecondForm{
   advantages: any
   checkbox: null | string[]
   radio: string
}

export interface IThirdForm{
   about: string
}