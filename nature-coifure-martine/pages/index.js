import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import Nav from "../components/nav";
import styles from "./index.module.css";

import Avatar from "../components/avatar";
import imgEmelyneSquare from "../public/img/emelyne_square.jpg";
import imgMartineSquare from "../public/img/martine_square.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nature Coiffure Martine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Header />

      <section className={styles.container}>
        <h2>Une équipe à votre écoute</h2>
        <p>
          Chez Nature Coiffure, nous exigeons le meilleur pour vos cheveux et votre peau. Nous prenons le temps
          d&apos;échanger avec vous sur vos envies, vos idées afin de dépasser vos attentes.
        </p>

        <Avatar img={imgMartineSquare} description="Martine, Gérante" />
        <Avatar img={imgEmelyneSquare} description="Emelyne Coiffeuse" />
      </section>

      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
