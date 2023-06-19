import React from 'react';
import s from './ProgressBar.module.css';
import Icon from '../Icon';
import mark from '../../../assests/mark.png';
import dot from '../../../assests/dot.png';
import { useAppSelector,useAppDispatch } from '../../../hooks';
import { setPage } from '../../../redux/pageSlice';

interface IProgressBar {
   length: number
}

export const ProgressBar = ({length}:IProgressBar) => {

    const arr = [];
    const dispatch = useAppDispatch();
    const currentPage = useAppSelector(state => state.page.currentPage);

    for(let i =1 ; i<= length; i++){
        arr.push(i);
    }

    const customWidth = currentPage * 50 - 50;
    return (
        <div className={s.container}>
            <div className={s.progressBar}>
                <div className={s.progress} style={{width:`${customWidth}%` }} ></div>
                {
                    arr.map((item,index) =>(
                        <div  key={index} className={s.stepContainer} onClick={()=> dispatch(setPage(item))}>
                            <div className={currentPage >= item ? s.activeSteps : s.steps}>
                                {
                                    currentPage > item && <Icon height="8px" weight="9.6px" imageUrl={mark} />
                                }
                                {
                                    currentPage === item && <Icon height="3.2px" weight="3.2px" imageUrl={dot}/>
                                }
                            </div>
                            <div className={currentPage >= item ? s.item: ''}> {item}</div>
                        </div>

                    ))
                }

            </div>
        </div>
    );
};
