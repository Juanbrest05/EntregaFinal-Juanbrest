import React from "react";
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import "./Cart.css"

export const Cart = () =>{
    const {cart, totalPrice} = useCartContext();
const order = {
    buyer:{
        name:"Pablo",
        email: "pablo@gmail.com",
        phone: "3413546728",
        address: "asdd"

    },
    items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})) ,
    total: totalPrice() ,
}
const handleClick = () => {
const db = getFirestore()
const ordersCollection =collection(db,"orders")
addDoc(ordersCollection, order)
.then(({id}) => console.log(id))


}





    return(
        <>
        <div className="jejex"> {
            cart.map(product => <ItemCart key={product.id} product={product} />)
            
        }
        </div>
        <div className="jeje">
        <p className="xd">
            Total: {totalPrice()}
        </p>
        <button className="pepe" onClick={handleClick}>Emitir compra</button>
        </div>
     </>
     ) 
}

export default Cart;