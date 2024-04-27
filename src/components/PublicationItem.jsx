import styles from '../styles/PublicationItem.module.css'

const PublicationItem = ({ title, description}) => {
    return (
        <div className={styles.publicationitem}>
            <div className={styles.box}>
                <div>
                    <p className={styles.title}>{title}</p>
                </div>
                <div className={styles.boxitem2}>
                    <p className={styles.description}>{description}</p>
                    <img src="./image/arrow45.svg" alt="" />
                </div>
            </div>  
        </div>
    )
}
export default PublicationItem ;