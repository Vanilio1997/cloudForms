import { IFirstForm,ISecondForm,IThirdForm} from './../types';
import {PayloadAction, createSlice ,createAsyncThunk} from '@reduxjs/toolkit';

interface IFormState {
    firstform: IFirstForm
    secondForm: ISecondForm
    thirdForm: IThirdForm
    advantages: string[]
    checkbox : number[]
    radioBtn: string[]
    advantagesforAllTime: number
}

const initialState:IFormState = {
    advantagesforAllTime: 3,
    advantages: ['field-advatages-1','field-advatages-2', 'field-advatages-3'],
    checkbox: [1,2,3],
    radioBtn: ['field-radio-group-option-1','field-radio-group-option-2','field-radio-group-option-3'],
    firstform:{
        name: '',
        nickName:'',
        sex: '',
        surname: '',
    },
    secondForm:{
        advantages: [],
        checkbox:[],
        radio:'',
    },
    thirdForm:{
        about: ''
    }
};


export const postData = createAsyncThunk('user/postDate', async (data: any) => {
    try {
        const responce = await fetch('https://api.sbercloud.ru/content/v1/bootcamp/frontend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.info),
        });

        return responce.json();
    } catch (err) {
        return err;
    }
});

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers:{
        setFirstForm(state, action:PayloadAction<IFirstForm>){
            state.firstform = action.payload;
        },
        setSecondForm(state, action:PayloadAction<ISecondForm>){
            // console.log(action);
            state.secondForm.radio = action.payload.radio;
            state.secondForm.checkbox = action.payload.checkbox ? action.payload.checkbox : [];
            const newObj = {...action.payload , radio: undefined, checkbox: undefined};
            delete newObj.radio;
            delete newObj.checkbox;
            state.secondForm.advantages = newObj;

        },
        setThirdForm(state, action:PayloadAction<IThirdForm>){
            state.thirdForm = action.payload;
        },
        addFieldAdvantages(state){
            state.advantagesforAllTime +=1;
            state.advantages.push(`field-advatages-${state.advantagesforAllTime}`);
        },
        deleteField(state, action:PayloadAction<string>){
            state.advantages = state.advantages.filter(item => item !== action.payload);
        }
    }
});

export const { setFirstForm ,addFieldAdvantages,deleteField,setSecondForm ,setThirdForm} = formsSlice.actions;

export default formsSlice;
