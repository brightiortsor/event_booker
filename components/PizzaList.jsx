import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        World&apos;s largest & best pizza in Nigeria! Delivering hot, fresh
        pizzas to your doorstep within 30mins and take away in all our stores in
        Abuja&apos;s largest & best pizza in Nigeria! Delivering hot, fresh
        pizzas to your doorstep within 30mins and take away in all our stores in
        Abuja.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
