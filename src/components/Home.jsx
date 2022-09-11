

import {useDispatch} from "react-redux"

import {increment,decrement,reset} from "../Redux/reducers";



const Home = ()=>{
const dispatch = useDispatch();
    return (
        <div style={{borderBottom:"2px solid black"}}>
            Home
            <button onClick = {()=>{dispatch(increment())}}>+</button>
            <button onClick = {()=>{dispatch(decrement())}}>-</button>
            <button onClick = {()=>{dispatch(reset(0))}}>Reset</button>
        </div>
        
    )
}


export default Home;