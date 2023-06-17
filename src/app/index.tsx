import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Main } from './Main';
import Create from './Create';

export const App = () => {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/create'} element={<Create/>}/>
            </Routes>
        </>
    );
};
