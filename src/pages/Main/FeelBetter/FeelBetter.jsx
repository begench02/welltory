import styles from './FeelBetter.module.css';
import CheckIcon from '@mui/icons-material/Check';

export const FeelBetter = () => {
    const content = [
        {
            text: 'Personalized research papers: see how your lifestyle affects your health and what you can do about it',
            forFree: false,
            inPro: true,
        },
        {
            text: 'Recommendations: get science-backed tips to beat insomnia, cure a hangover, support a panic attack, clear a headache, or get blood pressure under control',
            forFree: false,
            inPro: true,
        },
        {
            text: 'Personalized move goals: your heartbeat and daily steps data will steer you toward better health — effortlessly',
            forFree: false,
            inPro: true,
        },
        {
            text: 'Breathing practices: focus or unwind with scientifically-proven guided practices',
            forFree: true,
            inPro: true,
        },
        {
            text: 'Yesterday\'s move report: see if you’re doing enough to support your health',
            forFree: true,
            inPro: true,
        }
    ];

    return (
        <div className={styles.main_block}>
            <span className={styles.title}>Feel better fast</span>
            <div>
            {content.map((content) => (
                <div className={styles.content_block}>
                    <div className={styles.text}>{content.text}</div>
                    <div>{content.forFree ? <CheckIcon className={styles.check_icon}/> : <div className={styles.no_icon} >-</div> }</div>
                    <div>{content.text ? <CheckIcon className={styles.check_icon} /> : <div className={styles.no_icon} >-</div> }</div>
                </div>
            ))}
            </div>
        </div>
    );
};