import styles from './discountedProducts.module.css'
import { CiHeart } from "react-icons/ci";

export default function DiscountedProducts() {
  return (
    <div className={styles.mainDiscounts}>
        <div className="container">
            <h2 className={styles.discounts}>Discounts up to -50%</h2>
        <div className={styles.productsMain}>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product9.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Apple iPhone 14 Pro 512GB Gold (MQ233)</h5>
                    <h3 className={styles.price}>$1437</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product4.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>AirPods Max Silver
                    Starlight Aluminium </h5>
                    <h3 className={styles.price}>$549</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product3.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Apple Watch Series 9 GPS 41mm Starlight Aluminium </h5>
                    <h3 className={styles.price}>$399</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product10.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Apple iPhone 14 Pro 1TB Gold (MQ2V3)</h5>
                    <h3 className={styles.price}>$1499</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
        </div>
        </div>
    </div>
  )
}

