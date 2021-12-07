import styles from './UpdateRate.module.css';

export const UpdateRate = () => {
    return (
        <div className={styles.main_block}>
            <button className={styles.free_version}>go with the free version</button>
            <button className={styles.update}>upgrade now</button>
        </div>
    );
}