import { useState } from 'react';
import styles from './Cards.module.css';

export const Cards = () => {
    const [clickedRate, setClickedRate] = useState(1);

    return (
        <div className={styles.main_block}>
            <div className={styles.cards_block}>
                <div onClick={() => setClickedRate(1)} className={`${clickedRate === 1 ? styles.linear_border : ''} ${styles.card_one}`}>
                    <div className={styles.card_one_discount_angle}></div>
                    <div className={styles.card_one_discount_block}>– 15%</div>
                    <div className={styles.card_one_card_content}>
                        <h2>Monthy</h2>
                        <p>$ 5.99</p>
                    </div>
                    <p className={styles.card_one_old_price}><del>$ 7.99</del></p>
                    <div className={`${clickedRate === 1 ? styles.text_color_white : ''} ${styles.card_one_additional_info}`}>Billed every month</div>
                </div>
                
                
            <div onClick={() => setClickedRate(2)} className={`${clickedRate === 2 ? styles.linear_border : ''} ${styles.card_one}`}>
                <div className={styles.card_two_discount_angle}></div>
                <div className={styles.card_two_discount_block}>– 25%</div>
                <div className={styles.card_two_card_content}>
                    <h2>Annual</h2>
                    <p>$ 4.59</p>
                </div>
                    <p className={styles.card_two_old_price}> <del> $ 7.99 </del> </p>
                    <div className={`${clickedRate === 2 ? styles.text_color_white : ''} ${styles.card_two_additional_info}`}> $79 billed once a year </div>
                </div>
            </div>
                
        </div>
    );
}

// -webkit-border-image: -webkit-gradient(linear, left top, left bottom, from(#00abeb),