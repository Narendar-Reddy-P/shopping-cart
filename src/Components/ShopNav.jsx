import { NavLink } from "react-router-dom";
import styles from "./ShopNav.module.css";

export default function ShopNav() {
  return (
    <nav className={styles.shopNav}>
      <NavLink to="vehicles" className={styles.navLink} end>
        <span>Vehicles</span>
      </NavLink>
      <NavLink to="plushies" className={styles.navLink} end>
        <span>Plushies</span>
      </NavLink>
      <NavLink to="learning-toys" className={styles.navLink} end>
        <span>learning</span>
      </NavLink>
      <NavLink to="wooden-toys" className={styles.navLink} end>
        <span>Wooden Toys</span>
      </NavLink>
    </nav>
  );
}
