import styles from "./external-link-network.module.css"
/**
 *
 * @param {{name: string, url: string, stars: number}} props
 * @returns
 */
export default function ExternalLinkNetwork(props) {
  return <a
    href={props.url}
    className={styles.externalLinkNetwork}
  >
    <span className={styles.externalLinkNetwork__name}>{props.name}</span>
    <br />
    <span className={styles.externalLinkNetwork__rating}>
      {'⭐'.repeat(Math.round(props.stars))}
      {props.stars}/5</span>
  </a>
}