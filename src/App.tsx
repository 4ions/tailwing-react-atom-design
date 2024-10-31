import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaymentMethodPage from './pages/PaymentMethod'
import CurrencyPage from './pages/Currency'
import TonePage from './pages/Tone'

import LanguagePage from './pages/Language'
import Subcategory from './pages/SubCategory'
import CategoryPage from './pages/Category'

import './App.css'
import MainLayout from './templates/MainLayout'
import AudiencePage from './pages/Audience'
import WebSitePage from './pages/WebSite'
import CommercialActivityPage from './pages/CommercialActivity'
import InitialFormPage from './pages/InitialForm'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Routes that use the MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>Dashboard</h1>} />
            <Route path="/payment-method" element={<PaymentMethodPage />} />
            <Route path="/currency" element={<CurrencyPage />} />
            <Route path="/tone" element={<TonePage />} />
            <Route path="/audience" element={<AudiencePage />} />
            <Route path="/language" element={<LanguagePage />} />
            <Route path="/subcategory" element={<Subcategory />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/website" element={<WebSitePage />} />
            <Route
              path="/commercial-activity"
              element={<CommercialActivityPage />}
            />
            <Route path="/form-inicial" element={<InitialFormPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
