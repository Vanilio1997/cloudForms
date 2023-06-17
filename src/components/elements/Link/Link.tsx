import React, { ReactNode } from 'react';
import s from './Link.module.css';
import Icon from '../Icon';

interface ILinkProps{
   text: string
   image?: string
   link: string
}

export const Link = ({image,link,text}:ILinkProps) => {

    return (
        <div className={s.linkСontainer}>
            <Icon height="11.2px" weight="12.8px" imageUrl={image} />
            <a  className={s.link}href={link}>{text}</a>
        </div>
    );
};
