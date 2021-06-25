export const Item = ({id, title, price, pictureURL}) =>{
    return(<div>
         <h1>{title}</h1>
         <img style={{maxHeight: '100px'}} src={pictureURL} alt="imagen producto"/>
         <h2>${price}</h2>
    </div>)
}