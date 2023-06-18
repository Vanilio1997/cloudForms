import React, { ReactNode } from 'react';
import s from './BtnsBottomLayout.module.css';

export const BtnsBottomLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className={s.BtnsBottomLayout}>
            {
                children
            }
        </div>
    );
};
