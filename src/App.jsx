import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import LoyaltyPage from "./pages/LoyaltyPage"
import HotelListings from "./pages/HotelListings"
import PaymentPage from "./pages/PaymentPage"
import ReservationHistory from "./pages/ReservationHistory"
import ProfilePage from "./pages/ProfilePage"


function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="loyalty" element={<LoyaltyPage />} />
            <Route path="hotels" element={<HotelListings />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="reservations" element={<ReservationHistory />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
