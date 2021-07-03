import "./itemDetail.css"
export const ItemDetail = ({title, pictureURL, detalle, price})=>{
    return(<div className='detail'>
        <h1>{title}</h1>
        <img style={{maxHeight: '300px'}} src={pictureURL} alt="imagen producto"/>
        <p>{detalle}</p>
        <h2>${price}</h2>
   </div>)
}