import styles from '../styles/ServiceItem.module.css'

const ServiceItem = ({ title, number, description}) => {
    return (
        <div className={styles.serviceitem}>
            <div className={styles.box}>
                <div className={styles.boxinfo}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.number}>{number}</p>
                </div>
                <p className={styles.description}>{description}</p>
            </div>  
        </div>
    )
}
export default ServiceItem ;