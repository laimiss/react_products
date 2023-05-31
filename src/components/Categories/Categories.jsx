import { useEffect, useState } from 'react'
import style from './Categories.module.css'

function Category(props) {
    const products = props.products
    const setFilteredProducts = props.setFilteredProducts

    const [categories, setCategories] = useState(['all'])
    const [current, setCurrent] = useState('all')

    function getCategories(products) {
        // https://javascript.plainenglish.io/how-to-get-unique-values-from-an-array-a9896a4c0c4
        const uniqueCategories = ['all', ...new Set(products.map((product) => product.category))]
        console.log("Categories:", uniqueCategories)
        setCategories(uniqueCategories)
    }

    function onClick(category) {
        setFilteredProducts(products.filter(product => {
            if (category === 'all') {
                setCurrent('all')
                return product
            }
            if (product.category === category) {
                setCurrent(category)
                return product
            }
            else return false
        }))
    }

    useEffect(() => {
        getCategories(products)
    }, [products])



    return (
        <div className={style.categories}>
            <strong>Filter:</strong>
            {
                categories.map((category) => (
                    <button key={category} className={current === category ? style.current : ""} onClick={() => onClick(category)}>{category}</button>
                ))
            }
        </div>
    )
}

export default Category