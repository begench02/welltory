import styles from './GainRich.module.css';
import CheckIcon from '@mui/icons-material/Check';

export const GainRich = () => {
    const content = [
        {
            text: 'Detailed heartbeat analytics: access stress, energy, and focus scores, metrics and charts — check in on how your body is doing and spot any changes',
            forFree: false,
            forPro: true
        },
        {
            text: 'In-depth blood pressure analysis: enter your numbers, and we’ll provide five extra indexes, give detailed interpretations, and alert you if something doesn’t look right',
            forFree: false,
            forPro: true
        },
        {
            text: 'Blood pressure reports: send your data to your doctor or print out neat reports with all of your readings',
            forFree: false,
            forPro: true
        },
        {
            text: 'Basic heartbeat analytics: just your stress, energy, and focus scores — no extra metrics',
            forFree: true,
            forPro: true
        },
        {
            text: 'Basic blood pressure analysis: we’ll interpret your top and bottom numbers — without extra indexes',
            forFree: true,
            forPro: true
        },
        {
            text: 'Yesterday’s heart report sent to your feed daily: note the relationship between your activities and any changes to your heart rate',
            forFree: true,
            forPro: true
        }
    ];

    return (
        <div className={styles.main_block}>
            <span className={styles.title}>Gain rich health insights</span>
            {content.map((content) => (
                <div className={styles.content_block}>
                    <div className={styles.text}>{content.text}</div>
                    <div>{content.forFree ? <CheckIcon className={styles.check_icon}/> : <div className={styles.no_icon} > - </div> }</div>
                    <div>{content.text ? <CheckIcon className={styles.check_icon}/> :  <div className={styles.no_icon} > - </div> }</div>
                </div>
            ))}
        </div>
    );
}