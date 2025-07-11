import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import LoyaltyPage from "./pages/LoyaltyPage"
import HotelListings from "./pages/HotelListings"
import PaymentPage from "./pages/PaymentPage"
import ReservationHistory from "./pages/ReservationHistory"
import ProfilePage from "./pages/ProfilePage"
import PaymentConfirmationPage from "./pages/PaymentConfirmationPage"
import PaymentSuccessPage from "./pages/PaymentSuccessPage"
import CreateOfferPage from "./pages/CreateOfferPage"
import Offers from "./pages/Offers"
import NotFoundPage from "./pages/NotFoundPage"
import StatisticsPage from "./pages/StatisticsPage"
import DestinationDetailsPage from "./pages/DestinationDetailsPage"
import 'leaflet/dist/leaflet.css';
import FidelityManagementPage from "./pages/FidelityManagementPage"
import AdminLayout from "./components/AdminLayout"



function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="loyalty" element={<LoyaltyPage />} />
            <Route path="offers" element={<Offers />} />
            <Route path="hotels" element={<HotelListings />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="payment-confirmation" element={<PaymentConfirmationPage />} />
            <Route path="payment-success" element={<PaymentSuccessPage />} />
            <Route path="reservations" element={<ReservationHistory />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="create-offer" element={<CreateOfferPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
            <Route path="destination/:id" element={<DestinationDetailsPage />} />


          </Route>
          <Route path="/admin" element={<AdminLayout />}>
                <Route path="fidelity" element={<FidelityManagementPage />} />
                {/* Add other admin routes as needed */}
              </Route>
          <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
