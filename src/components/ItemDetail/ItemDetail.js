import './ItemDetail.css'

const ItemDetail = ({id, title, img, description, price, stock}) => {
    
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
        </article>
    )
}


export default ItemDetail