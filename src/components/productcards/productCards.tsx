import styles from './productCards.module.css'

export default function ProductCards() {
  return (
    <div className={styles.cardsMain}>
        <div className={styles.singleCard}>
            <img src="/images/card1.png" alt="card-images" />
            <div className={styles.content}>
                <h3 className={styles.cardTitle}>Popular Products</h3>
                <p className={styles.cardDescription}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className={styles.cardButton}>Shop Now</button>
            </div>
        </div>
        <div className={styles.singleCard}>
            <img src="/images/card2.png" alt="card-images" />
            <div className={styles.content}>
                <h3 className={styles.cardTitle}>Ipad Pro</h3>
                <p className={styles.cardDescription}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className={styles.cardButton}>Shop Now</button>
            </div>
        </div>
        <div className={styles.singleCard}>
            <img src="/images/card3.png" alt="card-images" />
            <div className={styles.content}>
                <h3 className={styles.cardTitle}>Samsung Galaxy </h3>
                <p className={styles.cardDescription}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className={styles.cardButton}>Shop Now</button>
            </div>
        </div>
        <div className={styles.singleCard}>
            <img src="/images/card4.png" alt="card-images" />
            <div className={styles.content}>
                <h3 className={styles.cardTitle}>Macbook Pro</h3>
                <p className={styles.cardDescription}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className={styles.cardButton}>Shop Now</button>
            </div>
        </div>
    </div>
  )
}