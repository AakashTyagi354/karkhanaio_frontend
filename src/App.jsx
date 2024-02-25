import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
