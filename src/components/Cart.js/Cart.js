import { useContext } from "react"
import CartContext from '../CartContext/CartContext'


const Cart = () => {

    const { cart, clearCart, getTotal, removeItem, getQuantity} = useContext(CartContext)

    if(getQuantity() === 0){
        return(
            <h3>No hay items en carrito</h3>
        )
    }
    return (
        <div>
            <h1>Cart</h1>
            
                {cart.map(prod => <li key={prod.id}>{prod.title} Precio unit: $ {prod.price} <button onClick={() => removeItem(prod.id)}></button> </li>)}
            
            <h2>Total: $ { getTotal ()} </h2>
            <button>Terminar mi compra</button>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart