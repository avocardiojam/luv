import styles from '../styles/Services.module.css'
import { ServiceItemData } from '../data/ServiceItemData'
import ServiceItem from './ServiceItem';

const Services = () => {
    return (
        <section className={styles.services} id='2'>
            <div className={styles.container}>
                <div classname={styles.content}>
                    <p className={styles.main}>/ SERVICES</p>
                </div>
                <div className={styles.items}>
                    {ServiceItemData.map((el) => (
                        <ServiceItem title={el.title} number={el.number} description={el.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Services ;