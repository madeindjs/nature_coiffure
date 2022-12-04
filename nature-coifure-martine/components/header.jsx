import bannerBgImg from '../public/img/banner-bg.jpg';
import ExternalLinks from "./external-links";
import styles from "./header.module.css";



export function Header() {
  return <header className={styles.header} style={{ 'background-img': bannerBgImg }}>
    <div className={styles.header__wrapper}>
      {/* <Image
        alt="Mountains"
        src={bannerBgImg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      /> */}
      <h1>Nature Coiffure Martine</h1>
      <p className={styles.header__wrapper__lead}>Salon de coiffure à Lyon Croix-Rousse</p>
      <hr className={styles.divider} />
      <p className={styles.header__wrapper__phone}><a href="tel:+33478305344">04 78 30 53 44</a></p>
      <ExternalLinks />
    </div>
  </header>
}