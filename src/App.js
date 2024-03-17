import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CityMap from "./pages/CityMap";
import Recents from "./pages/Recents";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/citymap" element={<CityMap />} />
        <Route path="/recents" element={<Recents />} />
      </Routes>
    </div>
  );
}

export default App;
