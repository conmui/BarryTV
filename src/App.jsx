import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
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
      <footer>
        <p>Content from</p>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Barry_(TV_series)">
              Wikipedia
            </a>
          </li>
          <li>
            <a href="https://barry-hbo.fandom.com/wiki/Barry_Wiki">Fandom</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
