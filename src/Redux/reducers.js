import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//'https://dummyjson.com/products' 

const initialState = {
    value:20,
    apiData :[],

}


export const fetchProducts = createAsyncThunk(
    "counter/apiData",
    async()=>{
        const data = await fetch("https://dummyjson.com/products");
        const result = await data.json();
        return result;
        console.log(result);
    }
)
export const counterSlice  = createSlice({
    name:"counter",
    initialState,

    reducers:{
        
        increment :(state)=>{
           state.value += 1;
        },

        decrement:(state)=>{
            state.value -=1
        },

        reset:(state,action)=>{
            state.value = action.payload
        }





        
    },

    extraReducers:{

        [fetchProducts.pending]:(state)=>{
            state.apiData = []
        },

        [fetchProducts.fulfilled]:(state,action)=>{
            state.apiData = [...state.apiData, action.payload]
        },

        [fetchProducts.rejected]:(state)=>{
            state.apiData = []
        }

    }

},
)

export const {increment,decrement,reset} = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;