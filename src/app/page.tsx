import Footer from "./components/page";
import Header from "./components/Header";
import styles from "./Home/styles.module.css";


export default function Main() {
  return (
    <>
      <div className={styles.homeBackground}>
        <Header />
      </div>
      <Footer />
    </>
  );
}
