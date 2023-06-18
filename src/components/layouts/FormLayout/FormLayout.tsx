import React,{ReactNode} from 'react';
import s from './FormLayout.module.css';

interface IFormLayoutProps{
   marginBottom: string
   width:string
   children: ReactNode
}

const FormLayout = ({children,marginBottom, width}:IFormLayoutProps) => {
    return (
        <div className={s.formLayout} style={{'marginBottom': marginBottom, maxWidth: width}}>
            {children}
        </div>
    );
};

export default FormLayout;
