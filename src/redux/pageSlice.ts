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
                state.maxOpenPage+=1;
            }
        },
        prevPage(state){
            if(state.currentPage > 1){
                state.currentPage-= 1;
            }
        },
        setPage(state, action:PayloadAction<number>){
            if(action.payload <= state.maxOpenPage){
                state.currentPage =action.payload;
            }
        }
    }
});

export const { nextPage,prevPage,setPage} = pageSlice.actions;

export default pageSlice;
