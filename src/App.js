import { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";
import * as letterService from "./services/letters";
import AddLetter from "./pages/AddLetter/AddLetter";


function App() {
  const [letters, setLetters] = useState([]);
  useEffect (() => {letterService.getAll().then(allLetters=> setLetters (allLetters))

  })
  const handleAddLetter = async (newLetterData) => {
    const newLetter = await letterService.create(newLetterData);
    setLetters([...letters, newLetter]);
  };
  return (
    <div className="App">
      <header className="App-header">
        Alef-Beis Letters!
        <nav>
          <NavLink to="/">Letters List</NavLink>
          <NavLink className="m-left" to="/add">
            Add Letter
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/add"
            element={<AddLetter handleAddLetter={handleAddLetter} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
