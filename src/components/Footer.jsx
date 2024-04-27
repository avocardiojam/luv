import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
      <footer id='5'>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.footersectionone}>
                <p className={styles.text}>COLLABORATE WITH US AND START YOUR JOURNEY</p>
                </div>
                <div className={styles.footersection}>
                    <p>/ NAVIGATE</p>
                    <ul>
                        <li>
                            <a className={styles.item} href="#">Services</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Publications</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Education</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footersection}>
                    <p>/ SOCIAL</p>
                    <ul>
                        <li>
                            <a className={styles.item} href="#">Linkedin</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Telegram</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Facebook</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footersection}>
                    <p>/ OFFICIAL</p>
                    <ul>
                        <li>
                            <a className={styles.item} href="#">Privacy</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Terms</a>
                        </li>
                        <li>
                            <a className={styles.item} href="#">Accessibility</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;