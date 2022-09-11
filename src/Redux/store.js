
import {configureStore} from "@reduxjs/toolkit"

import counterReducer from "./reducers";
// import { counterSlice } from "./reducers";

export const store = configureStore({
    reducer:{
        counter:counterReducer,

    }
})


// export default store;