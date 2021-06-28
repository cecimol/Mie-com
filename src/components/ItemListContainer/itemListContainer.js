import {useState, useEffect} from 'react'
import { ItemsCount } from '../ItemsCount/itemsCount'
import {ItemList} from '../ItemList/itemList'
import Campari from '../../img/Campari.png'
import Branca from '../../img/Branca.jpg'
import Trumpeter from '../../img/Trumpeter.png'
import SantaJulia from '../../img/SantaJulia.png'

const PRODUCTOS = [
    {
        id:1,
        title:'Campari',
        price:550,
        pictureURL:Campari
    },
    {
        id:2,
        title:'Branca',
        price:650,
        pictureURL:Branca
    },
    {
        id:3,
        title:'Trumpeter',
        price:810,
        pictureURL:Trumpeter
    },
    {
        id:4,
        title:'Santa Julia',
        price:340,
        pictureURL:SantaJulia
    }
]

export const ItemListContainer = () => {
    
    const [stock, setStock] = useState(5)
    const [productos, setProductos] = useState([])

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
    
    useEffect(()=>{        
        const obtenerProductos = new Promise((resolve, reject)=> {     
           setTimeout(()=>{
               resolve(PRODUCTOS)               
           }, 2000)
        })
        
        obtenerProductos.then(
            (productos)=>{
                setProductos(productos)
            }
        )
    },[])
    

    return(
        <div>
        <ItemList productos={productos}/>
        <ItemsCount stock={stock} initial={1} onAdd={handleAgregar} onSubstract={handleResta}/>
        </div>
        )







}

