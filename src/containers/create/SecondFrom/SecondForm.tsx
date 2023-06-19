import React,{useEffect} from 'react';
import s from './SecondForm.module.css';
import { useForm } from 'react-hook-form';
import { useAppDispatch,useAppSelector } from '../../../hooks';
import { addFieldAdvantages,deleteField,setSecondForm } from '../../../redux/formsSlice';
import {nextPage,prevPage} from '../../../redux/pageSlice';
import trash from '../../../assests/trash.png';
import cross from '../../../assests/cross.png';
import FormLayout from '../../../components/layouts/FormLayout';
import Button from '../../../components/elements/Button';
import Icon from '../../../components/elements/Icon';
import { BtnsBottomLayout } from '../../../components/layouts/BtnsBottomLayout/BtnsBottomLayout';

export const SecondForm = () => {

    const { register, handleSubmit,unregister,setValue } = useForm();
    const onSubmit = (data:any) => {
        dispatch(setSecondForm(data));
        dispatch(nextPage());
    };

    function backToPrevPage(data:any){
        dispatch(prevPage());
        dispatch(setSecondForm(data));
    }

    const dispatch = useAppDispatch();
    const advantages  = useAppSelector(state => state.form.advantages);
    const checkboxes = useAppSelector(state => state.form.checkbox);
    const radioBtns = useAppSelector(state => state.form.radioBtn);
    const {checkbox,radio} = useAppSelector(state => state.form.secondForm);
    const {secondForm} = useAppSelector(state=> state.form);

    useEffect(()=>{
        setValue('checkbox', checkbox);
        setValue('radio', radio);
        for (const prop in secondForm.advantages) {
            setValue(`${prop}`, secondForm.advantages[prop]);
        }
    },[]);

    function addAdvantages(e:React.MouseEvent<HTMLElement>){
        e.preventDefault();
        dispatch(addFieldAdvantages());
    }

    function deleteAdvantages(e:React.MouseEvent<HTMLElement>, name:string){
        e.preventDefault();
        dispatch(deleteField(name));
        unregister(name);
    }

    return (
        <>
            <form className={s.form}>
                <FormLayout width="320px" marginBottom="66px">
                    <div className={s.advantagesContainer}>
                        <div className={s.groupHeader}>Advantages</div>
                        {
                            advantages.map(item => (
                                <div className={s.advanatageContainer} key={item}>
                                    <input
                                        {...register(item , { required: true })}
                                        id={item}
                                        placeholder="Placeholder"
                                        className={s.input}
                                    />
                                    <button
                                        className={s.iconbtn}
                                        onClick={(e)=> deleteAdvantages(e,item)}
                                    >
                                        <Icon imageUrl={trash} height="16px" weight="15px"/>
                                    </button>
                                </div>
                            ))
                        }
                        <button
                            className={s.crossBtn}
                            onClick={(e) => addAdvantages(e)}
                        >
                            <Icon imageUrl={cross}  height="12px" weight="12px" />
                        </button>
                    </div>
                    <div className={s.checkBoxesContainer}>
                        <div className={s.groupHeader}>Checkbox group</div>
                        {
                            checkboxes.map((checkbox,index) => (
                                <div className={s.checkboxInfoContainer} key={index}>
                                    <div className={s.checkboxContainer}>
                                        <input
                                            className={s.checkbox}
                                            {...register('checkbox')}
                                            id={`field-checkbox-group-option-${checkbox}`}
                                            value={checkbox}
                                            type="checkbox"
                                        />
                                    </div>
                                    <div>{checkbox}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="">
                        <div className={s.groupHeader}>Radio group</div>
                        {
                            radioBtns.map((item, index)=> (
                                <div className={s.radioInfoContainer} key={index}>
                                    <div className={s.radioBtnContainer}>
                                        <input
                                            {...register('radio' , {required:true})}
                                            type="radio"
                                            value={item}
                                            id={item}
                                            className={s.radioBtn}
                                        />
                                    </div>
                                    <div>{index + 1}</div>
                                </div>

                            ))
                        }
                    </div>
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
                        id="button-next"
                        text="Далее"
                        click={handleSubmit(onSubmit)}
                        className="blueBtn"
                    />
                </BtnsBottomLayout>
            </form>
        </>
    );
};
