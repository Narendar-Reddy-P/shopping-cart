import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

export default function AppNav() {
  return (
    <header className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        King's Toys &amp; Play
      </NavLink>

      <div className={styles.right}>
        {/* <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Find toys..."
            aria-label="Search toys"
          />
        </div> */}

        <NavLink to="/" className={styles.navLink} end>
          <span>Home</span>
        </NavLink>

        <NavLink to="/collections"className={styles.navLink}>
          <span>Collections</span>
        </NavLink>

        <NavLink to="/cart" className={styles.cartBtn} aria-label="Shopping cart">
          🛒
          <span className={styles.cartBadge}>2</span>
        </NavLink>
      </div>
    </header>
  );
}
