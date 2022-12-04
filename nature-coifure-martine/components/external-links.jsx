import ExternalLinkNetwork from './external-link-network'
import styles from './external-links.module.css'

export default function ExternalLinks() {
  return <div className={styles.externalLinks}>
    <ExternalLinkNetwork name="Google Map" stars={4.8} url="https://goo.gl/maps/pADrxocfLWwqfCck7" />
    <ExternalLinkNetwork name="Facebook" stars={4.4} url="https://www.facebook.com/Nature-Coiffure-Martine-523934734392432/" />
  </div>
}