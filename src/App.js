import { useState, useEffect } from "react";
import { Route, Routes, NavLink,useNavigate } from "react-router-dom";
import "./App.css";
import * as letterService from "./services/letters";
import LetterList from "./pages/LetterList/LetterList";
import AddLetter from "./pages/AddLetter/AddLetter";
import EditLetter from "./pages/EditLetter/EditLetter";

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
  const handleUpdateLetter = updatedLetterData => {
    letterService.update(updatedLetterData)
    .then(updatedLetter => {
      const newLettersArray = letters.map(letter => 
        letter._id === updatedLetter._id ? updatedLetter : letter
      )
      setLetters(newLettersArray)
			navigate('/')
    })
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
          				<Route path='/edit' element={<EditLetter handleUpdateLetter={handleUpdateLetter} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
