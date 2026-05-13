import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import Footer from "../Components/Footer";
import {
  woodenToys,
  vehicles,
  plushies,
  educationalToys,
} from "../Helpers/toyloader";

const categories = [
  { emoji: "🚗", name: "Vehicles", count: `${woodenToys.length} products` },
  { emoji: "🧸", name: "Plushies", count: `${plushies.length}` },
  { emoji: "🏅", name: "Educational", count: `${vehicles.length}` },
  { emoji: "🧱", name: "Wooden Toys", count: `${educationalToys.length}` },
];

const whyUs = [
  {
    icon: "🚀",
    title: "Fast Shipping",
    desc: "Free delivery on orders over $50. Ships within 1–2 business days.",
  },
  {
    icon: "🛡️",
    title: "Safe & Tested",
    desc: "All toys meet ASTM & CE safety standards for peace of mind.",
  },
  {
    icon: "🌿",
    title: "Eco-Friendly",
    desc: "Sustainably sourced materials in every product we carry.",
  },
  {
    icon: "💝",
    title: "Joy Guaranteed",
    desc: "30-day hassle-free returns if your little one isn't delighted.",
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img
          className={styles.heroBg}
          src="/hero-bg.png"
          alt="Children playing with colourful wooden blocks"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroCard}>
          <h1 className={styles.heroTitle}>Playtime Awaits!</h1>
          <p className={styles.heroSubtitle}>
            Discover a world of wonder with our hand-picked selection of
            high-quality, joy-sparking toys for all ages.
          </p>
          <NavLink to="/collections" className={styles.shopBtn}>
            Shop Now <i className={styles.btnArrow}>→</i>
          </NavLink>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shop by Category</h2>
        <p className={styles.sectionSubtitle}>
          Find the perfect toy for every age and interest.
        </p>
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <NavLink
              key={cat.name}
              to="/collections"
              className={styles.categoryCard}
            >
              <div className={styles.categoryImg}>{cat.emoji}</div>
              <div className={styles.categoryBody}>
                <p className={styles.categoryName}>{cat.name}</p>
                <p className={styles.categoryCount}>{cat.count}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* ── Why Us ── */}
      <div className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          {whyUs.map((item) => (
            <div key={item.title} className={styles.whyCard}>
              <div className={styles.whyIcon}>{item.icon}</div>
              <p className={styles.whyTitle}>{item.title}</p>
              <p className={styles.whyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.grow} />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
