import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { pizzadata } from "../../data";

const pizza = {
  id: 1,
  img: "/images/pizza.webp",
  name: "CAMPAGNOLA",
  price: [3500, 5000, 7500],
  desc: "Campagnola is a classic Italian pizza with a tomato sauce, mozzarella, and fresh basil. It is a simple pizza that is perfect for those who like a simple, yet delicious pizza.",
};

const Product = () => {
  const [size, setSize] = useState(0);
  const [ingredients, setIngredients] = useState([]);

  const handleIngredients = (event) => {
    const ingredient = event.target.name;
    if (event.target.checked) {
      setIngredients([...ingredients, ingredient]);
    } else {
      setIngredients(ingredients.filter((i) => i !== ingredient));
    }
  };

  useEffect(() => {
    const extraIngredientsPrice = ingredients.length * 1000;
    const newPrice = pizza.price[size] + extraIngredientsPrice;
    setPizzaPrice(newPrice);
  }, [ingredients, size]);

  const [pizzaPrice, setPizzaPrice] = useState(pizza.price[size]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            width={400}
            height={400}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>
          <span>$</span>
          {pizzaPrice}
        </span>
        <p className={styles.desc}>{pizza.desc}</p>

        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/images/size.png" fill alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/images/size.png" fill alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/images/size.png" fill alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
              onChange={handleIngredients}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
              onChange={handleIngredients}
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
              onChange={handleIngredients}
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
              onChange={handleIngredients}
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
