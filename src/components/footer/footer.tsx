import styles from './footer.module.css'
import { IoLogoTwitter } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTiktok } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footerMain}>
        <div className="container">
          <div className={styles.footercolumns}>
            <div className={styles.footercolumn}>
              <img src="/images/logo-white.png" alt="logo" />
              <p className={styles.footerDescription}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
            </div>
            <div className={styles.footercolumn}>
              <h3 className={styles.footerHeading}>Services</h3>
              <ul className={styles.footerDescription}>
                <li>Bonus program</li>
                <li>Gift cards</li>
                <li>Credit and payment</li>
                <li>Service contracts</li>
                <li>Non-cash account</li>
                <li>Payment</li>
              </ul>
            </div>
            <div className={styles.footercolumn}>
              <h3 className={styles.footerHeading}>Assistance to the buyer</h3>
              <ul className={styles.footerDescription}>
                <li>Find an order</li>
                <li>Terms of delivery</li>
                <li>Exchange and return of goods</li>
                <li>Guarantee</li>
                <li>Frequently asked questions</li>
                <li>Terms of use of the site</li>
              </ul>
            </div>
          </div>
          <div className={styles.socialIcons}>
          <a href="https://twitter.com/" target='_blank'>
          <IoLogoTwitter /></a>
          <a href="https://www.facebook.com/" target='_blank'>
          <GrFacebookOption /></a>
          <a href="https://www.tiktok.com/" target='_blank'>
          <IoLogoTiktok /></a>
          <a href="https://www.instagram.com/" target='_blank'>
          <AiFillInstagram /></a>
          </div>
        </div>
    </div>
  )
}
