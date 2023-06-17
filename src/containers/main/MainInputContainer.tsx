import React, {useState,useEffect} from 'react';
import Button from '../../components/elements/Button';
import FormField from '../../components/elements/FormField';
import FormLayout from '../../components/layouts/FormLayout';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';


interface IMainInputContainerForm{
    phoneNumber: string
    email: string
}

const schema = yup.object().shape({
    phoneNumber: yup
        .string()
        .required('Укажите Номер Телефона')
        .min(17,'Номер Телефона указан некорректно'),
    email: yup
        .string()
        .required('Укажите ваш почтовый адрес')
        .email('Почтовый адрес указан некорректно')
});

export const MainInputContainer = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IMainInputContainerForm>({ resolver: yupResolver(schema) });

    const navigate = useNavigate();


    const onSubmit = (data:any , e:any) =>{
        e.preventDefault();
        navigate('/create');
    };

    return (
        <div>
            <form>
                <FormLayout marginBottom="48px" width="400px">
                    <FormField
                        label="Номер Телефона"
                        type="tel"
                        placeholder=""
                        className="mainPageInput"
                        register={register}
                        error={errors.phoneNumber && errors.phoneNumber.message}
                        name="phoneNumber"
                    />
                    <FormField
                        label="Email"
                        type="text"
                        placeholder=""
                        className="mainPageInput"
                        register={register}
                        error={errors.email && errors.email.message}
                        name="email"
                    />
                </FormLayout>
                <Button
                    width="79px"
                    type="submit"
                    id="button-start"
                    text="Начать"
                    click={handleSubmit(onSubmit)}
                    className="blueBtn"
                />
            </form>
        </div>
    );
};
