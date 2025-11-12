import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/navbar";

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
      </div>
    </Router>
  );
}

export default App;