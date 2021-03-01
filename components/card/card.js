import Image from "next/image";
import styles from "./card.module.css";

export default function Card(name, description, image) {
  console.log(image);
  return (
    <div className={styles.card}>
      <Image priority src={image} height={200} width={200} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>
        <button>Go to Recipe</button>
      </p>
    </div>
  );
}
