import styles from '@/styles/Tile.module.css'
import Image from "next/image";
import Link from 'next/link';

const Tile = ({image, link}) => {

    return (
        <div className={styles.tile}>
            <Link href={"/portfolio" + link}>
            <Image src={image} alt="Project" style={{maxHeight: "260px", maxWidth: "360px"}}/>
            </Link>
        </div>
    );
}

export default Tile;