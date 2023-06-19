import React from 'react';
import s from './Modal.module.css';

export const Modal = ({children}:{children:React.ReactNode}) => {
    return (
        <div className={s.modal}>
            <div className={s.modalFrame}>
                {children}
            </div>
        </div>
    );
};
