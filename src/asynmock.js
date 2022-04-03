import alfil from '../src/components/img/alfil.png'
import losdragones from '../src/components/img/losdragones.png'
import maida from '../src/components/img/maida.png'

const products = [
    { 
        id: 1, 
        title: 'Alfil', 
        price: 1200, 
        img: alfil, 
        stock: 50, 
        description:'Alfil'
    },
    {   id: 2, 
        title: 'Los Dragones', 
        price: 2200,  
        img: losdragones,
        stock: 70, 
        description:'Los Dragones'
    },
    {   id: 3, 
        title: 'Maida', 
        price: 1000, 
        img: maida,
        stock: 40, 
        description:'Maida'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
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