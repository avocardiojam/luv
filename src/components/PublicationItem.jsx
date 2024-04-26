import styles from '../styles/PublicationItem.module.css'

const PublicationItem = ({ title, description}) => {
    return (
        <div className={styles.publicationitem}>
            <div className={styles.box}>
                <div>
                    <p>{title}</p>
                </div>
                <div>
                    <p>{description}</p>
                    <img src="./image/arrow.svg" alt="" />
                </div>
            </div>  
        </div>
    )
}
export default PublicationItem ;