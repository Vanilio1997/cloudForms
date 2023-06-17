import React from 'react';
import s from './Avatar.module.css';

interface IAvatarProps {
    text: string
    width?: string
    height?: string
    otherSyles?: any
}

const Avatar = ({height = '80px' , width = '80px', text ,otherSyles}:IAvatarProps) => {


    const style = {
        height: height,
        width: width,
        otherSyles
    };

    return (
        <div className={s.avatar} style={style} >
            <div>
                {text}
            </div>
        </div>
    );
};

export default Avatar;
