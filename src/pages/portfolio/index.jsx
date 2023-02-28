import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Tile from "@/components/Tile";
import Image from "next/image";
import { GamesWorkedOn, Nationwide, NorthernLights, TheSaucyFishCo } from "@/media";

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
              {/* <Image src={GamesWorkedOn} alt="Games Worked On" width={"100%"} height={"100%"} title="Game Thumbnails" className={styles.image}/> */}
              <Tile className={styles.div1} image={Nationwide} link={"/nationwide"}/>
              <Tile className={styles.div2} image={NorthernLights} link={"/northern-lights"}/>
              <Tile className={styles.div3} image={TheSaucyFishCo} link={"/the-saucy-fish-co"}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default portfolio;
