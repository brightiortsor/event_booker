import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/images/pizza.webp" alt="" width="500" height="500" />
      <h1 className={styles.title}>Cheeseburger Pizza</h1>
      <span className={styles.price}>N4,500</span>
      <p className={styles.desc}>
        Beef, tomatoes, red onions, cheddar, mozzarella, tomato sauce,
        mayonnaise, ketchup, peri peri
      </p>
    </div>
  );
};

export default PizzaCard;
