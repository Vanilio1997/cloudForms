import React from 'react';
import s from './successfulRequestModal.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/elements/Modal';
import Icon from '../../../components/elements/Icon';
import Button from '../../../components/elements/Button';
import greenMark from '../../../assests/green.png';
import { resetData } from '../../../redux/formsSlice';
import { setPage } from '../../../redux/pageSlice';
import { useAppDispatch } from '../../../hooks';


export const SuccessfulRequestModal = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function closeModal(){
        dispatch(resetData());
        dispatch(setPage(1));
        navigate('/');
    }

    return (
        <Modal>
            <div>
                <div className={s.headerText}>
                 Форма успешно отправлена
                </div>
            </div>
            <div className={s.requestContainer}>
                <div className={s.greenCircle}>
                    <Icon imageUrl={greenMark} weight="38.8px" height="38.8px" />
                </div>
            </div>
            <div className={s.btnContainer}>
                <Button
                    className="blueBtn"
                    id="button-close"
                    type="button"
                    text="Закрыть"
                    click={closeModal}
                />
            </div>
        </Modal>
    );
};
