import styles from '../styles/About.module.css'

const About = () => {
    return (
        <section className={styles.about} id='1'>
            <div className={styles.container}>
                <div className={styles.items}>
                    <p className={styles.title}>/ ABOUT</p>
                    <p className={styles.description}>ANNA IS A MEMBER OF THE <span>CHARTERED INSTITUTE</span> OF ARBITRATORS (CIARB) AND HAS BEEN RECOGNISED IN <span>INTERNATIONAL ARBITRATION</span> BY LEADING DIRECTORIES INCLUDING, <span>CHAMBERS EUROPE</span>, CHAMBERS GLOBAL.</p>
                </div>
            </div>
        </section>
    );
};
export default About ;