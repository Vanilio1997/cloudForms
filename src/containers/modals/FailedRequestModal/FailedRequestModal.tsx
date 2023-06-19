import React from 'react';
import s from './FailedRequestModal.module.css';
import Modal from '../../../components/elements/Modal';
import Icon from '../../../components/elements/Icon';
import Button from '../../../components/elements/Button';
import crossClose from '../../../assests/crossclose.png';
import redCross from '../../../assests/redcross.png';
import { resetData } from '../../../redux/formsSlice';
import { useAppDispatch } from '../../../hooks';


export const FailedRequestModal = () => {
    const dispatch = useAppDispatch();
    function closeModal(){
        dispatch(resetData());
    }

    return (
        <Modal>
            <div className={s.headerContainer}>
                <div className={s.headerText}>
                 Ошибка
                </div>
                <div>
                    <button className={s.iconBtn} onClick={closeModal}>
                        <Icon imageUrl={crossClose} height="11px" weight="11px" />
                    </button>
                </div>
            </div>
            <div className={s.errorContainer}>
                <div className={s.pinkCircle}>
                    <Icon imageUrl={redCross} weight="38.8px" height="38.8px" />
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
