import React from "react";
import CartWidget from "../CartWidget";
import  "./NavBar.css"
import { NavLink } from "react-router-dom";

export const  NavBar = () => {
    return(
        <div className="conteiner">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to="/">Nike</NavLink>
                </div>
                <ul className="nav_list">
                    <li className="Productos">
                        <NavLink className="nav_link" to='/categoria/Zapatillas'>Zapatillas</NavLink>
                    </li>
                    <li className="Productos">
                        <NavLink className="nav_link" to='/categoria/Remeras'>Remeras</NavLink>
                    </li>
                    <li className="Productos">
                        <NavLink className="nav_link" to='/categoria/Camperas'>Camperas</NavLink>
                    </li>
                    <li className="Carrito">
                        <NavLink className="nav_link" to='/cart'>
                        <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>



        </div>
    );
}
export default NavBar;