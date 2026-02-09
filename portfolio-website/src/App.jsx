import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function Header(){
  <header class="p-4 bg-gradient-to-r from-[#f9a8d41f] to-[#f9a8d41f] shadow-purple">
        <section class="max-w-4xl mx-auto flex justify-between items-center relative">

            <a class="font-bold text-2xl font-jua" href="index.html">
                Lisa Werner
            </a>

            <nav class="hidden md:flex space-x-6 text-lg">
                <a class="underline" href="#">Home</a>
                <a href="projects.html">Projects</a>
                <a href="contact.html">Contact</a>
            </nav>

            <button class="md:hidden flex flex-col justify-between w-6 h-5" onclick="toggleMenu()"
                aria-label="Open menu">
                <span class="block h-0.5 bg-white"></span>
                <span class="block h-0.5 bg-white"></span>
                <span class="block h-0.5 bg-white"></span>
            </button>

            <nav id="mobileMenu"
                class="hidden absolute top-full left-0 w-full bg-customLightPurple text-center text-lg shadow-lg md:hidden">
                <a class="block p-4 underline" href="#">Home</a>
                <a class="block p-4" href="projects.html">Projects</a>
                <a class="block p-4" href="contact.html">Contact</a>
            </nav>

        </section>
    </header>
}

export default App
