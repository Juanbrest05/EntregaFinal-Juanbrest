import "./item.css"
import { Link } from "react-router-dom"
import React, {useContext} from "react"
import { useCartContext} from "../../context/CartContext"

const Item = ({info}) =>{
    const nombre = useContext(useCartContext);
    console.log("Item: ", nombre)
    return(
        <Link  to={`/detalle/${info.id}`} className="film">
            <img className="Imagen" src={info.image} />
            <h1 className="Titulo">{info.title}</h1>
            <p className="Precio">{info.price}</p>
        </Link>
        

    );
}
export default Item;