import './App.css'
import { Routes, Route } from 'react-router-dom'

import ContactTestimonials from './pages/ContactTestimonials'
import AboutMeSection from './pages/AboutMeSection'
import SecurePayments from './pages/SecurePayments'
import StrategySection from './pages/StrategySection'
import TechStackSection from './pages/TechStackSection'

import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AboutMeSection />} />
        <Route path="/secure-payments" element={<SecurePayments />} />
        <Route path="/strategy" element={<StrategySection />} />
        <Route path="/testimonials" element={<ContactTestimonials />} />
        <Route path="/tech-stack" element={<TechStackSection />} />
      </Routes>
    </>
  )
}

export default App
