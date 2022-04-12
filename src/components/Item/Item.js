import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, img, price}) => {
   
    return (
        <article className='Contenedor'>
            <header className='Header'>
                <h3 className='Titulo'>{title}</h3>
            </header>
            <picture>
                <img className='Imagen' src= {img} alt= {title}/>
            </picture>
            <section>
                <h3>Precio: $ {price}</h3>
            </section>
            <footer className='Footer'>
                <Link to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item