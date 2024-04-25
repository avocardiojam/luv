import styles from '../styles/Head.module.css'
import  {MenuData} from '../data/MenuData'

const Head = () => {
    return (
        <section className={styles.head}>
            <div className={styles.container}>
                <div className={styles.items}>
                    <div className={styles.first}>
                        <img src="./image/first.svg" alt="" />
                        <p>2024</p>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.menu}>
                            <ul className={styles.menuList}>
                                {MenuData.map((el) => (
                                    <li className={styles.menuItem}>
                                        <a className={styles.menuLink} href={el.href}>{el.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.title}>
                            <p>KRISTINA SRETINSKAIA</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <div><p>/ INDEPENDENT ARBITRATOR WITH A PARTICULAR FOCUS ON COMMERCIAL, CONSTRUCTION AND CORPORATE DISPUTES /</p></div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};
export default Head;