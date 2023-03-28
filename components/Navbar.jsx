import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const handleSetActive = (item) => {
    setActive(item);
  };

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
          <li
            className={`${styles.listItem} ${
              active === "Home" ? styles.active : ""
            }`}
            onClick={() => handleSetActive("Home")}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            className={`${styles.listItem} ${
              active === "Products" ? styles.active : ""
            }`}
            onClick={() => handleSetActive("Products")}
          >
            <Link href="/">Products</Link>
          </li>
          <li
            className={`${styles.listItem} ${
              active === "Menu" ? styles.active : ""
            }`}
            onClick={() => handleSetActive("Menu")}
          >
            <Link href="/">Menu</Link>
          </li>

          <li
            className={`${styles.listItem} ${
              active === "Blog" ? styles.active : ""
            }`}
            onClick={() => handleSetActive("Blog")}
          >
            <Link href="/">Blog</Link>
          </li>
          <li
            className={`${styles.listItem} ${
              active === "Contact" ? styles.active : ""
            }`}
            onClick={() => handleSetActive("Contact")}
          >
            <Link href="/">Contact</Link>
          </li>
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
              <div className={styles.close}>
                <FaTimes size={30} />
              </div>
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
            <li
              className={`${styles.listItem} ${
                active === "Home" ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Home")}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              className={`${styles.listItem} ${
                active === "Products" ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Products")}
            >
              <Link href="/">Products</Link>
            </li>
            <li
              className={`${styles.listItem} ${
                active === "Menu" ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Menu")}
            >
              <Link href="/">Menu</Link>
            </li>
            <li
              className={`${styles.listItem} ${
                active === "Blog" ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Blog")}
            >
              <Link href="/">Blog</Link>
            </li>
            <li
              className={`${styles.listItem} ${
                active === "Contact" ? styles.active : ""
              }`}
              onClick={() => handleSetActive("Contact")}
            >
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
