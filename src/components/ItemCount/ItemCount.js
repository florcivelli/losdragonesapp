import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ initial = 0, stock, onAdd }) => {
    const [count, setCount] = useState(initial)
    
    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>   {count}   </p>
            <button onClick={increment}>+</button>
            
            <button className="botonCarrito" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount