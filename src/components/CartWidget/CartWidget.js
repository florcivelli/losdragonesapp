import './CartWidget.css' 
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext/CartContext'

const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return (
        
            <Link to={'/'} className="CartWidget">
                <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1647895941~exp=1647896541~hmac=313c4ca61388b7d09f4449b090c5227421f5a52871743972d6bee790a6a3aa5a" alt="carrito"/>
                {getQuantity ()}
            </Link>
    );
}

export default CartWidget