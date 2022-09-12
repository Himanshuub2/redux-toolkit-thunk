import {useSelector,useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import {fetchProducts} from "../Redux/reducers"

const Image  = ()=>{
    const [product,setProduct] = useState([])
   const dispatch = useDispatch();
    const arr = useSelector(state=>state.counter.apiData);
    




    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <div>
           
        {
            product.map(item=>
               (
                <img src = {item.thumbnail} ></img>
               ) 
                )
        }
        </div>
    )
}

export default Image;