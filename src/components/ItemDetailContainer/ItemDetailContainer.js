import { useState, useEffect } from 'react'
/* import { getItemById } from '../../asynmock' */
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = ({addToCart, cart}) => {

    const [losdragones, setProduct] = useState ()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
     /*    setLoading(true)
        getItemById(productId).then(prod =>{
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        }) */

        const docRef = doc(firestoreDb, 'losdragones', productId)

        getDoc(docRef).then(querySnapshot =>{
            const losdragones = { id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(losdragones)
        }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })

    }, [productId])  

    if(loading) {
        return <h2>Cargando...</h2>
    }
   
    return (
        <ItemDetail {...losdragones} addToCart={addToCart} cart={cart}/>
    )
}

export default ItemDetailContainer