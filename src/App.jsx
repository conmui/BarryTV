import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="App__nav">
          <ul className="App__nav-list">
            <li className="App__nav-item">
              <Link to="/">About</Link>
            </li>
            <li className="App__nav-item">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="App__nav-item">
              <Link to="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Router>
      <footer className="App__footer">
        <p className="App__footer-ref">Content from</p>
        <ul className="App__footer-list">
          <li className="App__footer-item">
            <a href="https://en.wikipedia.org/wiki/Barry_(TV_series)">
              Wikipedia
            </a>
          </li>
          <li className="App__footer-item">
            <a href="https://barry-hbo.fandom.com/wiki/Barry_Wiki">Fandom</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
