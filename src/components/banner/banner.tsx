import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className="container">
          <div className={styles.flexDiv}>
            <div className={styles.subDivs}>
                    <h3 className={styles.tagline}>Pro.Beyond.</h3>
                    <h1 className={styles.title}>IPhone 14 <span>Pro</span></h1>
                    <h5 className={styles.subtitle}>Created to change everything for the better. For everyone</h5>
                    <button className="shopNow">Shop Now</button>
            </div>
            <div className={styles.subDivs}>
                    <img src="/images/banner-Iphone.png" alt="Iphone" />
            </div>
          </div>
        </div>
    </div>
  )
}
