import "./itemDetail.css"
import { ItemsCount } from "../ItemsCount/itemsCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/cartContext"

export const ItemDetail = ({id, title, pictureURL, detalle, price})=>{
    const [stock, setStock] = useState(5)
    const [cantidadComprados, setCantidadComprados] = useState(0);
    const { addItem, isInCart } = useContext(CartContext);

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
        if (!isInCart(id)) {
            setCantidadComprados(number);
            addItem(
                {
                    id:id,
                    title:title,
                    pictureURL:pictureURL,
                    detalle:detalle,
                    price:price
                },
                number
            );
        }        
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