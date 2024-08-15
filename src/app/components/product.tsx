import styles from '../styles/product.module.css'

    const products = [
        { name: 'Velvet Cushion', price: '$39.00', img: '../../../images/download (6).jfif' },
        { name: 'Wooden Camera', price: '$49.00', img: '../../../images/Wooden Camera7.jfif' },
        { name: 'Wooden Camera', price: '$59.00', img: '../../../images/print8.jfif' },
        { name: 'Wooden Camera', price: '$69.00', img: '../../../images/drees9.jfif' },
        { name: 'Wooden Camera', price: '$79.00', img: '../../../images/Bamboo Clothes 10.jfif' },
        { name: 'Wooden Camera', price: '$89.00', img: '../../../images/Candle 11.jfif' },
        { name: 'Wooden Camera', price: '$89.00', img: '../../../images/Gallery Wall 13.jfif' },
        { name: 'Wooden Camera', price: '$89.00', img: '../../../images/Young Boy 12.jfif' },
    ];

    const Product = () => {
        return (
          <section className={styles.productSection}>
            {products.map((product) => (
              <div key={product.name} className={styles.product}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </section>
        );
      }

export default Product;