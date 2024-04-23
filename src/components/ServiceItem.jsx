import styles from '../styles/ServiceItem.module.css'

const ServiceItem = ({ title, number, description}) => {
    return (
        <div className={styles.serviceitem}>
            <div className={styles.box}>
                <div classname={styles.box1}>
                    <div><p className={styles.title}>{title}</p></div>
                    <div><p classname={styles.number}>{number}</p></div>
                </div>
                <div classname={styles.box2}>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>  
        </div>
    )
}
export default ServiceItem ;