import Product from '../Product/Product'
import styles from './ProductsList.module.css'

function Products_list(props) {
    console.log("Products:", props.products)
    return (
        <div className={styles.products_list}>
            {
                // https://react.dev/learn/rendering-lists#why-does-react-need-keys
                // https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
                props.products.map((product) => (
                    <Product key={product.id} category={product.category} image={product.image} title={product.title} price={product.price} />
                ))
            }
        </div>
    )
}

export default Products_list