import Image from "next/image";
import styles from './avatar.module.css';

export default function Avatar(props) {
  return (
    <figure>
      <Image
        alt={props.description}
        src={props.img}
        quality={100}
        width={330}
        height={330}
        className={styles.image}
      />
      <figcaption>{props.description}</figcaption>
    </figure>
  );
}
