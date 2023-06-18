import { configureStore , } from '@reduxjs/toolkit';
import formsSlice  from './formsSlice';
import pageSlice from './pageSlice';
// import { combineReducers } from 'redux';

export const store = configureStore({
    reducer: {
        form: formsSlice.reducer,
        page: pageSlice.reducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
