import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:20,
}

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

},
)

export const {increment,decrement,reset} = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;