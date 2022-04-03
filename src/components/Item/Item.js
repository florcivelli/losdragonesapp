import './Item.css'

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
                <button>Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item