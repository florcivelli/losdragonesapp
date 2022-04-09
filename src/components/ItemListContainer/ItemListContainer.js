import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory} from '../../asynmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        if(categoryId) {
            getProductsByCategory(categoryId).then(items => {
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

        }

        return (() => {
            setProducts([])
        })          
    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer