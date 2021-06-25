import {useEffect} from 'react'
import {Item} from '../Item/item'
import './itemList.css'
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

export const ItemList = () => {


    useEffect(()=>{
        
        const obtenerProductos = new Promise((resolve, reject)=> {
            
           setTimeout(()=>{
               resolve(PRODUCTOS)
        
           }, 2000)
        })
        
        obtenerProductos.then(
            (productos)=>{
                console.log(productos)
            }
        )
    },[])

    return(<div className='productos'>
        {PRODUCTOS.map((item, indice)=>{
            return (
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    pictureURL={item.pictureURL}
                />
            )
        })}
        
    </div>)
}


