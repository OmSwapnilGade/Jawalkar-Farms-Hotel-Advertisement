import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppFAB from './components/ui/WhatsAppFAB.jsx'

import HomePage from './pages/HomePage.jsx'
import RoomsPage from './pages/RoomsPage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'
import PackagesPage from './pages/PackagesPage.jsx'
import ExperiencesPage from './pages/ExperiencesPage.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import NearbyPage from './pages/NearbyPage.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/nearby" element={<NearbyPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
