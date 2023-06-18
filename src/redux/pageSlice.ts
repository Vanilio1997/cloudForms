import { IFirstForm,ISecondForm,IThirdForm} from './../types';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface IPageState {
    maxOpenPage: number
    currentPage: number
}

const initialState:IPageState = {
    currentPage:1,
    maxOpenPage:1
};

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers:{
        nextPage(state){
            if(state.currentPage < 3){
                state.currentPage+= 1;
            }
        },
        prevPage(state){
            if(state.currentPage > 1){
                state.currentPage-= 1;
            }
        }
    }
});

export const { nextPage,prevPage} = pageSlice.actions;

export default pageSlice;
