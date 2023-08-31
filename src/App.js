import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Details from "./containers/Details";
import PurchaseSuccess from "./containers/PurchaseSuccess";
import CreateAccount from "./containers/CreateAccount";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:productId" element={<Details />} />
          <Route path="/purchase_success" element={<PurchaseSuccess />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
