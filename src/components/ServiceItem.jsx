import styles from '../styles/ServiceItem.module.css'

const ServiceItem = ({ title, number, description}) => {
    return (
        <div className={styles.serviceitem}>
            <div className={styles.box}>
                <div classname={styles.boxitem1}>
                    <p className={styles.title}>{title}</p>
                    <p classname={styles.number}>{number}</p>
                </div>
                <div classname={styles.boxitem2}>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>  
        </div>
    )
}
export default ServiceItem ;