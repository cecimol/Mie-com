export const ItemDetail = ({title, pictureURL, detalle, price})=>{
    return(<div>
        <h1>{title}</h1>
        <img style={{maxHeight: '300px'}} src={pictureURL} alt="imagen producto"/>
        <p>{detalle}</p>
        <h2>${price}</h2>
   </div>)
}