import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";
import styles from './header.module.css'



export default function Header() {
  return (
    <div className="container">
        <div className={styles.headerMain}>
        <div className={styles.image}>
            <img src="/images/Logo.png" alt="logo" />
        </div>
        <div className={styles.search}>
            <form action="../">
                < GoSearch className={styles.searchicon} />
                <input type="search" name="search" placeholder="Search" />
            </form>
        </div>
        <div className={styles.nav}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Blog</li>
            </ul>
            <div className={styles.mobile}>
            <FaBars />
            </div>
        </div>
        <div className={styles.icons}>
            <IoMdHeartEmpty />
            <PiShoppingCartLight />
            <FiUser />
        </div>
        </div>
    </div>
  );
}
