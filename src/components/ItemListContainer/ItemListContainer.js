import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asynmock'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])

    useEffect(() => {

            getProducts().then(items => {
                setProducts(items)
            })

        return (() => {
            setProducts([])
        })          
    }, [])

    return (
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer