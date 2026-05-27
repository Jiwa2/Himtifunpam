import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Struktur from "./pages/struktur";
import Galeri from "./pages/galeri";
import Produk from "./pages/produk";
import Pemira from "./pages/pemira";
import Formpemira from "./pages/formpemira";
import Department from "./pages/department"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/pemira" element={<Pemira />} />
      <Route path="/Formpemira" element={<Formpemira />} />
      <Route path="/department" element={<Department />} />
    </Routes>
  );
}
