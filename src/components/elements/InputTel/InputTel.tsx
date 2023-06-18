import React, {forwardRef, DetailedHTMLProps, ForwardedRef, HTMLAttributes,ChangeEvent} from 'react';
import s from './InputTel.module.css';


interface IInputTelProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   placeholder: string
   type?: string
   id?: string
   value?: string
   inputName: string
   className: string
   register: any
}

export const InputTel =forwardRef(({className,inputName,placeholder,register,type,id}:IInputTelProps, ref:ForwardedRef<HTMLInputElement>) => {

    const PATTERN = /\D/g;

    const getInputNumbersValue = (value: string) => {
        return value.replace(PATTERN, '');
    };

    const handlePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        let inputNumbersValue = getInputNumbersValue(input.value);
        let formattedInputValue = '';
        if (!inputNumbersValue) {
            return (input.value = '');
        }

        if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] === '9') {
                inputNumbersValue = '7' + inputNumbersValue;
            }

            formattedInputValue = '+7 ';
            if (inputNumbersValue.length > 1) {
                formattedInputValue += ' ' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ' ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        }
        input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const input = event.target as HTMLInputElement;
        if (
            event.key === 'Backspace' &&
       getInputNumbersValue(input.value).length === 1
        ) {
            input.value = '';
        }

        return input;
    };



    return (
        <>
            <input
                placeholder={placeholder}
                ref={ref}
                className={s[className]}
                {...(register ? register(inputName) : register)}
                name={inputName}
                type={type}
                id={id}
                onInput={handlePhoneInput}
                onKeyDown={handlePhoneKeyDown}
            />
        </>
    );
});
