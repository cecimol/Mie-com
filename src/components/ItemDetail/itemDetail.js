import "./itemDetail.css"
import { ItemsCount } from "../ItemsCount/itemsCount"
import { useState } from "react"
import { Link } from "react-router-dom"

export const ItemDetail = ({title, pictureURL, detalle, price})=>{
    const [stock, setStock] = useState(5)
    const [cantidadComprados, setCantidadComprados] = useState(0);
    

    const handleAgregar = (number, setNumber) => {
        if (stock > 0){
            setNumber(number + 1)            
            setStock(stock-1)
        }
    }
    
    const handleResta = (number, setNumber) => {
        if (number > 1){
            setNumber(number-1)
            setStock(stock+1)
        }
    }

    const onAdd = (number) => {
        setCantidadComprados(number);
    }
    const mostrarItemCountOBoton = () => {
        if(cantidadComprados > 0) {
            return <Link to='/cart'><button >Terminar mi compra</button></Link>        
        } else { 
            return (
                <ItemsCount 
                    stock={stock}
                    initial={1}
                    onIncrement={handleAgregar}
                    onSubstract={handleResta}
                    onAdd={onAdd}
                />
            )
        }
    }


    return(<div className='detail'>
        <h1>{title}</h1>
        <img style={{maxHeight: '300px'}} src={pictureURL} alt="imagen producto"/>
        <p>{detalle}</p>
        <h2>${price}</h2>
        {mostrarItemCountOBoton()}       
   </div>)
}