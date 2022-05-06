import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, title, img, price}) => {
   
    return (
        <article className='Contenedor'>
            <header className='Header'>
                <h4 className='Titulo'>{title}</h4>
            </header>
            <picture>
                <img className='Imagen' src= {img} alt= {title}/>
            </picture>
            <section>
                <h4>Precio: $ {price}</h4>
            </section>
            <footer className='Footer'>
                <Link className='verDetalle' to={`/detail/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item