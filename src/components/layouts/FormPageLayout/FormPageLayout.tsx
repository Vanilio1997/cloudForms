import React, { ReactNode } from 'react';
import s from './FormPageLayout.module.css';

export const FormPageLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className={s.FormPageLayout}>
            {
                children
            }
        </div>
    );
};
