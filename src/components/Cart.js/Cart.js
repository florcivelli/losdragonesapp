import { useContext } from "react"
import CartContext from '../CartContext/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import { useNotification } from "../../notification/notification"
import './Cart.css' 

const Cart = () => {

    const { cart, clearCart, getTotal, removeItem, getQuantity} = useContext(CartContext)

    const { setNotification } = useNotification()
    
    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: 'Florencia',
                phone: '2616075281',
                email: 'florcivelli@hotmail.com'
            },
            items: cart,
            total: getTotal()
        }

        const batch = writeBatch(firestoreDb)
        const outOfStock = []

        const ids = cart.map(prod => prod.id)
        const collectionRef = collection (firestoreDb, 'losdragones') 

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity= objOrder.items.find(prod => prod.id === doc.id).quantity
                    if(dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({id: doc.id, dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject( {title: 'outOfStockError', losdragones: outOfStock} )
                }
            }).then(() => {
                batch.commit()
                console.log ('se generó la orden')
                setNotification(`La orden se generó exitosamente`)
            }).catch((error) => {
                if(error && error.title === 'outOfStockError' && error.losdragones.length > 0) {
                    console.log(error.losdragones)
                } else {
                    console.log(error)
                }
                
            })
    }


    if(getQuantity() === 0){
        return(
            <h3>No hay items en carrito</h3>
        )
    }
    return (
        <div className="contenedorCart">
            <h1>Cart</h1>
            
                {cart.map(prod => <li className="Listado" key={prod.id}>{prod.title} Precio unit: $ {prod.price} <button className="eliminarItem" onClick={() => removeItem(prod.id)}>X</button> </li>)}
            
            <h2 className="Total">Total: $ { getTotal ()} </h2>
            <button className="botonCompra" onClick={createOrder}>Terminar mi compra</button>
            <button className="botonVaciar" onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart