import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { GamesWorkedOn } from "@/media";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Northern Lights</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <Sidebar />
          <div className={styles.content}>
          <Image src={GamesWorkedOn} alt="Games" className={styles.image}/>
            <h2>Northern Lights</h2>
            <p>During my time at Northern Lights Gaming I came to grasps with how they worked, coming into their ways of doing digital marketing. While I was tasked with doing conventional digital marketing such as managing their social media and maintaining the website, I completed large “marketing packs” ; these were multi-stage, large zip files that included assets, banners, video content, translations, descriptions and more. This is what I spent most of my time doing during my role, in which I exercised my photoshop and video editing skills to a new level.</p>
            <p>Another responsibility I had was to update elements on the website that were outdated or just unoptimised. I improved navigation on the website, updated old information and set out a whole new design to be implemented. Additionally the company had a games portal for clients they wished to show off their latest games which I completely revamped and brought up to modern standards.</p>
            <p>Using content from the marketing packs we would usually go on to make social media posts, featuring posters, trailers and more from our upcoming games. We experimented with using Twitter however we found that LinkedIn is where we received the best results and continued to use that as our main platform for engagement with customers and clients.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default portfolio;