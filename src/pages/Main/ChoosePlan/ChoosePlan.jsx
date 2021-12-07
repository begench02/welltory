// Styles
import styles from './ChoosePlan.module.css';

export const ChoosePlan = () => {
    return (
        <div className={styles.main_block}>
            <h2>Choose the best plan for you</h2>
            <div className={styles.title_block}>
                <div> What you get </div>
                <div> for free </div>
                <div className={styles.multicolored}> in Pro </div>
            </div>
        </div>
    );
}