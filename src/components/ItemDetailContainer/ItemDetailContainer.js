import { useState, useEffect } from 'react'
import { getItemById } from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState ()

    useEffect(() => {
        getItemById(1).then(prod =>{
            setProduct(prod)
        })
    }, [])  
   
    return (
        <ItemDetail {...product}/>
    )
}

export default ItemDetailContainer