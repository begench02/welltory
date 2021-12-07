// Components
import { Cards } from './Cards/Cards';
import { Button } from './Button/Button';
import { ChoosePlan } from './ChoosePlan/ChoosePlan';
import { FeelBetter } from './FeelBetter/FeelBetter';
// Images
import logo from '../../images/logo.png';
// Styles
import styles from './Main.module.css';
import { GainRich } from './GainRich/GainRich';
import { UpdateRate } from './UpdateRate/UpdateRate';

export const Main = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.logo_block}> <img className={styles.logo} src={logo} alt='Logo'/> </div>
            <h1>Take better care of yourself every day</h1>
            <Cards />
            <Button />
            <ChoosePlan />
            <FeelBetter />
            <GainRich />
            <UpdateRate />
        </div>
    );
}