import styles from './categoriesicons.module.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function CategoriesIcons() {
  return (
    <div className={styles.mainContainer}>
        <div className="container">
            <div className={styles.subDivs}>
                <h3 className={styles.browsingHeading}>Browse By Category</h3>
                <div className={styles.navigation}>
                    <FaAngleLeft />
                    <FaAngleRight />
                </div>
            </div>
            <div className={styles.subDivs}>
                <div className={styles.singleCategory}>
                    <img src="/images/Phones.png" alt="phone" />
                    <h4>Phones</h4>
                </div>
                <div className={styles.singleCategory}>
                    <img src="/images/SmartWatches.png" alt="watch" />
                    <h4>Smart Watches</h4>
                </div>
                <div className={styles.singleCategory}>
                    <img src="/images/Cameras.png" alt="camera" />
                    <h4>Cameras</h4>
                </div>
                <div className={styles.singleCategory}>
                    <img src="/images/Headphones.png" alt="headphones" />
                    <h4>Headphones</h4>
                </div>
                <div className={styles.singleCategory}>
                    <img src="/images/Computers.png" alt="computer" />
                    <h4>Computers</h4>
                </div>
                <div className={styles.singleCategory}>
                    <img src="/images/Gaming.png" alt="games" />
                    <h4>Gaming</h4>
                </div>
            </div>
        </div>
    </div>
  )
}