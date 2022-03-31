import alfil from '../src/components/img/alfil.png'
import losdragones from '../src/components/img/losdragones.png'
import maida from '../src/components/img/maida.png'

const products = [
    { 
        id: 1, 
        title: 'Alfil', 
        price: 1200, 
        img: {alfil}, 
        stock: 50, 
        description:'Descripcion de Alfil'
    },
    {   id: 2, 
        title: 'Los Dragones', 
        price: 2200,  
        img: {losdragones},
        stock: 70, 
        description:'Descripcion de Los Dragones'
    },
    {   id: 3, 
        title: 'Maida', 
        price: 1000, 
        img: {maida},
        stock: 40, 
        description:'Descripcion de Maida'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}