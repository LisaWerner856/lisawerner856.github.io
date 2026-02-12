import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectBlog from './pages/ProjectBlog'
import '../app/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:slug" element={<ProjectBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
