import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import Link from "next/link";

const name = "Kris Charbonneau";
export const siteTitle = "Cook On The Bright Side";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Always cook on the bright side of life"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/banner.png"
              height={480}
              width={1920}
              objectFit="fill"
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/banner.png"
                  height={480}
                  width={1920}
                  objectFit="fill"
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
