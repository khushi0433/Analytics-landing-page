import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Hero from "./components/common/hero";
import Dashboard from "./components/dashboard";
import AnalyticsSection from "./components/Analytics";
import ReportsSection from "./components/reports";
import ContactSection from "./components/contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <div className="bg-[#0a0e27] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1 className="p-8 text-3xl">Home Page</h1>} />
          <Route path="/dashboard" element={<h1 className="p-8 text-3xl">Dashboard</h1>} />
          <Route path="/analytics" element={<h1 className="p-8 text-3xl">Analytics</h1>} />
          <Route path="/reports" element={<h1 className="p-8 text-3xl">Reports</h1>} />
          <Route path="/contact" element={<h1 className="p-8 text-3xl">Contact</h1>} />
        </Routes>
        <Hero/>
        <Dashboard />
        <AnalyticsSection />
        <ReportsSection />
        <ContactSection />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;