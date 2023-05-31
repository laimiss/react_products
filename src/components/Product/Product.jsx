import style from './Product.module.css'

function Product(props) {
    return (
        <div className={style.productCard}>
            <h4>{props.title}</h4>
            <img className={style.picture} src={props.image} alt={props.title} />
            <p className={style.price}>{props.price}</p>
            <p className={style.category}>{props.category}</p>
        </div>
    )
}

export default Product