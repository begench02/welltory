import styles from './Button.module.css';

export const Button = () => {
    return (
        <div className={styles.main_block}>
            <button className={styles.button}>continue</button>
            <p className={styles.text}>No commitments. Cancel anytime</p>
        </div>
    );
};