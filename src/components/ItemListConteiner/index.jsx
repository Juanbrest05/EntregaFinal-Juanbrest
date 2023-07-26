import React, {useState, useEffect} from "react";
import { Title } from "../Title";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import ItemList from "../ItemList";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";




export const ItemListConteiner = ({texto}) =>{

    const [data, setData] =useState([])

    const {categoriaId} =useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "products");
    
        if (categoriaId) {
            // Sin comillas alrededor de categoryId
            const queryFilter = query(queryCollection, where("category", "==", categoriaId));
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(error => {
                    // Manejo de errores si es necesario
                });
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(error => {
                    // Manejo de errores si es necesario
                });
        }
    }, [categoriaId]);
    
    
  



    return(
        <>
        <div className="grid-container">
                <div className="Pepe">
                <Title  greeting="Productos"/>
                </div>
                <div className="XD">
                <ItemList data ={data}/>
                </div>
        </div>
       
        </>
     ) ;
}
    


export default ItemListConteiner;