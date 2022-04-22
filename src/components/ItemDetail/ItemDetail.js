import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import CartContext from '../CartContext/CartContext'
import { useNotification } from '../../notification/notification'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, title, img, description, price, stock}) => {

    const { addItem, isInCart } = useContext (CartContext)
    const { setNotification } = useNotification()
 
    const handleOnAdd = (count) => {
        console.log('agregué al carrito')
        addItem({ id, title, price}, count)
        setNotification('Se agregaron los productos al carrito')
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
            </section>
            <footer>

            { isInCart(id) ? <Link to='/cart'>Ir al carrito</Link> :  <ItemCount onAdd={handleOnAdd} stock={stock}/> }
            
            </footer>
        </article>
    )
}


export default ItemDetail