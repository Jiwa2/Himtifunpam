import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Struktur from "./pages/Struktur";
import Galeri from "./pages/Galeri";
import Produk from "./pages/Produk";
import Pemira from "./pages/Pemira";
import Formpemira from "./pages/Formpemira";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/pemira" element={<Pemira />} />
      <Route path="/Formpemira" element={<Formpemira />} />
    </Routes>
  );
}
