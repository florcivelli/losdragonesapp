import { getProducts } from "../../asynmock"
import { useState , useEffect } from 'react'
import React from 'react'

const ItemList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    },[]) 

    return (
        <ul>
            {products.map(product =><li key= {product.id}>{product.title}</li>)}
        </ul>
    )
}    

export default ItemList