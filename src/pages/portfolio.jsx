import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Tile from "@/components/Tile";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Adam Sharrock | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
            <div className={styles.tiles}>
              <Tile className={styles.div1}/>
              <Tile className={styles.div2}/>
              <Tile className={styles.div3}/>
              <Tile className={styles.div4}/>
              <Tile className={styles.div5}/>
              <Tile className={styles.div6}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default portfolio;
