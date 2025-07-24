import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import KYCForm from './pages/KYCForm';
import DeepPayInfo from './pages/DeepPayInfo';
import KYCRequired from './pages/KYCRequired';
import Profile from './pages/Profile';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kyc-form" element={<KYCForm />} />
          <Route path="/deeppay-info" element={<DeepPayInfo />} />
          <Route path="/kyc-required" element={<KYCRequired />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 