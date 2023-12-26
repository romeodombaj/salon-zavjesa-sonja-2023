import styles from "./App.module.css";
import FrontPage from "./components/front-page/FrontPage";
import Portfolio from "./components/portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
