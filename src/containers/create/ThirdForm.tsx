import React,{ChangeEvent, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch ,useAppSelector } from '../../hooks';
import { setThirdForm } from '../../redux/formsSlice';
import { prevPage } from '../../redux/pageSlice';
import { postData } from '../../redux/formsSlice';
import Button from '../../components/elements/Button';
import FormField from '../../components/elements/FormField';
import FormLayout from '../../components/layouts/FormLayout';
import { BtnsBottomLayout } from '../../components/layouts/BtnsBottomLayout/BtnsBottomLayout';

interface IThirdForm{
   about: string
}

const schema = yup.object().shape({
    about: yup
        .string()
        .required('Напишите что-нибудь о себе)')
        .max(200,'Количество символов не должно быть больше 200'),
});

export const ThirdForm = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IThirdForm>({ resolver: yupResolver(schema) });
    const dispatch = useAppDispatch();
    const about = useAppSelector(state => state.form.thirdForm.about);
    const firstformData = useAppSelector(state => state.form.firstform);
    const secondformData = useAppSelector(state => state.form.secondForm);
    const [quantity, setQuantity] = useState('');

    function onHandelerArea(e:ChangeEvent<HTMLTextAreaElement>){
        const input = e.target;
        setQuantity(input.value);
    }
    useEffect(()=>{
        setValue('about', about);
    },[]);

    const onSubmit = (data:any , e:any) =>{
        e.preventDefault();
        dispatch(setThirdForm(data));
        const postValues = {...firstformData, ...secondformData , ...data};
        dispatch(postData(postValues));
    };

    function backToPrevPage(data:any){
        dispatch(prevPage());
        dispatch(setThirdForm(data));
    }

    return (
        <div>
            <form>
                <FormLayout marginBottom="76px" width="100%">
                    <FormField
                        label="about"
                        type="textarea"
                        placeholder="Placeholder"
                        className="formsInput"
                        register={register}
                        id="field-about"
                        error={errors.about && errors.about.message}
                        name="about"
                        change={onHandelerArea}
                    />
                    <div>{quantity.trim().length}</div>
                </FormLayout>
                <BtnsBottomLayout>
                    <Button
                        type="button"
                        id="button-back"
                        text="Назад"
                        click={handleSubmit(backToPrevPage)}
                        className="whiteBtn"
                    />
                    <Button
                        type="submit"
                        id="button-send"
                        text="Отправить"
                        click={handleSubmit(onSubmit)}
                        className="blueBtn"
                    />
                </BtnsBottomLayout>
            </form>
        </div>
    );
};

