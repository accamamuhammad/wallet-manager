import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import WalletPage from "./pages/WalletPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wallet/:vaultName" element={<WalletPage />} />
      </Routes>
    </Router>
  );
}

export default App;
