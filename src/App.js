import styles from "./App.module.css";
import FrontPage from "./components/front-page/FrontPage";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <FrontPage />
    </div>
  );
}

export default App;
