import styles from '../styles/Publications.module.css'
import { PublicationItemData } from '../data/PublicationItemData'
import PublicationItem from './PublicationItem';

const Publications = () => {
    return (
        <section className={styles.publications}>
            <div className={styles.container}>
                <div classname={styles.content}>
                    <p className={styles.main}>/ PUBLICATIONS</p>
                </div>
                <div className={styles.items}>
                    {PublicationItemData.map((el) => (
                        <PublicationItem title={el.title} description={el.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Publications ;