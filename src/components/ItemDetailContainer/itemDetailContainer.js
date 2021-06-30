import {useEffect, useState} from 'react'
import Campari from '../../img/Campari.png'
import {ItemDetail} from '../ItemDetail/itemDetail'

const ITEM = {
    id:1,
    title:'Campari',
    price:550,
    pictureURL:Campari,
    detalle:'Campari es una bebida alcohólica espirituosa obtenida de la infusión de hierbas amargas, plantas aromáticas y frutas en alcohol y agua.'
}

export const ItemDetailContainer = ()=> {
    const [item, setItem]=useState({})

    useEffect(()=>{
        const getItem = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ITEM)
            },2000)    
        })
        getItem.then((item)=>{
            setItem(item)
        })
    },[]
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
