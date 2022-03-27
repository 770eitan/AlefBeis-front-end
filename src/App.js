import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import AddLetter from './pages/AddLetter/AddLetter'
function App() {
  const [letters, setLetters] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        Alef-Beis Letters!
        <nav>
          <NavLink to='/'>Letters List</NavLink>
          <NavLink className='m-left' to='/add'>Add Letter</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/add' element={<AddLetter/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App