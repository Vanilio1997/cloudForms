import { ChangeEvent } from 'react';
import { Path,UseFormRegister } from 'react-hook-form';

export interface ILinksArr {
   link: string
   image: string
   text: string
}

export type FormFieldType = 'text' | 'tel' | 'textarea';

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
   onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
   onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
