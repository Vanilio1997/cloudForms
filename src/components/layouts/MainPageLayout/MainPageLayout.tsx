import React,{ReactNode} from 'react';
import s from './MainPageLayout.module.css';

export const MainPageLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className={s.mainPageLayout}>
            {children}
        </div>
    );
};
