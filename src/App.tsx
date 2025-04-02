import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './routes/HomePage'
import { MyFavoriteThings } from './routes/MyFavoriteThings'

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/favorites-things" element={<MyFavoriteThings />} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/blog/:id" element={<div>Blog Post</div>} />
      </Routes>
    </>
  )
}

export default App
