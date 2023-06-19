import React from 'react';
import Avatar from '../elements/Avatar';
import Link from '../elements/Link';
import { ILinksArr } from '../../types';
import s from './MainHeader.module.css';

interface IMainHeaderProps{
   userName: string
   shortName: string
   linksArr?: ILinksArr[]
}

export const MainHeader = ({shortName,userName,linksArr}:IMainHeaderProps) => {
    return (
        <div className={s.mainHeader}>
            <div>
                <Avatar text={shortName} otherSyles={{'color': 'blue'}} />
            </div>
            <div className={s.userInfoContainer}>
                <div>
                    {userName}
                </div>
                <div className={s.linkContainer}>
                    {
                        linksArr?.map(({image,link,text}:ILinksArr, index) => (
                            <Link link={link} image={image} text={text} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
