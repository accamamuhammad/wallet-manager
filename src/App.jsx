import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import VaultPage from "./pages/VaultPage";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vault" element={<VaultPage />} />
      </Routes>
    </Router>
  );
}
