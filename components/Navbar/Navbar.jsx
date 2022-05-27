/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <div className={styles.menu}>
      <div className={styles.menu__wrapper}>
        <a href="#brand">
          <img
            src="https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a4ae4ecdfb2_CoffeeStyle%20Logo.png"
            alt="coffee-style-logo"
            width={112}
          />
        </a>
        <nav>
          <a href="#">
            <div className="menu-item">Home</div>
          </a>
          <a href="#">
            <div className="menu-item">Our Products</div>
          </a>
          <a href="#">
            <div className="menu-item">Blog</div>
          </a>
          <a href="#">
            <div className="menu-item">About</div>
          </a>
          <a href="#">
            <div className="menu-item">Contact</div>
          </a>
        </nav>
        <div className={styles.nav_cart_component}>
          <span>
            <img src="/img/cart-icon.png" alt="cart-icon" />
            <p className="label">CART</p>
            <div className={`${styles.cart_count} 'menu-item'`}>
              <p>0</p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
