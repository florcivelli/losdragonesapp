import alfil from '../src/components/img/alfil.png'
import losdragones from '../src/components/img/losdragones.png'
import losDragonesTorrontes from '../src/components/img/losDragonesTorrontes.png'

const products = [
    { 
        id: 1, 
        title: 'Alfil', 
        price: 1200, 
        img: alfil, 
        stock: 50, 
        description:'Alfil',
        category: 'tintos'
    },
    {   id: 2, 
        title: 'Los Dragones', 
        price: 2200,  
        img: losdragones,
        stock: 70, 
        description:'Los Dragones',
        category: 'tintos'
    },
    {   id: 3, 
        title: 'Los Dragones Torrontés', 
        price: 1000, 
        img: losDragonesTorrontes,
        stock: 40, 
        description:'Los Dragones Torrontés',
        category: 'blancos'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getItemById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
} 