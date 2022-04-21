import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (product, quantity) => {
        const objItemCart = {
            ...product,
            quantity
        }
        
        setCart([...cart, objItemCart ])
    }

    /* const removeItem = (itemId) => {

    }
*/
    const clearCart = () => {
        setCart([])
    }
 
    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count + prod.quantity
        })

        return count
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem,
            /* removeItem,*/
            clearCart, 
            getQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 