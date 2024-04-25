import styles from '../styles/Head.module.css'
import  {MenuData} from '../data/MenuData'

const Head = () => {
    return (
        <section className={styles.head}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <ul className={styles.menuList}>
                        {MenuData.map((el) => (
                            <li className={styles.menuItem}>
                                <a className={styles.menuLink} href={el.href}>{el.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        
    );
};
export default Head;