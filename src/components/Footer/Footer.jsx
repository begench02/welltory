// Image
import googlePlay from '../../images/googlePlay.png';
// Icons
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// Styles
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.main_block}>
            <div className={styles.first_block}>
                <p>Get the mobile app</p>
                <AppleIcon onClick={() => window.location.href = 'https://itunes.apple.com/app/welltory-personal-nyj-analitik/id1074367771?mt=8'} className={styles.apple_icon}/>
                <img onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.welltory.client.android'} className={styles.google_play_icon} src={googlePlay} alt='Google play'/>
            </div>
            <div className={styles.second_block}>
                <p onClick={() => window.location.href = 'https://welltory.com/terms/'}> Terms of use </p> | <p onClick={() => window.location.href = 'https://welltory.com/privacy/'}> Privacy </p>
            </div>
            <div className={styles.third_block}>
                <TwitterIcon onClick={() => window.location.href = 'https://twitter.com/welltory'}/>
                <FacebookIcon onClick={() => window.location.href = 'https://www.facebook.com/welltory'}/>
                <InstagramIcon onClick={() => window.location.href = 'https://www.instagram.com/welltory/'}/>
                <LinkedInIcon onClick={() => window.location.href = 'https://www.linkedin.com/company/welltory'}/>
            </div>
        </div>
    );
}