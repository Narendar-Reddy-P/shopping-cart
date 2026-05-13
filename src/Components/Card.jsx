import styles from "./Card.module.css";

/**
 * Card – reusable product card component.
 *
 * Props:
 *  - image      {string}   Product image URL
 *  - name       {string}   Product name
 *  - description{string}   Short product description
 *  - price      {number}   Product price (numbers only, e.g. 20)
 *  - onAddToCart{function} Optional click handler for the price pill
 */
export default function Card({ image, name, description, price, onAddToCart }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
        <div className={styles.price}>$ {price}</div>
          <button
          className={styles.button}
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart – $${price}`}
          >
          Add to Cart
         </button>
          </div>
      </div>
    </article>
  );
}
