import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Main } from './Main';
import Create from './Create';
import  FailedRequestModal  from '../containers/modals/FailedRequestModal';
import SuccessfulRequestModal from '../containers/modals/successfulRequestModal';
import { useAppSelector } from '../hooks';

export const App = () => {
    const modal = useAppSelector(state => state.form.postInfo);
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/create'} element={<Create/>}/>
            </Routes>
            {
                modal.isSend && modal.successfully && <SuccessfulRequestModal />
            }
            {
                modal.isSend && !modal.successfully && <FailedRequestModal />
            }
        </>
    );
};
