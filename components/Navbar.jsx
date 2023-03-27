import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/images/logo.png" alt="logo" width={35} height={35} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>080 0003 3333</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HOME</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.items}>
        <div className={styles.cart}>
          <Image
            src="/images/cart.png"
            alt="cart counter"
            width={30}
            height={30}
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>

      {/* hamburger menu */}
      <div className={styles.hamburgerMenu}>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <>
              <div className={`${styles.hamburgerLine} ${styles.line1}`}></div>
              <div className={`${styles.hamburgerLine} ${styles.line2}`}></div>
              <div className={`${styles.hamburgerLine} ${styles.line3}`}></div>
            </>
          ) : (
            <>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
              <div className={styles.hamburgerLine}></div>
            </>
          )}
        </div>
        <div
          className={styles.menuItems}
          style={{ display: menuOpen ? "flex" : "none" }}
        >
          <ul className={styles.hamburgerList}>
            <li className={styles.listItem}>HOME</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
