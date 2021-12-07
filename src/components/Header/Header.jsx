// Images
import heart from '../../images/heart.png';
// Styles
import styles from './Header.module.css';

export const Header = () => {
    return (
        <div className={styles.main_block}>
            <img className={styles.image} src={heart} alt='Heart' />
            <h2>welltory</h2>
        </div>
    );
};