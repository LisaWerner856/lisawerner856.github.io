import { Outlet } from 'react-router-dom'
import Starfield from './components/Starfield'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Starfield />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
