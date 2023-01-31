import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import NotFound from "./pages/404/404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
     
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
