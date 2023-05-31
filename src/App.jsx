import React, { useState, useEffect } from 'react'
import productsService from './services/productsService';
import ProductsList from './components/ProductsList/ProductsList'
import Categories from './components/Categories/Categories'

const App = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])

    const getProducts = () => {
        productsService().then((items) => {
            setProducts(items)
            setFilteredProducts(items)
        })
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        <div>
            <Categories products={products} setFilteredProducts={setFilteredProducts} />
            <ProductsList products={filteredProducts} />
        </div>
    )
}

export default App
