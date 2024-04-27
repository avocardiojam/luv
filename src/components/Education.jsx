import styles from '../styles/Education.module.css'
import { EducationItemData } from '../data/EducationItemData'
import EducationItem from './EducationItem';

const Education = () => {
    return (
        <section className={styles.education} id='4'>
            <div className={styles.container}>
                <div classname={styles.content}>
                    <p className={styles.main}>/ EDUCATION</p>
                </div>
                <div className={styles.items}>
                    {EducationItemData.map((el) => (
                        <EducationItem title={el.title} year={el.year} degree={el.degree}/>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Education ;