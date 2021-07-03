import { useParams } from 'react-router'
import {useEffect, useState} from 'react'
import Campari from '../../img/Campari.png'
import Branca from '../../img/Branca.jpg'
import Trumpeter from '../../img/Trumpeter.png'
import SantaJulia from '../../img/SantaJulia.png'
import {ItemDetail} from '../ItemDetail/itemDetail'

const PRODUCTOS = [
    {
        id:1,
        category: 'destilados',
        title:'Campari',
        price:550,
        pictureURL:Campari,
        detalle:'Campari es una bebida alcohólica espirituosa obtenida de la infusión de hierbas amargas, plantas aromáticas y frutas en alcohol y agua.'
    },
    {
        id:2,
        category: 'destilados',
        title:'Branca',
        price:650,
        pictureURL:Branca,
        detalle:'El fernet es una bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas, que son maceradas en alcohol de vino. '
    },
    {
        id:3,
        category: 'vinos',
        title:'Trumpeter',
        price:810,
        pictureURL:Trumpeter,
        detalle:'soy vino'
    },
    {
        id:4,
        category: 'vinos',
        title:'Santa Julia',
        price:340,
        pictureURL:SantaJulia,
        detalle:'soy vino'
    }
]

export const ItemDetailContainer = ()=> {
    const [item, setItem]=useState({})
    const {itemId}= useParams()

    useEffect(()=>{
        const getItem = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(PRODUCTOS.find(producto => producto.id === parseInt(itemId)))
            },2000)    
        })
        getItem.then((item)=>{
            setItem(item)
        })
    },[itemId]
    )

    return(
        <ItemDetail 
            title={item.title}
            pictureURL={item.pictureURL}
            detalle={item.detalle}
            price={item.price}            
        />
    )
}
