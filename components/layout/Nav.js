import Link from 'next/link';
import styles from './nav.module.scss';
import ReactDOM from 'react-dom';
import { FaSearch, FaArrowRight, FaTh, FaBars, FaTimes } from 'react-icons/fa';

export default function nav() {
  return (
    <div class={`${styles.container} ${styles['navbar__container']}`}>
      <nav class={`${styles.navbar__flex} `}>
        <div class={styles.navbar__left}>
          <span class={styles.navbar__hamburger}></span>
        </div>
        <div class={styles.navbar__right}>
          <label for='navbarToggler' class={styles.navbar__toggler__label}>
            <span class={styles.navbar__hamberger}></span>
            <span>Menu</span>
          </label>
          <input
            type='checkbox'
            name=''
            class={styles.navbar__toggler__input}
            id='navbarToggler'
          />
          <ul class={styles.navbar__links}>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/shop'>Shop</Link>
            </li>
            <li>
              <Link href='#'>Categories</Link>
              <ul class={styles.navbar__sublinks}>
                <li>
                  <Link href='/shop/hats'>Hats</Link>
                </li>
                <li>
                  <Link href='/shop/jackets'>Jackets</Link>
                </li>
                <li>
                  <Link href='/shop/sneakers'>Sneakers</Link>
                </li>
                <li>
                  <a href='/shop/womens'>Women's</a>
                </li>
                <li>
                  <Link href='/shop/mens'>Men's</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
