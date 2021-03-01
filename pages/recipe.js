import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import CardContainer from "../components/card/cardContainer";

export async function getStaticProps() {
  const allPostsData = {
    recipeCards: [
      {
        key: "Shakshuka",
        name: "The Best Skakshuka recipe!",
        description: "Placeholder text",
        image: "/public/images/shakshuka.jpg",
      },
    ],
  };

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Recipes({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Select a recipe from below to view</p>
      </section>
      <section>
        <CardContainer recipeCards={allPostsData.recipeCards} />
      </section>
    </Layout>
  );
}
