import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {ItemList} from '../ItemList/itemList'
import Campari from '../../img/Campari.png'
import Branca from '../../img/Branca.jpg'
import Trumpeter from '../../img/Trumpeter.png'
import SantaJulia from '../../img/SantaJulia.png'

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

export const ItemListContainer = () => {
    
    
    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    
    
    useEffect(()=>{        
        const obtenerProductos = new Promise((resolve, reject)=> {     
            setTimeout(()=>{
                if(categoryId){
                    resolve(PRODUCTOS.filter(producto => producto.category === categoryId))
                } else {
                    resolve(PRODUCTOS)
                }                              
            }, 2000)
        })
        
        obtenerProductos.then(
            (productos)=>{
                setProductos(productos)
            }
        )
    },[categoryId])
    

    return(
        <div>
        <ItemList productos={productos}/>
       
            
        </div>
        )







}

