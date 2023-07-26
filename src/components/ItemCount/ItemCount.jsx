import "./ItemCount.css";
import React,{useState, useEffect} from "react";

export const ItemCount = ({initial,stock,onAdd}) =>{
    const[count,setCount] = useState(parseInt(initial));

const decrease = () => {
    setCount(count - 1);
}

const increase = () => {
    setCount(count + 1);
}

    return(
        <div className="counter">
            <button disabled ={count <= 0} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled ={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick= {()=> onAdd(count)} >Agregar al Carrito</button>
            </div>
        </div>
        
    );
} 
export default ItemCount;
