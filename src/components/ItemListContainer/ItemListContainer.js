import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'


 
const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer