import Home from "./pages/home/home";
import NotFound from "./pages/404/404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
     
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
