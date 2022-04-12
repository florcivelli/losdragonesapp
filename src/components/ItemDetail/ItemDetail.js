import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({id, title, img, description, price, stock}) => {
    const [quantity, setQuantity] = useState (0)

    const handleOnAdd = (count) => {
        console.log('agregué al carrito')
        setQuantity(count)
    }

    return (
        <article className='Contenedor'>
            <header>
                <h3>{title}</h3>
            </header>
            <picture>
                <img className='Imagen' src= {img} alt= {title}/>
            </picture>
            <section>
                <p>Descripción: {description}</p>
                <p>Precio: $ {price}</p>
                <p>Stock: {stock}</p>
            </section>
            <footer>
                {quantity === 0 ? <ItemCount onAdd={handleOnAdd} /> : <button>Ir al carrito</button>}
            </footer>
        </article>
    )
}


export default ItemDetail