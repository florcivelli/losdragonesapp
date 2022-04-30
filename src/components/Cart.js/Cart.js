import { useContext } from "react"
import CartContext from '../CartContext/CartContext'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import { useNotification } from "../../notification/notification"

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
            }).then(( {id} ) => {
                batch.commit()
                setNotification('success',`La orden se generó exitosamente, código de orden es: ${id}`)
            })
    }

   

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
            <button onClick={createOrder}>Terminar mi compra</button>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart