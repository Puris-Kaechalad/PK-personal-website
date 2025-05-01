import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
