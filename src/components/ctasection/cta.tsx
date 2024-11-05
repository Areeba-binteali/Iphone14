import styles from './cta.module.css'

export default function CTASection() {
  return (
    <div className={styles.mainCTA}>
        <div className="container">
            <h3 className={styles.ctaTitle}>Big Summer <strong>Sale</strong></h3>
            <p className={styles.ctaDescription}>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
            <button className={styles.ctaButton}>Shop Now</button>
        </div>
    </div>
  )
}

