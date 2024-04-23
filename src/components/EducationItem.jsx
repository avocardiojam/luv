import styles from '../styles/EducationItem.module.css'

const EducationItem = ({ title, year, degree}) => {
    return (
        <div className={styles.serviceitem}>
            <div className={styles.box}>
                <div className={styles.boxinfo}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.year}>{year}</p>
                </div>
                <div>
                    <p className={styles.degree}>{degree}</p>
                </div>
            </div>  
        </div>
    )
}
export default EducationItem ;