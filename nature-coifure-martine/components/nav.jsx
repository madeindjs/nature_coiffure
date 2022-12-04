
import styles from "./nav.module.css";
export default function Nav() {
  return <nav className={styles.nav}>
    <a className={styles.nav__brand} href="#">Nature Coiffure Martine</a>
    <ul className={styles.nav__links}>
      <li class="nav-item">
        <a class="nav-link" href="#opening-hours">Horaires</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#pricing">Tarifs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#products">Produits</a>
      </li>
    </ul>
  </nav>
}