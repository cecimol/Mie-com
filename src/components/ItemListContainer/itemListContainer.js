import {useState} from 'react'
import { ItemsCount } from '../ItemsCount/itemsCount'
export const ItemListContainer = () => {
    const [stock, setStock] = useState(5)
    const handleAgregar = (number) => {
        if (number <= stock){            
            setStock(stock-number)
        }
    }
    return(
        <ItemsCount stock={stock} initial={1} onAdd={handleAgregar} />
    )






}

