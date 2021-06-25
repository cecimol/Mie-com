import {useState} from 'react'
import { ItemsCount } from '../ItemsCount/itemsCount'
import {ItemList} from '../ItemList/itemList'
export const ItemListContainer = () => {
    const [stock, setStock] = useState(5)
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

    

    return(
        <div>
        <ItemList/>
        <ItemsCount stock={stock} initial={1} onAdd={handleAgregar} onSubstract={handleResta}/>
        </div>
        )







}

