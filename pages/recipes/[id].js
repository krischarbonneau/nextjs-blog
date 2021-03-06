import Layout from "../../components/layout";
import { getAllRecipeIds, getRecipeData } from "../../lib/recipes";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.id);
  return {
    props: {
      recipeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <Head>
        <title>{recipeData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{recipeData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={recipeData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
      </article>
    </Layout>
  );
}
