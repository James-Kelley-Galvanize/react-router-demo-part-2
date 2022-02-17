import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Word from "./components/Word";
import Main from "./components/Main";
import { useState } from "react";

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function App() {
  let [wordData, setWordData] = useState(false);
  let [searchTerm, setSearchTerm] = useState(``);
  const navigate = useNavigate();

  function handleSearchSubmit(event) {
    event.preventDefault();
    fetchWord(searchTerm);
    navigate(`/${searchTerm}`);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }
  function fetchWord(word) {
    fetch(`${url}${word}`)
      .then((res) => res.json())
      .then(setWordData)
      .catch((err) => console.error(err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleSearchSubmit={handleSearchSubmit}
                handleSearchChange={handleSearchChange}
              />
            }
          />
          <Route
            path={`:word`}
            element={<Word wordData={wordData} fetchWord={fetchWord} />}
          >
            <Route />
            <Route />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
