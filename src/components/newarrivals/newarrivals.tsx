import styles from './newarrivals.module.css'
import { CiHeart } from "react-icons/ci";


export default function NewArrivals() {
  return (
    <div className={styles.arrivalsMain}>
        <div className="container">
            <div className={styles.navigations}>
                <ul>
                    <li className={styles.active}>new arrival</li>
                    <li>best seller</li>
                    <li>featured products</li>
                </ul>
            </div>
            <div className={styles.productsMain}>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product1.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Apple iPhone 14 Pro Max 128GB Deep Purple </h5>
                    <h3 className={styles.price}>$900</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product2.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Blackmagic Pocket Cinema Camera 6k</h5>
                    <h3 className={styles.price}>$2535</h3>
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
                        <img src="/images/product5.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Samsung Galaxy Watch6 Classic 47mm Black</h5>
                    <h3 className={styles.price}>$369</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product6.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</h5>
                    <h3 className={styles.price}>$1799</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product7.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Galaxy Buds FE <br />
                    Graphite</h5>
                    <h3 className={styles.price}>$99.99</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                <div className={styles.productSingle}>
                <CiHeart />
                    <div className={styles.productImage}>
                        <img src="/images/product8.png" alt="products-img" />
                    </div>
                    <h5 className={styles.title}>Apple iPad 9 10.2&quot; 64GB Wi-Fi Silver (MK2L3) 2021</h5>
                    <h3 className={styles.price}>$398</h3>
                    <button className={styles.button}>Buy Now</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

