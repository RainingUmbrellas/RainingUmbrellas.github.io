import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MyFavoriteThings } from './routes/MyFavoriteThings'
import { BlogPage } from './routes/BlogPage'
import { Layout } from './Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/favorites-things" element={<MyFavoriteThings />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<div>Blog Post</div>} />
        <Route path='articles' element={<div>Article Page</div>} />
      </Routes>
    </>
  )
}

export default App
