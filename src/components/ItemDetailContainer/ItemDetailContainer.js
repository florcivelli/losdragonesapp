import { useState, useEffect } from 'react'
import { getItemById } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProduct] = useState ()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getItemById(productId).then(prod =>{
            setProduct(prod)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])  

    if(loading) {
        return <h2>Cargando...</h2>
    }
   
    return (
        <ItemDetail {...products}/>
    )
}

export default ItemDetailContainer