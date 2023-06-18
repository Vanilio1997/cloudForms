import React,{ChangeEvent,useEffect} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch ,useAppSelector } from '../../hooks';
import { setFirstForm } from '../../redux/formsSlice';
import { nextPage } from '../../redux/pageSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/elements/Button';
import FormField from '../../components/elements/FormField';
import FormLayout from '../../components/layouts/FormLayout';
import { BtnsBottomLayout } from '../../components/layouts/BtnsBottomLayout/BtnsBottomLayout';
import { validionOnExtraSymbols ,validationOnlyLatter} from '../../validationRules';

interface IFirstForm{
   nickname: string
   name: string
   surname: string
   sex:string
}

const schema = yup.object().shape({
    nickname: yup
        .string()
        .required('Укажите ваш никнейм')
        .max(30,'Количество символов не должно быть больше 30'),
    name: yup
        .string()
        .required('Укажите ваше имя')
        .max(50,'Количество символов не должно быть больше 50'),
    surname: yup
        .string()
        .required('Укажите вашу фамилию')
        .max(50,'Количество символов не должно быть больше 50'),
    sex: yup
        .string()
        .required('укажите ваш пол')
});

   enum sexEnum {
      man,
      woman
   }

export const FirstForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<IFirstForm>({ resolver: yupResolver(schema) });
    const store = useAppSelector(store => store);
    const {name,nickName,sex,surname} = useAppSelector(store => store.form.firstform);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function onValidateNumbersLatters(event: ChangeEvent<HTMLInputElement>){
        const input = event.target;
        const lastElement = validionOnExtraSymbols(input.value[input.value.length - 1]);
        if(!lastElement){
            input.value = input.value.slice(0,-1);
        }
        if(input.value.length === 31){
            input.value = input.value.slice(0,-1);
        }
        return input;
    }

    useEffect(()=>{
        setValue('name', name);
        setValue('nickname', nickName);
        setValue('sex', sex);
        setValue('surname', surname);
    },[]);

    function onValidateLatters(event: ChangeEvent<HTMLInputElement>){
        const input = event.target;
        const lastElement = validationOnlyLatter(input.value[input.value.length - 1]);
        if(!lastElement){
            input.value = input.value.slice(0,-1);
        }
        if(input.value.length === 51){
            input.value = input.value.slice(0,-1);
        }
        return input;
    }

    function backToStartPage(){
        navigate('/');
    }

    const onSubmit = (data:any , e:any) => {
         e.preventDefault();
        dispatch(setFirstForm(data));
        dispatch(nextPage());
    };

    return (
        <div>
            <form>
                <FormLayout marginBottom="48px" width="400px">
                    <FormField
                        label="Nickname"
                        type="text"
                        placeholder="Placeholder"
                        className="formsInput"
                        register={register}
                        id="field-nickname"
                        change={onValidateNumbersLatters}
                        error={errors.nickname && errors.nickname.message}
                        name="nickname"
                    />
                    <FormField
                        label="Name"
                        type="text"
                        placeholder="Placeholder"
                        className="formsInput"
                        register={register}
                        id="field-name"
                        error={errors.name && errors.name.message}
                        name="name"
                        change={onValidateLatters}
                    />
                    <FormField
                        label="Sername"
                        type="text"
                        placeholder="Placeholder"
                        className="formsInput"
                        id="field-surname"
                        register={register}
                        error={errors.surname && errors.surname.message}
                        name="surname"
                        change={onValidateLatters}
                    />
                    <FormField
                        label="Sex"
                        type="select"
                        placeholder="Не выбрано"
                        className="mainPageInput"
                        id="field-sex"
                        register={register}
                        name="sex"
                        data={sexEnum}
                    />
                </FormLayout>
                <BtnsBottomLayout>
                    <Button
                        type="button"
                        id="button-back"
                        click={backToStartPage}
                        text="Назад"
                        className="whiteBtn"
                    />
                    <Button
                        type="submit"
                        id="button-next"
                        text="Далее"
                        click={handleSubmit(onSubmit)}
                        className="blueBtn"
                    />
                </BtnsBottomLayout>
            </form>
        </div>
    );
};
