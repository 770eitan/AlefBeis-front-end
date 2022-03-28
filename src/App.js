import { useState, useEffect } from "react";
import { Route, Routes, NavLink,useNavigate } from "react-router-dom";
import "./App.css";
import * as letterService from "./services/letters";
import LetterList from "./pages/LetterList/LetterList";
import AddLetter from "./pages/AddLetter/AddLetter";

function App() {
  const [letters, setLetters] = useState([]);
  useEffect(() => {
    letterService.getAll().then((allLetters) => setLetters(allLetters));
  });
  const navigate = useNavigate([]);
  const handleAddLetter = async (newLetterData) => {
    const newLetter = await letterService.create(newLetterData);
    setLetters([...letters, newLetter]);
    navigate("/");
  };
  const handleDeleteLetter = id => {
    letterService.deleteOne(id)
    .then(deletedLetter => setLetters(letters.filter(letter => letter._id !== id)))
  }
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
          <Route path="/" element={<LetterList letters={letters} handleDeleteLetter= {handleDeleteLetter}/> 
                             
          }/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
