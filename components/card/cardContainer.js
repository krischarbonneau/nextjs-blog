import Card from "./card";
import styles from "./cardContainer.module.css";

export default function CardContainer({ recipeCards }) {
  console.log(recipeCards);
  return (
    <div className={styles.card}>
      {recipeCards.map(({ key, name, description, image }) => (
        <Card name={name} description={description} image={image}></Card>
      ))}
    </div>
  );
}
