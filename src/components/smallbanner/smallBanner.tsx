import styles from './smallBanner.module.css'

export default function SmallBanner() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.smallDivs}>
            <div className={styles.singleContainer}>
                <div className={styles.image}>
                    <img src="/images/playstation.png" alt="product-image" />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.productTitle}><span>Playstation 5</span></h4>
                    <p className={styles.productDescription}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                </div>
            </div>
            <div className={styles.singleContainer}>
                <div className={styles.image}>
                    <img src="/images/airpods.png" alt="product-image" />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.productTitle}>Apple AirPods <span>Max</span></h4>
                    <p className={styles.productDescription}>Computational audio. Listen, it&apos;s powerful</p>
                </div>
            </div>
            <div className={styles.singleContainer}>
                <div className={styles.image}>
                    <img src="/images/vision.png" alt="product-image" />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.productTitle}>Apple Vision <span>Pro</span></h4>
                    <p className={styles.productDescription}>An immersive way to experience entertainment</p>
                </div>
            </div>
        </div>
        <div className={styles.smallDivs}>
        <div className={`${styles.singleContainer} ${styles.lastContainer}`}>
                <div className={styles.content}>
                    <h4 className={styles.productTitle}>Macbook <span>Air</span></h4>
                    <p className={styles.productDescription}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <button className="shopNow-black">Shop Now</button>
                </div>
                <div className={styles.image}>
                    <img src="/images/macbook.png" alt="product-image" />
                </div>
            </div>
        </div>
    </div>
  )
}
