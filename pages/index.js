import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import CardContainer from "../components/card/cardContainer";

export async function getStaticProps() {
  const allPostsData = {
    recipeCards: [
      {
        id: "Shakshuka",
        name: "The Best Skakshuka Recipe!",
        description: "Eggs Poached in Sweet & Spicy Tomato Sauce",
        image: "/images/shakshuka.jpg",
      },
      {
        id: "ChickenGyros",
        name: "The Most Delicious Chicken Gyros!",
        description: "Chicken Marinated in a Greek Yogurt Sauce",
        image: "/images/gyros.jpg",
      },
      {
        id: "Risotto",
        name: "Bacon and Wild Mushroom Risotto",
        description: "Crispy Bacon and Tender Mushrooms Top This To Die For Risotto",
        image: "/images/risotto.jpg",
      },
      {
        id: "ChickenDumplings",
        name: "Cozy Chicken and Dumpling Soup",
        description: "The Ultimate Comfort Food! Dumplings in a Creamy Soup",
        image: "/images/cozyChicken.jpg",
      },
    ],
  };

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headingCentered}>
          Select a recipe from below to view
        </p>
      </section>
      <section>
        <CardContainer recipeCards={allPostsData.recipeCards} />
      </section>
    </Layout>
  );
}
