import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Struktur = lazy(() => import("./pages/Struktur"));
const Galeri = lazy(() => import("./pages/Galeri"));
const Produk = lazy(() => import("./pages/Produk"));
const Pemira = lazy(() => import("./pages/Pemira"));
const Formpemira = lazy(() => import("./pages/formpemira"));
const Department = lazy(() => import("./pages/department"));
const KotakSaran = lazy(() => import("./pages/KotakSaran"));


export default function App() {
  return (
    <Suspense fallback={<div className="route-loader">Memuat halaman...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/pemira" element={<Pemira />} />
        {/* <Route path="/formpemira" element={<Formpemira />} /> */}
        <Route path="/department" element={<Department />} />
        <Route path="/kotaksaran" element={<KotakSaran />} />
        <Route path="/formpemira" element={
          <ErrorBoundary>
            <Formpemira />
          </ErrorBoundary>
        } />
      </Routes>
    </Suspense>
  );
}
