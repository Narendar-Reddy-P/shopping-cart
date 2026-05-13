import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Shop All", to: "/collections" },
  { label: "Wooden Toys", to: "/collections" },
  { label: "Puzzles", to: "/collections" },
  { label: "Plushies", to: "/collections" },
  { label: "Shipping & Returns", to: "/" },
  { label: "Contact Us", to: "/" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <span className={styles.brandName}>King's Toys &amp; Play</span>
        <span className={styles.copyright}>
          © 2026 King's Toys &amp; Play. All rights reserved.
        </span>
      </div>

      <nav className={styles.links}>
        {footerLinks.map((link) => (
          <NavLink key={link.label} to={link.to} className={styles.link}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}
