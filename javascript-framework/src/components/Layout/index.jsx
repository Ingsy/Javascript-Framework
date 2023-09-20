import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout({ onSearch }) {
  return (
    <div className={styles.layout}>
      <Header onSearch={onSearch} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
