import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Sharrock | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.nav}>

          <Sidebar />
        </div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title} id="about">About</h1>
           
          </div>
        </div>
      </main>
    </>
  );
}
