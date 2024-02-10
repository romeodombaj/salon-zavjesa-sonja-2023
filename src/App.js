import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navigation/Navbar";
import FrontPage from "./components/_front-page/FrontPage";
import Portfolio from "./components/_portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/:portfolioName" element={<Portfolio />} />
        <Route path="*" element={<FrontPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
