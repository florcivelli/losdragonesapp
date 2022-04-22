import { useState, createContext } from "react";

const Context = createContext()

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

    const removeItem = (id) => {
        const newProducts = cart.filter(prod => prod.id !== id)
        setCart(newProducts)
    }

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

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            const subtotal = prod.price * prod.quantity
            total += subtotal
        })

        return total
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    return (
        <Context.Provider value={{ 
            cart, 
            addItem,
            removeItem,
            clearCart, 
            getQuantity,
            getTotal,
            isInCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context 