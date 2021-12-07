import { Header } from './components/Header/Header';
// Styles
import styles from './App.module.css';
import { Main } from './pages/Main/Main';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className={styles.main_block}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}