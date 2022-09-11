import {useSelector}from "react-redux"
// import counterReducer from "../Redux/reducers";

const Count = ()=>{

    const nvalue = useSelector(state=>state.counter.value);
    return(
        <div>
            
            <h2>{nvalue}</h2>
         </div>
    )
}


export default Count;