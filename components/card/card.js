import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";

const handleClick = (event) => {
  console.log(event);
};

export default function Card({ id, name, description, image }) {
  return (
    <div className={styles.card}>
      <Image className="image" priority src={image} height={200} width={200} />
      <style jsx global>
        {`
          .image {
            border-radius: 50%;
          }
        `}
      </style>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>
        <Link href={`/recipes/${id}`}>
          <button onClick={handleClick}>Go to Recipe</button>
        </Link>
      </p>
    </div>
  );
}
