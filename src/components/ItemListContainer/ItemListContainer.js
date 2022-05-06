import React from 'react'
import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
//import { getProducts} from '../../asynmock'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, limit } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = ()=> {
    const [losdragones, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

     useEffect(() => {
        setLoading(true)

      /*   if(categoryId) {
            getProducts(categoryId).then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            })
        } else {
            getProducts().then(items => {
                setProducts(items)
            }).catch(err => {
                console.log(err)
            })

        } */

        const collectionRef = categoryId 
        ? query(collection(firestoreDb, 'losdragones'), where ('category', '==', categoryId))
        : collection(firestoreDb, 'losdragones')

        getDocs(collectionRef).then(querySnapshot => {
           
            const losdragones = querySnapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            
            setProducts(losdragones)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    return (

        <div className="ItemListContainer" onClick={() => console.log ('Click en ItemListContainer')}>
            
            {
                loading ? 
                    <h2>Cargando...</h2> :  
                    losdragones.length > 0 ? 
                    <ItemList products={losdragones}/> :
                    <h2>No se encontraron productos</h2>
            }
        </div>
    )    
    
}

export default ItemListContainer

/* 
 */
/* 
        <div className="ItemListContainer" onClick={() => console.log ('Click en ItemListContainer')}>
            
            
            
        <ItemList products={products}/> 
    

        </div> */